 <!-- <h1 style="text-align: center;"> SocialGym 2 </h1> -->

<p align="center">
  <img src="https://drive.google.com/uc?id=1F1hEwQiFuwT7OGwYrJ6t8O9NqrlNk4RH" width="400" />
</p>

This is the codebase for our multi-agent simulator for real world social navigation. Installation instructions ca be found below. Tutorials are provided at https://amrl.cs.utexas.edu/social_gym/index.html (currently under active development).

<!-- 
<p align="center">
  <img src="https://obj.umiacs.umd.edu/badue-accepted/sim_demo.gif" width="400" />
</p> -->



# Installation

**Note**: We require you have installed Docker and Python 3.8 (version 3.8 may not be necessary but it's what we use)

**WARNING**: The authors of this project have had numerous issues with Docker and Docker-Compose when installed via snap.  We recommend uninstalling docker and docker-compose if you have GPU-related issues with the docker images and installing them via `apt`.

---

### 1.) Clone the repo and checkout main

```shell
git clone git@github.com:ut-amrl/social_gym.git
git checkout main
```

### 2.) Install requirements and run the install script!

```shell
python3 ./scripts/install_config_runner.py
```

### 3.) Run the Config Runner!

```shell
python3 config_runner/run.py -c 1_31_23/door/sacadrl.json
```

This should open an RVIS window (looks like a 2D grid with options on the side-panels). If you do NOT see this window, there's a problem with the docker file. First try running
```shell
sudo xhost +
```
and repeat the command.  If it still fails to show windows then try adding `--network host`
to the file `{PROJECT_ROOT}/config_runner/run.sh` on lines where we are setting docker environment variables. Otherwise, look up stuff like "cannot display window from docker container" -- this is critical for Social Gym to work.

## If you use this code, please cite the following
---

```
@software{SocialGym2,
author = {Sprague, Zayne and Chandra, Rohan and Holtz, Jarrett and Biswas, Joydeep},
title = {{SocialGym2.0: Simulator for Multi-Agent Social Robot Navigation in Shared Human Spaces}},
url = {https://github.com/ut-amrl/social_gym},
version = {2.0},
doi = {10.1109/IROS47612.2022.9982021}
}
```

## License
---
This project is released under the MIT License. Please review the [License file](LICENSE) for more details.
