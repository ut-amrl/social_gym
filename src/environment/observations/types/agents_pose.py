import numpy as np

from src.environment.ros_social_gym import RosSocialEnv
from src.environment.observations import Observation
from src.environment.utils import poses_to_np_array


class AgentsPose(Observation):
    """
    Returns the X, Y, Theta positions of the agent in the environment.
    """

    @classmethod
    def name(cls):
        return "agents_pose"

    def __len__(self):
        return 3

    def __observations__(self, env: RosSocialEnv, env_response) -> np.array:
        agent_pose = poses_to_np_array(env_response.robot_poses)
        return agent_pose
