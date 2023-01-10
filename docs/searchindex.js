Search.setIndex({docnames:["contributing/making_docs","index","installation/advanced_usage","installation/installation","installation/installation__deprecated","intro/features","intro/making_a_new_scene","intro/what_is_social_gym","modules/modules","modules/src","modules/src.environment","modules/src.environment.callbacks","modules/src.environment.environment_types","modules/src.environment.extractors","modules/src.environment.observations","modules/src.environment.observations.types","modules/src.environment.observations.types.manual_zone","modules/src.environment.rewards","modules/src.environment.rewards.types","modules/src.environment.rewards.types.manual_zone","modules/src.environment.rewards.wrappers","modules/src.environment.scenarios","modules/src.environment.scenarios.types","modules/src.environment.services","modules/src.environment.utils","modules/src.environment.wrappers"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["contributing/making_docs.md","index.rst","installation/advanced_usage.md","installation/installation.md","installation/installation__deprecated.md","intro/features.md","intro/making_a_new_scene.md","intro/what_is_social_gym.md","modules/modules.rst","modules/src.rst","modules/src.environment.rst","modules/src.environment.callbacks.rst","modules/src.environment.environment_types.rst","modules/src.environment.extractors.rst","modules/src.environment.observations.rst","modules/src.environment.observations.types.rst","modules/src.environment.observations.types.manual_zone.rst","modules/src.environment.rewards.rst","modules/src.environment.rewards.types.rst","modules/src.environment.rewards.types.manual_zone.rst","modules/src.environment.rewards.wrappers.rst","modules/src.environment.scenarios.rst","modules/src.environment.scenarios.types.rst","modules/src.environment.services.rst","modules/src.environment.utils.rst","modules/src.environment.wrappers.rst"],objects:{"":[[9,0,0,"-","src"]],"src.config_run":[[9,1,1,"","kinds"],[9,3,1,"","run"]],"src.config_run.kinds":[[9,2,1,"","ao"],[9,2,1,"","eo"],[9,2,1,"","sacadrl"]],"src.environment":[[11,0,0,"-","callbacks"],[12,0,0,"-","environment_types"],[13,0,0,"-","extractors"],[14,0,0,"-","observations"],[17,0,0,"-","rewards"],[10,0,0,"-","ros_social_gym"],[21,0,0,"-","scenarios"],[23,0,0,"-","services"],[24,0,0,"-","utils"],[25,0,0,"-","wrappers"]],"src.environment.callbacks":[[11,0,0,"-","callbacks"]],"src.environment.callbacks.callbacks":[[11,1,1,"","EvalCallback"],[11,1,1,"","OptunaCallback"]],"src.environment.callbacks.callbacks.EvalCallback":[[11,4,1,"","update_child_locals"]],"src.environment.environment_types":[[12,0,0,"-","manual_zone"]],"src.environment.environment_types.manual_zone":[[12,1,1,"","ManualZoneEnv"],[12,1,1,"","ManualZoneUTMRSResponse"],[12,1,1,"","RvisZoneVisualization"]],"src.environment.environment_types.manual_zone.ManualZoneEnv":[[12,2,1,"","agents_priority_orders"],[12,4,1,"","reset"],[12,4,1,"","sim_step"]],"src.environment.environment_types.manual_zone.ManualZoneUTMRSResponse":[[12,2,1,"","agents_current_order"],[12,2,1,"","agents_priority_order"],[12,2,1,"","entering"],[12,2,1,"","exiting"],[12,2,1,"","in_zone"],[12,2,1,"","number_agents_entering"],[12,2,1,"","number_agents_exiting"],[12,4,1,"","process"],[12,4,1,"","set_zone_vars"]],"src.environment.environment_types.manual_zone.RvisZoneVisualization":[[12,4,1,"","point"],[12,4,1,"","publish"],[12,4,1,"","rect"]],"src.environment.extractors":[[13,0,0,"-","lstm_agent_obs"]],"src.environment.extractors.lstm_agent_obs":[[13,1,1,"","LSTMAgentObs"]],"src.environment.extractors.lstm_agent_obs.LSTMAgentObs":[[13,4,1,"","forward"],[13,4,1,"","make_tensors"]],"src.environment.observations":[[14,0,0,"-","common_observations"],[14,0,0,"-","observation"],[14,0,0,"-","observer"],[15,0,0,"-","types"]],"src.environment.observations.common_observations":[[14,3,1,"","dsacadrl_observations"]],"src.environment.observations.observation":[[14,1,1,"","Observation"]],"src.environment.observations.observation.Observation":[[14,4,1,"","name"],[14,4,1,"","observations"]],"src.environment.observations.observer":[[14,1,1,"","Observer"]],"src.environment.observations.observer.Observer":[[14,4,1,"","arr_to_dict"],[14,4,1,"","make_observation"],[14,2,1,"","registered_observations"],[14,4,1,"","reset"],[14,4,1,"","setup"]],"src.environment.observations.types":[[15,0,0,"-","agents_goal_distance"],[15,0,0,"-","agents_heading_direction"],[15,0,0,"-","agents_others_distance"],[15,0,0,"-","agents_pose"],[15,0,0,"-","agents_preferred_velocity"],[15,0,0,"-","agents_velocity"],[15,0,0,"-","collision_observation"],[16,0,0,"-","manual_zone"],[15,0,0,"-","other_agent_observables"],[15,0,0,"-","others_heading_direction"],[15,0,0,"-","others_poses"],[15,0,0,"-","others_velocities"],[15,0,0,"-","success_observation"]],"src.environment.observations.types.agents_goal_distance":[[15,1,1,"","AgentsGoalDistance"]],"src.environment.observations.types.agents_goal_distance.AgentsGoalDistance":[[15,2,1,"","history"],[15,2,1,"","history_length"],[15,4,1,"","name"]],"src.environment.observations.types.agents_heading_direction":[[15,1,1,"","AgentsHeadingDirection"]],"src.environment.observations.types.agents_heading_direction.AgentsHeadingDirection":[[15,4,1,"","name"]],"src.environment.observations.types.agents_others_distance":[[15,1,1,"","AgentsOthersDistance"]],"src.environment.observations.types.agents_others_distance.AgentsOthersDistance":[[15,4,1,"","name"],[15,2,1,"","num_others"]],"src.environment.observations.types.agents_pose":[[15,1,1,"","AgentsPose"]],"src.environment.observations.types.agents_pose.AgentsPose":[[15,4,1,"","name"]],"src.environment.observations.types.agents_preferred_velocity":[[15,1,1,"","AgentsPreferredVelocity"]],"src.environment.observations.types.agents_preferred_velocity.AgentsPreferredVelocity":[[15,4,1,"","name"]],"src.environment.observations.types.agents_velocity":[[15,1,1,"","AgentsVelocity"]],"src.environment.observations.types.agents_velocity.AgentsVelocity":[[15,2,1,"","history"],[15,2,1,"","history_length"],[15,2,1,"","ignore_theta"],[15,4,1,"","name"]],"src.environment.observations.types.collision_observation":[[15,1,1,"","CollisionObservation"]],"src.environment.observations.types.collision_observation.CollisionObservation":[[15,4,1,"","name"]],"src.environment.observations.types.manual_zone":[[16,0,0,"-","agent_in_zone"],[16,0,0,"-","agent_zone_current_order"],[16,0,0,"-","agent_zone_priority_order"]],"src.environment.observations.types.manual_zone.agent_in_zone":[[16,1,1,"","AgentInZone"]],"src.environment.observations.types.manual_zone.agent_in_zone.AgentInZone":[[16,4,1,"","name"]],"src.environment.observations.types.manual_zone.agent_zone_current_order":[[16,1,1,"","AgentZoneCurrentOrder"]],"src.environment.observations.types.manual_zone.agent_zone_current_order.AgentZoneCurrentOrder":[[16,4,1,"","name"]],"src.environment.observations.types.manual_zone.agent_zone_priority_order":[[16,1,1,"","AgentZonePriorityOrder"]],"src.environment.observations.types.manual_zone.agent_zone_priority_order.AgentZonePriorityOrder":[[16,4,1,"","name"]],"src.environment.observations.types.other_agent_observables":[[15,1,1,"","OtherAgentObservables"]],"src.environment.observations.types.other_agent_observables.OtherAgentObservables":[[15,4,1,"","name"],[15,2,1,"","num_others"]],"src.environment.observations.types.others_heading_direction":[[15,1,1,"","OthersHeadingDirection"]],"src.environment.observations.types.others_heading_direction.OthersHeadingDirection":[[15,4,1,"","name"],[15,2,1,"","num_others"]],"src.environment.observations.types.others_poses":[[15,1,1,"","OthersPoses"]],"src.environment.observations.types.others_poses.OthersPoses":[[15,4,1,"","name"],[15,2,1,"","num_others"]],"src.environment.observations.types.others_velocities":[[15,1,1,"","OthersVelocities"]],"src.environment.observations.types.others_velocities.OthersVelocities":[[15,4,1,"","name"],[15,2,1,"","num_others"]],"src.environment.observations.types.success_observation":[[15,1,1,"","SuccessObservation"]],"src.environment.observations.types.success_observation.SuccessObservation":[[15,4,1,"","name"]],"src.environment.rewards":[[17,0,0,"-","common_rewards"],[17,0,0,"-","reward"],[17,0,0,"-","rewarder"],[18,0,0,"-","types"],[20,0,0,"-","wrappers"]],"src.environment.rewards.common_rewards":[[17,3,1,"","dsacadrl_rewards"]],"src.environment.rewards.reward":[[17,1,1,"","Reward"]],"src.environment.rewards.reward.Reward":[[17,4,1,"","name"],[17,4,1,"","score"],[17,2,1,"","weight"]],"src.environment.rewards.rewarder":[[17,1,1,"","Rewarder"]],"src.environment.rewards.rewarder.Rewarder":[[17,2,1,"","registered_rewards"],[17,4,1,"","reset"],[17,4,1,"","reward"],[17,4,1,"","setup"]],"src.environment.rewards.types":[[18,0,0,"-","collisions"],[18,0,0,"-","existence_penalty"],[18,0,0,"-","goal_distance"],[18,0,0,"-","goal_distance_change"],[19,0,0,"-","manual_zone"],[18,0,0,"-","preferred_velocity"],[18,0,0,"-","social_norm_cross"],[18,0,0,"-","social_norm_overtake"],[18,0,0,"-","social_norm_pass"],[18,0,0,"-","success"],[18,0,0,"-","velocity_control"]],"src.environment.rewards.types.collisions":[[18,1,1,"","Collisions"]],"src.environment.rewards.types.collisions.Collisions":[[18,4,1,"","name"]],"src.environment.rewards.types.existence_penalty":[[18,1,1,"","ExistencePenalty"]],"src.environment.rewards.types.existence_penalty.ExistencePenalty":[[18,4,1,"","name"]],"src.environment.rewards.types.goal_distance":[[18,1,1,"","GoalDistance"]],"src.environment.rewards.types.goal_distance.GoalDistance":[[18,4,1,"","name"]],"src.environment.rewards.types.goal_distance_change":[[18,1,1,"","GoalDistanceChange"]],"src.environment.rewards.types.goal_distance_change.GoalDistanceChange":[[18,4,1,"","name"]],"src.environment.rewards.types.manual_zone":[[19,0,0,"-","enforced_order"]],"src.environment.rewards.types.manual_zone.enforced_order":[[19,1,1,"","EnforcedOrder"]],"src.environment.rewards.types.manual_zone.enforced_order.EnforcedOrder":[[19,4,1,"","name"],[19,2,1,"","on_enter"],[19,2,1,"","on_exit"],[19,2,1,"","previous_zone_state"]],"src.environment.rewards.types.preferred_velocity":[[18,1,1,"","PreferredVelocity"]],"src.environment.rewards.types.preferred_velocity.PreferredVelocity":[[18,4,1,"","name"]],"src.environment.rewards.types.social_norm_cross":[[18,1,1,"","SocialNormCross"]],"src.environment.rewards.types.social_norm_cross.SocialNormCross":[[18,2,1,"","dist_to_other_threshold"],[18,2,1,"","goal_dist_threshold"],[18,2,1,"","heading_angle_thresholds"],[18,4,1,"","name"],[18,2,1,"","relative_agent_to_other_angle_threshold"]],"src.environment.rewards.types.social_norm_overtake":[[18,1,1,"","SocialNormOvertake"]],"src.environment.rewards.types.social_norm_overtake.SocialNormOvertake":[[18,2,1,"","goal_dist_threshold"],[18,2,1,"","heading_angle_threshold"],[18,4,1,"","name"],[18,2,1,"","px_threshold"],[18,2,1,"","py_threshold"]],"src.environment.rewards.types.social_norm_pass":[[18,1,1,"","SocialNormPass"]],"src.environment.rewards.types.social_norm_pass.SocialNormPass":[[18,2,1,"","goal_dist_threshold"],[18,2,1,"","heading_angle_threshold"],[18,4,1,"","name"],[18,2,1,"","px_threshold"],[18,2,1,"","py_threshold"]],"src.environment.rewards.types.success":[[18,1,1,"","Success"]],"src.environment.rewards.types.success.Success":[[18,4,1,"","name"]],"src.environment.rewards.types.velocity_control":[[18,1,1,"","VelocityControl"]],"src.environment.rewards.types.velocity_control.VelocityControl":[[18,4,1,"","name"]],"src.environment.rewards.wrappers":[[20,0,0,"-","linear_weight_scheduler"]],"src.environment.rewards.wrappers.linear_weight_scheduler":[[20,1,1,"","LinearWeightScheduler"]],"src.environment.rewards.wrappers.linear_weight_scheduler.LinearWeightScheduler":[[20,4,1,"","name"]],"src.environment.ros_social_gym":[[10,1,1,"","AgentColor"],[10,1,1,"","RosSocialEnv"]],"src.environment.ros_social_gym.RosSocialEnv":[[10,4,1,"","action_space"],[10,4,1,"","calculate_reward"],[10,4,1,"","close"],[10,4,1,"","default_action"],[10,2,1,"","env_response_type"],[10,2,1,"","launch_config"],[10,4,1,"","make_observation"],[10,2,1,"","metadata"],[10,4,1,"","new_scenario"],[10,2,1,"","num_agents"],[10,2,1,"","num_humans"],[10,4,1,"","observation_space"],[10,2,1,"","observer"],[10,4,1,"","render"],[10,4,1,"","reset"],[10,2,1,"","rewarder"],[10,4,1,"","seed"],[10,4,1,"","sim_step"],[10,4,1,"","state"],[10,4,1,"","step"]],"src.environment.scenarios":[[21,0,0,"-","common_scenarios"],[21,0,0,"-","scenario"],[22,0,0,"-","types"]],"src.environment.scenarios.common_scenarios":[[21,3,1,"","closed_door_1__opposing_sides"],[21,3,1,"","closed_door_1__same_goals"],[21,3,1,"","elevator_loading"],[21,3,1,"","exp1_train_scenario"],[21,3,1,"","exp2_train_scenario"]],"src.environment.scenarios.scenario":[[21,1,1,"","Scenario"]],"src.environment.scenarios.scenario.Scenario":[[21,4,1,"","generate_scenario"],[21,4,1,"","load_nav_nodes"],[21,4,1,"","make_scenario"]],"src.environment.scenarios.types":[[22,0,0,"-","cycle"],[22,0,0,"-","graph_nav"],[22,0,0,"-","manual"]],"src.environment.scenarios.types.cycle":[[22,1,1,"","CycleScenario"]],"src.environment.scenarios.types.cycle.CycleScenario":[[22,4,1,"","generate_scenario"]],"src.environment.scenarios.types.graph_nav":[[22,1,1,"","GraphNavScenario"]],"src.environment.scenarios.types.graph_nav.GraphNavScenario":[[22,4,1,"","generate_scenario"]],"src.environment.scenarios.types.manual":[[22,1,1,"","ManualScenario"]],"src.environment.scenarios.types.manual.ManualScenario":[[22,4,1,"","generate_scenario"]],"src.environment.services":[[23,0,0,"-","utmrs"]],"src.environment.services.utmrs":[[23,1,1,"","UTMRS"],[23,1,1,"","UTMRSResponse"]],"src.environment.services.utmrs.UTMRS":[[23,4,1,"","reset"],[23,4,1,"","step"]],"src.environment.services.utmrs.UTMRSResponse":[[23,2,1,"","collision"],[23,2,1,"","done"],[23,2,1,"","door_pose"],[23,2,1,"","door_state"],[23,2,1,"","follow_target"],[23,2,1,"","goal_pose"],[23,2,1,"","human_poses"],[23,2,1,"","human_vels"],[23,2,1,"","local_target"],[23,2,1,"","other_robot_poses"],[23,2,1,"","other_robot_vels"],[23,4,1,"","process"],[23,2,1,"","robot_poses"],[23,2,1,"","robot_state"],[23,2,1,"","robot_vels"],[23,4,1,"","set_vars"],[23,2,1,"","success"]],"src.environment.utils":[[24,0,0,"-","evaluate_policy"],[24,0,0,"-","utils"]],"src.environment.utils.evaluate_policy":[[24,3,1,"","evaluate_policy"]],"src.environment.utils.utils":[[24,1,1,"","LogFilter"],[24,3,1,"","filter_stdout"],[24,3,1,"","get_tboard_writer"],[24,3,1,"","poses_to_np_array"]],"src.environment.utils.utils.LogFilter":[[24,4,1,"","flush"],[24,4,1,"","write"]],"src.environment.wrappers":[[25,0,0,"-","collision_episode_ender"],[25,0,0,"-","entropy_episode_ender"],[25,0,0,"-","new_scenario_wrapper"],[25,0,0,"-","reward_stripper"],[25,0,0,"-","tensorboard_writer"],[25,0,0,"-","time_limit"]],"src.environment.wrappers.collision_episode_ender":[[25,1,1,"","CollisionEpisodeEnder"]],"src.environment.wrappers.collision_episode_ender.CollisionEpisodeEnder":[[25,4,1,"","seed"],[25,4,1,"","step"]],"src.environment.wrappers.entropy_episode_ender":[[25,1,1,"","EntropyEpisodeEnder"]],"src.environment.wrappers.entropy_episode_ender.EntropyEpisodeEnder":[[25,2,1,"","agent_positions"],[25,4,1,"","calculate_deltas"],[25,2,1,"","distance_delta"],[25,2,1,"","negative_multiplier_only"],[25,4,1,"","reset"],[25,4,1,"","reset_positions"],[25,2,1,"","reward_multiplier"],[25,4,1,"","seed"],[25,4,1,"","step"],[25,2,1,"","timestep_threshold"]],"src.environment.wrappers.new_scenario_wrapper":[[25,1,1,"","NewScenarioWrapper"]],"src.environment.wrappers.new_scenario_wrapper.NewScenarioWrapper":[[25,2,1,"","env"],[25,2,1,"","episode_count"],[25,2,1,"","new_scenario_episode_frequency"],[25,2,1,"","plans"],[25,4,1,"","reset"],[25,4,1,"","seed"]],"src.environment.wrappers.reward_stripper":[[25,1,1,"","RewardStripper"]],"src.environment.wrappers.reward_stripper.RewardStripper":[[25,4,1,"","seed"],[25,4,1,"","step"]],"src.environment.wrappers.tensorboard_writer":[[25,1,1,"","TensorboardWriter"]],"src.environment.wrappers.tensorboard_writer.TensorboardWriter":[[25,4,1,"","image_callback"],[25,4,1,"","reset"],[25,4,1,"","seed"],[25,4,1,"","step"]],"src.environment.wrappers.time_limit":[[25,1,1,"","TimeLimitWrapper"]],"src.environment.wrappers.time_limit.TimeLimitWrapper":[[25,4,1,"","reset"],[25,4,1,"","seed"],[25,4,1,"","step"]],"src.multi_agent_optuna":[[9,3,1,"","objective"]],src:[[9,0,0,"-","config_run"],[10,0,0,"-","environment"],[9,0,0,"-","multi_agent_optuna"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method"},terms:{"0":[0,1,2,6,9,10,17,18,19,20,22,24],"017613":2,"08862":18,"1":[5,9,10,11,15,17,18,19,20,22],"10":[2,9,18,24],"100":9,"1000":20,"100000":9,"10m":2,"10minut":0,"11":[2,18],"11_20_22":[3,4],"12":[2,18],"12345":2,"127":0,"13":2,"14":2,"15":[2,4],"16":2,"1671386774":2,"168961":2,"17":2,"1703":18,"18":2,"188148416":2,"19":2,"192522299":2,"199740381":2,"2":[1,9,18],"20":[2,3],"2000":9,"20221218_multi_agent_finishing_and_cleanup":[3,4],"204534827":2,"21":2,"22":2,"2222":2,"2223":2,"25":[9,22],"25000":9,"26":2,"2d":[3,4,7],"2nd":2,"3":18,"30m":4,"30minut":4,"34904946":24,"356194490192345":18,"4":18,"40":2,"402":24,"40m":3,"5":[0,18,22],"6":[0,2],"6hour":2,"7":2,"7853981633974483":18,"8":[2,3,4],"8000":0,"9":2,"abstract":[7,14,17],"case":2,"class":[5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"default":[2,6,24],"do":[2,3,4,6,7,24],"final":2,"float":[9,15,17,18,19,20,24,25],"function":[5,24],"import":[2,5,6,7],"int":[9,10,12,13,15,20,22,23,24,25],"long":2,"new":[0,1,2,11,22,24],"return":[14,15,17,18,24],"static":[6,15,24],"true":[2,9,15,19,21,22,24],"try":[2,3,4,6],"var":2,"while":[3,4],A:[5,10,14,17,22],And:6,Be:6,For:2,If:[2,3,4,24],In:[2,3,4,6],It:[2,3,4,6,7,11],NOT:[3,4],OF:6,Of:2,That:[0,6],The:[2,3,4,5,6,11,14,17,18,19,20,24],Then:2,There:2,These:6,To:[3,4,6,11],Will:14,__len__:14,abc:[14,17,20],abil:2,abl:[2,6],about:[2,10,24],abov:[2,24],abrupt:18,absolut:25,accept:6,accord:[11,17],account:11,achiev:20,act:6,action:[6,11,24,25],action_dict:10,action_spac:10,activ:4,actual:[2,15],ad:[3,4],add:[0,2,6],addit:24,advanc:1,advis:6,affect:24,after:[2,3,4,6,11,24],again:2,agent:[2,5,6,7,10,11,14,15,16,17,18,24,25],agent_goal_distance_ob:9,agent_in_zon:[14,15],agent_path:22,agent_pose_ignore_theta:9,agent_pose_ob:9,agent_posit:25,agent_velocity_ignore_theta:9,agent_velocity_ob:9,agent_zone_current_ord:[14,15],agent_zone_priority_ord:[14,15],agentcolor:10,agentinzon:16,agents_current_ord:12,agents_goal_dist:[10,14],agents_heading_direct:[10,14],agents_others_dist:[10,14],agents_pos:[10,14],agents_preferred_veloc:[10,14],agents_priority_ord:12,agents_veloc:[10,14],agentsgoaldist:15,agentsheadingdirect:15,agentsothersdist:15,agentspos:15,agentspreferredveloc:15,agentsveloc:15,agentzonecurrentord:16,agentzonepriorityord:16,all:[0,2,3,4,6,7,14,17,22,24,25],all_config:[21,22],allow:[2,3,4,6,7],allow_any_ord:19,allow_human:15,allow_other_robot:15,allowed_agent_goal_posit:22,allowed_agent_start_posit:22,allowed_human_goal_posit:22,allowed_human_start_posit:22,almost:[2,10],alreadi:2,also:[0,2,5,6,7],alter:24,although:[3,4,5,24],am:2,amount:17,amrl_map:2,amrl_msg:2,an:[2,3,4,5,6,11,14,24,25],ani:[2,10,11,12,13,14,24,25],anyth:[2,24],anywher:2,ao:9,api:7,appear:[4,24],appli:2,apt:[2,3],ar:[1,2,5,24,25],arg:[10,11,12,13,14,15,17,18,19,20,23,25],argument:2,around:[2,3,4],arr_to_dict:14,arrai:[14,17,23,24],art:2,arxiv:18,assign:6,assum:[2,4],author:[2,3],auto_build:0,autom:2,avail:2,averag:24,avoid:[6,14,24],awhil:2,b:10,back:2,base:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],base_class:24,basealgorithm:24,basecallback:11,basefeaturesextractor:13,baselin:[5,7,24],baselines3:24,baseparallelwrap:25,bash:[],basic:[],becaus:[3,4,6,7],been:[11,24],befor:[2,6,17,24],being:[2,6,14,17,24],below:[2,5,6],best:11,best_model_save_path:11,better:6,between:[6,15,20],bia:24,big:2,bin:[2,4],bit:[2,6,24],blank:6,blue:[4,6],bool:[9,12,15,18,19,21,22,23,24,25],both:[3,4],bottom:2,box:[2,6],brand:6,breakpoint:2,brief:6,broken:2,buckl:1,bug:[3,4],build:[6,14],built:[2,7],button:2,c:[2,3,4,7],calcul:17,calculate_delta:25,calculate_reward:10,call:[11,17,24],callabl:24,callback:[9,10,24],callback_after_ev:11,callback_on_new_best:11,can:[2,3,4,5,6,11,14,24,25],cannot:[3,4,6],catkin_mak:2,cd:[2,4],challeng:[3,4],chang:[1,2,5,18,24],check:[0,2,4,24],chmod:4,choos:[2,6,22],classmethod:[12,14,15,16,17,18,19,20,23],classvar:10,clean:2,click:[2,6],clip:18,clipboard:2,close:[2,3,4,6,10],closed_door_1__opposing_sid:21,closed_door_1__same_go:21,closer:6,cmake:2,code:[0,2,3,4],cog:2,collect:[6,11,15],collid:[18,25],collis:[10,15,17,23],collision_end:9,collision_episode_end:[9,10],collision_ob:9,collision_observ:[10,14],collision_penalti:9,collision_penalty_scale_dur:9,collisionepisodeend:25,collisionobserv:15,color:5,com:[2,24],come:24,command:[2,3,4],comment:2,commerci:2,commit:[0,4],common:[3,4,11,13,24],common_observ:[9,10],common_reward:[9,10],common_scenario:[9,10],commun:[3,4],compil:2,complet:18,complex:[6,7],compos:[2,3],config:[1,2,17,21],config_read:2,config_run:[2,6,8],config_runn:[3,4,21,22],configur:[2,3,4],conflict:6,congratul:2,connect:[2,6],consist:6,contact:2,contain:[3,4,5,14,24],content:8,continu:19,continue_from:9,contribut:[3,4],control:[5,6],convert:24,copi:2,correct:14,correctli:[2,3,4,6],correspond:[11,13],could:2,count:[2,24],cours:2,crash:2,creat:[0,1,2,5],create_env_templ:[4,6],credenti:2,critic:[3,4],cross:18,crucial:6,cube:2,cuda:9,current:[0,2,6,14,15,16,17],custom:[2,4],cycl:[10,21],cyclescenario:[6,22],d:14,data:[14,24],data_map:17,debug:[2,3,4,6,9,22],debugg:[2,3,4],decreas:20,default_act:10,defin:[6,18],delai:2,delet:2,delta:25,denot:6,depend:[3,10],deploi:2,deploy:2,dequ:15,detail:24,determinist:[11,24],develop:[2,3,4,5,6,7],devic:9,dialogu:6,dict:[11,14,17,24,25],dictionari:17,did:[2,6],die:25,differ:[2,6,24],difficult:2,direct:15,directli:6,directori:2,discuss:24,displai:3,dist_to_other_threshold:18,distanc:[15,18],distance_delta:25,distinct:6,distinguish:6,dive:2,divid:24,divis:24,dlr:24,doc:[1,2,3,4],docker:[3,4,5],dockerfil:2,docremotetest:2,docs_src:0,document:[0,3,4,10],doe:[2,6],don:[2,6],done:[2,4,6,7,23,24],door:2,door_pos:23,door_stat:23,doubl:2,down:2,drag:6,draw:6,drop:2,dropdown:2,dsacadrl_observ:14,dsacadrl_reward:17,durat:20,dure:[2,5,11],dynam:7,e:[2,11,18,24],each:[0,2,3,4,5,6,7,11,15,17,24,25],earli:24,eas:[3,4],easi:[2,4,5,6,7,20,21],easier:[2,5],easiest:6,edg:[2,6],edit:[2,6],editor:2,effect:[6,11],either:6,element:24,elevator_load:21,els:24,empti:2,end:[2,6,25],ending_eval_tri:9,ending_eval_with_best:9,enforced_ord:[17,18],enforced_order_penalty_for_incorrect_ord:9,enforced_order_reward:9,enforced_order_track_exit:9,enforced_order_weak_signal_out_of_zon:9,enforcedord:19,enhanc:5,enough:11,ensur:[2,3,4],enter:12,entir:[2,10],entropy_constant_penalti:9,entropy_constant_penalty_only_those_that_did_not_finish:9,entropy_end:9,entropy_episode_end:[9,10],entropy_max_dist:9,entropy_max_timestep:9,entropy_multiply_negative_rewards_onli:9,entropy_reward:9,entropy_reward_multipli:9,entropyend:6,entropyepisodeend:25,env:[2,6,11,12,14,17,18,24,25],env_class:6,env_nam:[21,22],env_respons:[12,14,17,23],env_response_typ:10,environ:[1,2,3,5,7,8,9],environment_cr:10,environment_typ:[9,10],eo:9,episod:[11,15,17,22,24,25],episode_count:25,eq:18,error:[2,24],esc:4,escap:6,especi:2,etc:[2,6,7],eval:[9,11],eval_env:11,eval_freq:11,eval_frequ:9,evalcallback:11,evalu:[3,4,5,7,11,24],evaluate_polici:[9,10,11],eventcallback:11,eventu:2,everi:[2,11,15,18],everyth:[0,3,4],exactli:2,exampl:6,except:[2,6],execut:2,exist:[2,6],existence_penalti:[9,10,17],existencepenalti:18,exit:[2,12],exp1:4,exp1_train_scenario:21,exp2:[2,9],exp2_train_scenario:21,expect:[2,3,4,11,24],experi:[3,4,5,7],experiment:7,experiment_nam:9,explain:6,explor:2,extend:7,extract:[5,13],extractor:[9,10],ezpickl:10,fail:[2,3,4],failur:[3,4],fals:[9,10,12,15,18,19,21,22,24,25],faq:1,farama:10,faster:2,featur:[1,3,4,13],features_dim:13,few:2,file:[2,3,22],filenam:0,fill:[2,3,4],filter:24,filter_stdout:24,find:[0,2],fine:2,finish:2,fire:2,first:[2,3,4,6,24],fix:[3,4],flavor:4,flush:24,fn:24,focu:2,focus:5,folder:11,follow:[3,4],follow_target:23,form:2,forward:[6,13],found:[0,2,5],foundat:7,from:[1,3,4,6,7,10,14,17,24],full:[2,3,4,5],fun:2,g:[10,24],gener:14,generate_scenario:[21,22],geometri:2,get:[2,3,4,6,24],get_tboard_writ:24,get_var:2,git:[2,3,4],github:[0,2,24],give:6,given:[6,14,17,24],global:[2,24],go:[2,3,4,6],goal:[15,18],goal_dist:[10,17],goal_dist_threshold:18,goal_distance_chang:[10,17],goal_distance_reward:9,goal_distance_reward_clip:9,goal_pos:23,goaldist:18,goaldistancechang:18,goalon:2,goe:[3,4],good:[2,11],gpu:[2,3],graph:[5,22],graph_nav:[10,21],graphnav:6,graphnavscenario:[6,22],grid:[3,4],guarante:6,guid:1,gym:[10,13,24,25],gym_gen:2,ha:[2,3,4,5,11,18,24],had:[2,3],hallwai:[4,6],halt:2,handl:[2,17,25],hang:[2,3,4],hard:[2,6,7],have:[2,24],haven:2,head:15,heading_angle_threshold:18,heavili:2,help:5,helper:[5,14,17],here:[2,3,4,5,6],histori:15,history_length:15,hit:[2,4,6],home:2,host:[0,2,3,4],hour:2,how:[1,2,24],howev:[2,3,4,6,7],http:[0,2,10,18,24],human:[10,15],human_path:22,human_pos:23,human_vel:23,i:[11,18],icon:2,id:22,idea:2,ignore_theta:15,imag:[2,3,4],image_callback:25,implement:[5,7],impli:6,improv:5,in_zon:12,includ:[2,5],incom:2,incorrect:2,incorrect_penalti:19,increas:20,increment:20,indepth:[3,4],index:[0,1],indic:5,individu:17,info:2,inform:25,init:4,initi:[2,6,11],input:2,insid:4,inspir:2,instal:1,install_config_runn:3,instanti:17,instead:24,intention:2,intermediate_eval_tri:9,intern:[3,4],interpol:20,interpret:2,intro:6,invoc:2,issu:[2,3,24],item:5,job:[3,4],json:[2,3,4],just:[2,4,6,15],keep:[2,6,17,18,19,20],kei:17,kick:[3,4],kind:9,know:[2,6,7,22],knowledg:17,known:[3,4],kwarg:[10,11,12,13,14,15,17,18,19,20,23,25],label:[5,6],lack:24,last:[3,13],later:[3,4],launch_config:10,layer:13,layout:0,lead:6,least:2,led:18,left:2,length:[14,24],let:1,level:[2,21],librari:2,lidar:7,life:5,lightweight:7,like:[2,3,4,7],limit:25,line:[0,2,3,4,6],linear_weight_schedul:[10,17],linearli:20,linearweightschedul:20,link:5,linux:4,list:[2,5,6,12,14,17,22,23,24,25],liter:6,littl:2,live:[0,2],ll:[2,3,4,6],load:2,load_nav_nod:21,local:[0,2,9,11,24],local_target:23,localhost:2,locals_:11,locat:2,log:[2,17,24],log_nam:24,log_path:11,logfilt:24,logger:17,lol:2,longer:25,look:[2,3,4],lot:[5,10],low:2,lstm_agent_ob:[9,10],lstmagentob:13,lua:2,m:0,mac:4,machin:[2,3,4],made:[2,14],mai:[2,3,4,6],major:24,make:[1,2,5,7,24],make_observ:[10,14],make_scenario:21,make_tensor:13,mani:[3,4],manual:[2,6,10,21],manual_zon:[9,10,14,15,17,18],manualscenario:[6,22],manualzoneenv:[6,12],manualzoneutmrsrespons:12,map:[2,6,7],markdown:0,max:[5,11,20,25],max_step:25,max_weight:20,maximum:25,mayb:2,md:0,mean:[2,6,24],mean_reward:11,memor:2,messag:2,met:24,metadata:10,method:10,might:2,min_weight:20,mind:6,minimum:[11,24],mismatch:14,miss:2,mlppolici:9,mode:[2,10],model:[5,11,24],modifi:24,modul:[1,8],modular:5,monitor:[9,11,24],more:[2,3,4,7,24],most:[2,5,6],mostli:3,mous:6,move:[2,6,25],ms:2,msg:25,much:2,multi:[2,5,7],multi_agent_optuna:8,multiag:[5,10],multipl:[10,11],must:[6,11],my:2,n:[4,6,24],n_env:11,n_eval_episod:[11,24],name:[2,4,6,10,14,15,16,17,18,19,20],nan:2,narrow:4,nav:[2,22],nav_path:21,navig:[4,5,7,10],ndarrai:[10,25],necessari:[3,4],need:[2,3,4,5,6,7,14],negative_multiplier_onli:25,network:[3,4,14],new_scenario:10,new_scenario_episode_frequ:25,new_scenario_wrapp:[9,10],newscenariowrapp:25,next:[0,2,3,4,6],nocoinman:2,node:[2,6,22],noetic:2,none:[9,10,11,12,21,22,23,24,25],norm:[15,18],note:[2,3,4,6,7,24],now:[2,3,4],np:[14,24],npz:11,num_ag:[6,9,10,22],num_human:[6,10,22],num_oth:15,number:[5,11,13,15,24,25],number_agents_ent:12,number_agents_exit:12,numer:[2,3],numpi:[10,14,17,23,24,25],object:[6,9,10,12,14,17,21,23,24],obs_dict:13,obs_map:10,observ:[5,6,9,10,13,17],observation_map:17,observation_spac:[10,13],obstacl:7,off:[3,4],often:[2,17,18,19,20],ok:2,okai:2,on_ent:19,on_exit:19,onc:[2,6,11],one:[2,6],onli:[2,3,4,20],onto:24,ontop:7,open:[3,4,6],openai:10,oper:[3,4,7],opposit:6,opt:2,option:[2,3,4,9,10,12,19,21,22,24,25],optunacallback:11,order:[4,6,16],org:[10,18],origin:1,other:[2,3,4,6,7,12,15,17,18,19,20,24],other_agent_observ:[10,14],other_poses_actual_posit:9,other_poses_ignore_theta:9,other_poses_ob:9,other_robot_pos:23,other_robot_vel:23,other_velocities_ignore_theta:9,other_velocities_ob:9,otheragentobserv:15,others_heading_direct:[10,14],others_pos:[10,14],others_veloc:[10,14],othersheadingdirect:15,otherspos:15,othersveloc:15,otherwis:[3,4],our:[0,2,3,4,6],out:[0,2,3,4,6],output:2,over:[3,4,5,25],overal:25,overtak:18,own:[2,3,4,5],p:2,packag:[2,8],pad:14,page:[0,1,3,4,18],pair:17,panel:[2,3,4],paper:5,parallelenv:10,param:6,paramet:[2,4,11,13,14,17,24,25],partial:5,partially_observ:[9,21,22],pass:[2,6,11,14,18,24],password:2,past:2,path:[2,4,6,11],pdf:18,pedsim:2,pedsim_ro:2,penal:17,penalti:[17,18,19,20],penalty_for_multiple_agents_ent:[9,19],per:[11,18,22,24,25],perform:[11,24],perman:5,pettingzoo:[5,7,10,24,25],pick:6,pink:[4,6],pip:[2,4],pixel:6,place:[2,6,17,18,19,20],plai:2,plan:[6,22,25],plug:2,point:[0,2,6,12],polici:[5,14,24],policy_algo_kwarg:9,policy_algo_nam:9,policy_algo_sb3_contrib:9,policy_nam:9,port:2,pos_i:15,pos_theta:15,pos_x:15,pose:[3,4,15,24],poses_to_np_arrai:24,posit:[6,15],ppo:9,prefer:15,preferred_veloc:[10,15,17],preferredveloc:18,present:17,pretti:[2,6],previou:[0,2],previous_zone_st:19,print:6,probabl:20,problem:[3,4],process:[2,3,4,5,12,23],produc:2,profession:2,profil:2,program:2,progress:6,project:[3,4],project_root:[0,2,3,4],promis:2,properli:6,publish:[2,12],punish:18,purpl:6,push:0,px_threshold:18,py:[2,3,4,6],py_threshold:18,python:[3,7,24],qstandardpath:2,qualiti:5,question:24,queue:2,quit:2,r:[2,4,10],rais:24,ran:2,randomli:6,rate:2,re:[2,3,4,10],re_pattern:24,reach:[6,11],read:2,readi:2,realli:[2,15],rebuild:2,recommend:[2,3,4,6],record:[5,25],rect:12,recurs:4,reduc:6,refer:[2,6,11,24],referenc:4,refresh:2,regist:17,registered_observ:14,registered_reward:17,relat:[2,3],relative_agent_to_other_angle_threshold:18,releas:1,relev:[2,14],remain:5,rememb:2,remot:2,remotedebugg:2,remov:[2,6,24,25],renam:2,render:[10,11,24],render_mod:10,repeat:[2,3,4],repres:17,requir:[0,1,5,6,17],rerun:2,reset:[10,12,14,17,23,24,25],reset_posit:25,respons:[14,17],restart:[3,4],result:24,return_episode_reward:24,return_info:[10,12,25],reward:[5,6,9,10,11,24,25],reward_multipli:25,reward_stripp:[9,10],reward_threshold:[11,24],rewardstripp:25,right:2,rl:24,rm:[2,24],ro:[3,4,6,7,10],robot:[2,3,4,7],robot_idx:[12,23],robot_ob:23,robot_pos:23,robot_st:23,robot_vel:23,rollout:11,room:4,root_directori:4,ros_master_uri:2,ros_root:2,ros_social_env:10,ros_social_gym:[8,9,12,14,17,25],rosdep:2,rosdev:2,rosedep:2,rossocialenv:[10,12,14,17,25],rst:0,run:[9,17,24],run_config:4,run_nam:9,run_typ:9,runner:1,runtim:2,rvi:[2,3,4],rviszonevisu:12,rviz:10,s:[2,6],sacadrl:[3,4,9,14],sai:2,same:[2,4,6],satisfi:6,save:[0,2,4,11],sb3_contrib:2,scalar:17,scale:24,scenario:[6,7,9,10],scene:[1,2,5],scene_config:2,score:17,screen:6,script:[4,6],search:1,second:[2,3,4,24],see:[0,2,3,4,24],seed:[10,12,25],select:2,separ:[3,4],server:2,servic:[0,2,9,10,12,14],service_mod:2,set:[3,4,5,6,25],set_path:2,set_var:23,set_zone_var:12,setup:[1,3,4,14,17],sh:[2,3,4],shape:14,share:2,shell:2,shift:6,should:[0,2,3,4,11],shoutout:2,show:[3,4,6],shown:2,side:[3,4,6],sim:[14,17],sim_config:2,sim_step:[10,12],similar:[0,2,7,24],simpl:[18,22],simpli:6,simul:[2,5,6,7,17],sinc:2,singl:[5,7],site:0,size:[2,6],slightli:24,small:[2,5],snap:[2,3],so:[0,2,3,4,6],sobumodul:2,social:[10,18],social_gym:2,social_nav:2,social_norm_cross:[10,17],social_norm_overtak:[10,17],social_norm_pass:[10,17],socialgym:24,socialnormcross:18,socialnormovertak:18,socialnormpass:18,some:[2,3,4,25],someth:[2,18],somewhat:2,sourc:[0,2,4],space:[13,14],special:4,specifi:[3,4,6,14],speedup_factor:2,sphinx:0,stabl:[5,7,24],stable_baselines3:[11,13,24],stablebaselin:24,stack:1,stackoverflow:24,start:[0,2,3,4,6,20],starting_collision_penalti:9,stash:2,stat:2,state:[2,10],std:24,stdout:24,step:[3,4,10,11,23,24,25],steppedsim:2,steputmr:2,still:[2,3,4],stochast:[11,24],stop:[6,11,25],store:17,str:[9,10,11,14,17,21,22,24,25],straight:6,stream:24,stuff:[2,3,4],style:4,sub:2,submodul:[3,4,6,7,8],subpackag:8,subsequ:[2,14],succe:[2,25],success:[6,10,15,17,23],success_observ:[10,14],success_reward:9,successfulli:18,successobserv:15,sudo:[2,3,4],suer:2,suffici:[4,6],suggest:2,sum:17,summari:17,supersuit:2,support:10,sure:[2,24],surfac:7,symbol:2,system:[3,4,7],t1:[2,21],t:[2,6],tab:2,take:[2,3,4],taken:[10,24],tan:15,task_id:21,tell:[0,6],templat:6,tensor:13,tensorboard:[5,25],tensorboard_writ:[9,10],tensorboardwrit:25,tensorboardx:17,termin:2,test:[2,3,4,7,11],text:2,textbox:2,than:2,thei:[2,3,4,6,24],them:[2,3,4,6,17,24],theta:[15,24],thi:[2,6,7,13,20,24],think:24,thirdparti:2,those:2,though:6,threshold:11,through:[2,6,22],throughout:5,time:[2,3,4],time_limit:[9,10],timelimit:9,timelimit_threshold:9,timelimitwrapp:25,timeout:6,timestep:[14,15,17,18,25],timestep_threshold:25,tip:[3,4],tmp:2,tmp_config:2,todo:20,toggl:5,ton:2,tool:2,toolchain:2,top:2,torch:13,torch_lay:13,total:17,touch:2,toward:2,track:[5,14,16,17,18,19,20],train:[2,3,4,5,6,7,9,10,11],train_length:9,trajectori:6,translat:2,travers:6,trial:9,trick:[3,4],trigger:[6,11],trivial:2,tupl:[10,14,17,18,22,24,25],tutori:2,tweak:5,two:[1,2,6],txt:[2,4],type:[2,10,14,17,20,21],typo:2,udpat:2,unabl:2,uncom:2,undefin:2,uninstal:[2,3],union:[22,24,25],uniqu:2,unit:[13,18],unless:2,unnecessarili:[3,4],until:[20,22],up:[1,3,4],updat:[0,2,4,11],update_child_loc:11,upload:1,us:[0,3,4,5,11,14,17,18,19,20,22,24],usag:1,use_pedsim:2,user:24,usernam:2,usual:[0,2],util:[9,10,25],utmr:[2,9,10,12,14],utmrsrespons:[10,12,14,23],utmrsstepp:2,v3:24,valid:[2,6],valu:[2,5,6,20,24],varaibl:2,vari:5,variabl:[2,3,4,11],variat:24,variou:5,vd:4,ve:2,vec_env:24,vecenv:24,vector:24,vector_displai:4,vectordisplai:4,vectormap:2,vel_i:15,vel_theta:15,vel_x:15,veloc:[15,18],velocity_control:[10,17],velocitycontrol:18,venv:4,verbos:11,veri:2,version:[0,3,4],vertic:2,via:[3,4,6,7,15],video:[2,25],vim:2,visual:[5,10],vtheta:15,vx:15,vy:15,wa:[2,15],wai:[2,3,4,5,6],wait:2,wait_for_servic:2,wall:6,want:[2,6,24],warn:[2,3,11,24],wasn:2,we:[0,2,3,4,7,24],weak_out_of_zon:19,websit:0,weight:[17,18,19,20],weird:2,welcom:2,well:[2,3,4,5,7,17,24],what:[1,2,3,4,6,22],when:[0,2,3,4,6,11,18,24,25],where:[0,2,3,4,6,11,24],whether:[11,24],which:[2,3,4,6,7,10,22],why:[1,2,6],window:[3,4],wish:[3,4],within:[0,25],won:2,work:[2,3,4,6,7,20,24],worth:2,would:[2,6],wrap:[11,24,25],wrapper:[5,6,9,10,11,17,24],write:[2,24],writer:17,written:[0,3,4],x:[4,15,24],xdg_runtime_dir:2,xhost:[3,4],xml:2,y:[15,24],ye:2,yep:2,yet:2,you:[2,3,4,5,7,11,24,25],your:[0,3,4,5],zone:[6,12,16]},titles:["Making docs","Welcome to Social Gym\u2019s documentation!","Advanced Usage","Installation","Installation","What\u2019s new in Social Gym 2.0 from the original release?","How to make a new Scene","What is Social Gym","src","src package","src.environment package","src.environment.callbacks package","src.environment.environment_types package","src.environment.extractors package","src.environment.observations package","src.environment.observations.types package","src.environment.observations.types.manual_zone package","src.environment.rewards package","src.environment.rewards.types package","src.environment.rewards.types.manual_zone package","src.environment.rewards.wrappers package","src.environment.scenarios package","src.environment.scenarios.types package","src.environment.services package","src.environment.utils package","src.environment.wrappers package"],titleterms:{"0":5,"1":[0,2,3,4,6],"2":[0,2,3,4,5,6],"3":[0,2,3,4,6],"4":[2,3,4,6],"5":[2,4],"6":4,"7":4,"do":0,"new":[5,6],"static":2,A:6,If:6,The:0,advanc:2,agent_in_zon:16,agent_zone_current_ord:16,agent_zone_priority_ord:16,agents_goal_dist:15,agents_heading_direct:15,agents_others_dist:15,agents_pos:15,agents_preferred_veloc:15,agents_veloc:15,apt:[],ar:[0,3,4,6],author:[],basic:2,been:6,branch:[3,4],buckl:2,build:[0,2,4],callback:11,can:0,chang:0,check:6,checkout:[3,4],choic:6,clion:2,code:6,collis:18,collision_episode_end:25,collision_observ:15,common_observ:14,common_reward:17,common_scenario:21,compos:[],config:[3,4],config_run:9,contain:2,content:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],copi:4,creat:[4,6],cycl:22,depend:[2,4],displai:4,doc:0,docker:2,document:1,don:4,doubl:6,editor:6,enforced_ord:19,entropy_episode_end:25,environ:[4,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],environment_typ:12,evaluate_polici:24,eventu:[3,4],everyth:2,exactli:6,existence_penalti:18,extractor:13,faq:2,featur:5,file:[0,4,6],folder:2,follow:[2,6],from:[2,5],full:[],fun:[3,4],git:0,git_add:0,goal_dist:18,goal_distance_chang:18,gpu:[],graph:[2,6],graph_nav:22,graph_navig:2,guid:[2,3,4,6],gym:[1,2,3,4,5,6,7],ha:6,had:[],have:[3,4,6],how:6,i:2,id:2,imag:[],indic:1,instal:[2,3,4,6],interpret:6,issu:[],last:6,let:[3,4],like:6,linear_weight_schedul:20,local:6,look:6,lstm_agent_ob:13,main:[3,4],make:[0,6],manual:22,manual_zon:[12,16,19],modul:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],multi_agent_optuna:9,multirobot:2,navig:[2,6],new_scenario_wrapp:25,now:[0,6],numer:[],observ:[14,15,16],open:2,origin:5,other_agent_observ:15,others_heading_direct:15,others_pos:15,others_veloc:15,packag:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],part:2,pop:6,preferred_veloc:18,project:2,pycharm:2,python:[2,4,6],realli:4,recommend:[],relat:[],releas:5,requir:[2,3,4],reward:[17,18,19,20],reward_stripp:25,right:[3,4,6],ro:2,root:2,ros_social_gym:10,run:[0,2,3,4,6],runner:[3,4],s:[1,3,4,5,7],scenario:[21,22],scene:6,script:3,see:6,separ:2,servic:23,set:2,setup:2,sh:0,should:6,sim:2,snap:[],social:[1,2,3,4,5,6,7],social_norm_cross:18,social_norm_overtak:18,social_norm_pass:18,specif:2,spot:6,src:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],ssh:2,stack:7,stage:0,step:2,submodul:[2,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],subpackag:[9,10,14,15,17,18,21],success:18,success_observ:15,t:4,tabl:1,tensorboard_writ:25,them:[],thi:[3,4],time_limit:25,two:[3,4],type:[15,16,18,19,22],uninstal:[],up:[2,6],updat:6,upload:0,us:[2,6],usag:2,ut:2,ut_multirobot_sim:2,util:24,utmr:23,vector:4,velocity_control:18,via:2,virtualenv:4,wa:6,warn:[],we:6,welcom:1,what:[5,7],when:[],why:[3,4],window:[2,6],worri:4,wrapper:[20,25],you:[0,6],your:[2,6]}})