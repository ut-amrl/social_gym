import numpy as np
from typing import Dict, Optional

from src.environment.observations.types.manual_zone import AgentZoneCurrentOrder, AgentZonePriorityOrder, AgentInZone
from src.environment.rewards import Reward
from src.environment.ros_social_gym import RosSocialEnv


class EnforcedOrder(Reward):
    """
    """

    on_enter: bool
    on_exit: bool
    previous_zone_state: Optional[bool]

    def __init__(
            self,
            weight: float = 1.0,
            *args,
            on_enter: bool = True,
            on_exit: bool = True,
            continuous: bool = False,
            weak_out_of_zone: bool = True,
            allow_any_order: bool = False,
            **kwargs
    ):
        super().__init__(weight)

        self.on_enter = on_enter
        self.on_exit = on_exit
        self.continuous = continuous
        self.weak_out_of_zone = weak_out_of_zone
        self.allow_any_order = allow_any_order

        self.previous_zone_state = None

    @classmethod
    def name(cls):
        return "manual_zone_enforced_order"

    def __score__(self, env: RosSocialEnv, observation_map: Dict[str, np.array]) -> float:
        assert AgentZonePriorityOrder.name() in observation_map, \
            'Manual Zone\'s Agents priority order needs to be in the observations map'
        assert AgentZoneCurrentOrder.name() in observation_map, \
            'Manual Zone\'s Agents current order needs to be in the observations map'
        assert AgentInZone.name() in observation_map, \
            'Manual Zone\'s Agents In Zone needs to be in the observations map'

        in_zone = observation_map[AgentInZone.name()][0] == 1.
        curr_order = observation_map[AgentZoneCurrentOrder.name()]
        priority_order = observation_map[AgentZonePriorityOrder.name()]

        last_in_zone = self.previous_zone_state
        self.previous_zone_state = in_zone

        if curr_order == -1 or priority_order == -1 or last_in_zone is None:
            return 0.

        distance_to_correct_order = -abs(curr_order - priority_order)

        entering = in_zone and not last_in_zone
        exiting = not in_zone and last_in_zone
        if (entering and not self.on_enter) or (exiting and not self.on_exit):
            if self.continuous:
                if (distance_to_correct_order == 0 or self.allow_any_order) and in_zone:
                    return 1.
                elif self.weak_out_of_zone and (distance_to_correct_order == 0 or self.allow_any_order) and not in_zone:
                    return 0.1
            return 0.

        if (distance_to_correct_order == 0 or self.allow_any_order) and (entering or exiting):
            if entering:
                print("Enter correctly")
            if exiting:
                print("Exiting correctly")
            return 1. if entering else 0.
        else:
            return 0.

    def __reset__(self):
        self.previous_zone_state = None