# !/usr/bin/env python3

import os
import sys
from random import seed
from random import randint
import math
import os
import jinja2
import random
import json

from shutil import copyfile

from pathlib import Path
from typing import Union, Tuple, List


from src.environment.scenarios import Scenario


class ManualScenario(Scenario):
    def __init__(
            self,
            env_name: str,
            agent_paths: List[List[int]],
            human_paths: List[List[int]]
    ):
        super().__init__(env_name=env_name)

        self.agent_paths = agent_paths
        self.human_paths = human_paths

    def generate_scenario(
            self,
            num_humans: Union[int, Tuple[int, int]] = (5, 25)
    ):
        if self.config_nav_path is not None:
            nav_map = self.load_nav_nodes(self.config_nav_path)
            robot_positions = nav_map
        else:
            raise Exception("Manual scenarios need a custom map")

        if isinstance(num_humans, tuple):
            num_humans = randint(num_humans[0], num_humans[1])


        robot_path = random.sample(self.agent_paths, 1)[0]
        robot_start = robot_path[0]
        robot_end = robot_path[-1]

        human_positions = []

        # TODO - ask jarrett, but maybe having the same starting point is ok.
        allowed_human_paths = self.human_paths  # [x for x in self.human_paths if x[0] == robot_start]

        assert len(allowed_human_paths) > 0, 'Every human path overlaps with the agents'

        for i in range(0, num_humans):
            human_path = random.sample(allowed_human_paths, 1)[0]
            human_start = human_path[0]
            human_end = human_path[-1]

            human_list = [robot_positions[human_start][0],
                          robot_positions[human_start][1],
                          human_end]

            human_list.extend(list(reversed(human_path)))
            human_list.extend(human_path)
            human_positions.append(human_list)
        # Build the Config Dictionary
        human_dev = 1.0
        config = {
            'robot_start': robot_positions[robot_start],
            'robot_end': robot_positions[robot_end],
            'human_count': num_humans,
            'position_count': len(robot_positions),
            'nav_count': len(nav_map),
            'dev': human_dev,
            'positions': robot_positions,
            'human_positions': human_positions,
            'nav_map': nav_map
        }
        self.make_scenario(config)