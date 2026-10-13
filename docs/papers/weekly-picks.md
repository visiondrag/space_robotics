# Weekly picks: AI for space

Papers highlighted in Victor Rodriguez-Fernandez's weekly series "My weekly arXiv picks on AI for space", posted on [LinkedIn](https://www.linkedin.com/in/vrodriguezf90/) and [X](https://twitter.com/vrodriguezf90). He is an associate professor of Computer Science at Universidad Politécnica de Madrid ([AIDA group](https://aida.etsisi.upm.es/member/victor-rodriguez-fernandez/)) and works on AI for space operations and time series.

Across the editions found so far the picks cluster around six topics: spacecraft pose estimation and rendezvous benchmarks, telemetry anomaly detection, autonomous in-orbit inspection, world models and autonomy for satellite agents, sensor tasking for space situational awareness, and LLM/VLM agents for spacecraft operations. Each pick is also filed under its topic on the [satellites page](satellites.md) or the [AI page](ai-vlm.md).

Only four editions were reachable through public search, because LinkedIn hides posts from logged-out readers, so this list is not complete and dates are approximate. Follow the profile for new picks.

## Sep 19–26, 2026
- Markerless Multi-Modal Autonomous Robotic Inspection of Large Space Structures (Universidad de Málaga; manipulator with RGB-D, thermal camera and LiDAR, NeRF reconstruction, tested in Gazebo and the lab): [Link](https://arxiv.org/abs/2609.29644)

## Sep 12–19, 2026
- DreamSat-Bench: Development and Initial Testing of a Testbed for AI-Based Pose Estimation from 3D Reconstruction (rendezvous testbed with software and hardware in the loop; Rodriguez-Fernandez is a co-author): [Link](https://arxiv.org/abs/2609.14183)

## Sep 5–12, 2026
- Structure-Aware Unsupervised Anomaly Detection for Spacecraft Telemetry with Adaptive EVT Thresholding (tested on the ESA anomalies dataset, SPAICE 2026 poster): [Link](https://arxiv.org/abs/2609.10017)

## Aug 15–22, 2026
- Orbit-Planner: Towards Latent World Models for On-Orbit Obstacle Avoidance of Satellite Agents (Isaac Sim, 91.7% reported success, AP-GARSS 2026): [Link](https://arxiv.org/abs/2608.16651) - [Code](https://github.com/ZhijianLi2003/Orbit_Planner)

## From his group
- VISTA: An Attention-Based Multi-Agent Reinforcement Learning Architecture for Space Situational Awareness Sensor Tasking (Miguel Leiva-Vélez et al., UPM; pointer-based action decoding, tested up to 20,000 objects): [Link](https://arxiv.org/abs/2609.23875) - [Code](https://github.com/RocketNeurons/VISTA-SSA)
- DreamSat-Pose: Spacecraft Pose Estimation from Single-View 3D Reconstructions and Learned 2D-3D Feature Matching (same DreamSat family as DreamSat-Bench): [Link](https://arxiv.org/abs/2607.13449)

## His earlier work on LLM agents in space
- Language Models are Spacecraft Operators (LLM agent that placed second in the Kerbal Space Program Differential Games challenge): [Link](https://arxiv.org/abs/2404.00413)
- Fine-tuning LLMs for Autonomous Spacecraft Control: A Case Study Using Kerbal Space Program: [Link](https://arxiv.org/abs/2408.08676)
- Visual Language Models as Operator Agents in the Space Domain (AIAA SciTech 2025): [Link](https://arxiv.org/abs/2501.07802)
- Large Language Models as Autonomous Spacecraft Operators in Kerbal Space Program (Advances in Space Research): [Link](https://www.sciencedirect.com/science/article/abs/pii/S0273117725006465)
- SpaceGym: Discrete and Differential Games in Non-Cooperative Space Operations (the KSPDG environment): [Link](https://ieeexplore.ieee.org/document/10115968/)
- KSPDG challenge code (ARCLab-MIT): [Link](https://github.com/ARCLab-MIT/kspdg)

## His time-series tools
- DeepVATS: Deep Visual Analytics for Time Series (Knowledge-Based Systems): [Link](https://www.sciencedirect.com/science/article/pii/S0950705123005439) - [Code](https://github.com/vrodriguezf/deepvats)
- Exploring Scalability in Large-Scale Time Series in DeepVATS framework: [Link](https://arxiv.org/html/2408.04692v1)
- tsai: time series deep learning library for PyTorch and fastai: [Link](https://github.com/timeseriesAI/tsai)
