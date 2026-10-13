# Papers: planetary and surface robotics

Curated literature on rovers, lunar and Mars perception, legged and cave robots, asteroids, ISRU, teleoperation and flight software. Looking for something else? See [spacecraft guidance and control](spacecraft-gnc.md), [spacecraft vision and onboard AI](satellites.md), [space weather](space-weather.md), or [AI, foundation models, VLMs and LLM agents](ai-vlm.md).

Thanks to [Victor Rodriguez-Fernandez](https://www.linkedin.com/in/vrodriguezf90/) for his weekly arXiv picks on AI for space, which are a great source of papers for this list.

**New to the field?** Start with the Space ROS flight software paper and the Perseverance autonomy article for the big picture, then terrain traversability, then the survey of on-orbit servicing manipulators.

Entries with a **PDF in repo** badge have a local copy in the [library](../../library/). IEEE papers are link-only. Many recent entries are preprints and have not been peer reviewed. To add an entry, see [CONTRIBUTING](../../CONTRIBUTING.md).

## Terrain traversability
- On terrain traversability analysis in unstructured environments: recent advances in forest applications (CC BY 4.0 open access; forest-focused, methods transfer to planetary terrain): [File](../../library/papers/Terrain_Traversability_Forest_Review_2025.pdf) - [Link](https://link.springer.com/article/10.1007/s11370-025-00591-4) · *Intelligent Service Robotics 2025*
- TACS-Graphs: Traversability-Aware Consistent Scene Graphs for Ground Robot Indoor Localization and Mapping: [File](../../library/papers/TACS-Graphs_2025.pdf) - [Link](https://arxiv.org/abs/2506.14178) · *IROS 2025*
- Stereo Vision and Rover Navigation Software for Planetary Exploration: [Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1035370)
- Visual Traversability Analysis for Micro Planetary Rover: [Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5420494)
- Soft Computing for Visual Terrain Perception and Traversability Assessment by Planetary Robotic Systems: [Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1571416)
- Fleet-To-Lab: A Transfer Learning Framework For Lunar Rover Slippage Estimation Via Model Fusion: [Link](https://arxiv.org/abs/2609.17187) · *i-SAIRAS & iSpaRo 2026*

## Lunar exploration
- Lunar Twins: We Choose to Go to the Moon with Large Language Models: [File](../../library/papers/Lunar_Twins_LLMs_2025.pdf) - [Link](https://aclanthology.org/2025.findings-acl.69.pdf) · *ACL Findings 2025*
- LuSNAR: A Lunar Segmentation, Navigation and Reconstruction Dataset based on Multi-sensor for Autonomous Exploration: [File](../../library/papers/LuSNAR_2024.pdf) - [Link](https://arxiv.org/pdf/2407.06512v2) - [Code](https://github.com/zqyu9/LuSNAR-dataset) · *IEEE TGRS*

## Terrain segmentation and perception (Mars)
- Mars Terrain Segmentation with Less Labels (semi-supervised, few labels): [Link](https://arxiv.org/abs/2202.00791) · *IEEE Aerospace Conference 2022*
- Mixed-domain Training Improves Multi-Mission Terrain Segmentation: [Link](https://arxiv.org/pdf/2209.13674) · *ECCV 2022 Workshops (AI4Space)*
- Evaluation of 3D CNN Semantic Mapping for Rover Navigation: [Link](https://arxiv.org/pdf/2006.09761) · *IEEE MetroAeroSpace 2020*
- Towards Safer Planetary Exploration: A Hybrid Architecture for Terrain Traversability Analysis in Mars Rovers: [Link](https://arxiv.org/pdf/2410.17738) · *IAC 2024*
- Enhancing Martian Terrain Recognition with Deep Constrained Clustering: [Link](https://arxiv.org/html/2503.17633) · *IEEE TGRS 2025*
- Efficient Adaptation of Deep Neural Networks for Semantic Segmentation in Space Applications: [Link](https://arxiv.org/pdf/2504.15991)
- nnMNet: Baseline for Martian Terrain Semantic Segmentation: [Link](https://arxiv.org/pdf/2608.29609) - [Code](https://github.com/dereklee0310/nnMNet)
- GMSRI: A Texture-Based Martian Surface Rock Image Dataset: [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC8399451/)
- MOMO: Mars Orbital Model Foundation Model for Mars Orbital Applications: [Link](https://arxiv.org/pdf/2604.02719) - [Code](https://github.com/kerner-lab/MOMO) · *CVPR 2026*

## Rover autonomy and navigation
- Autonomous robotics is driving Perseverance rover's progress on Mars (Science Robotics; AutoNav, AEGIS, OBP): [Link](https://www.science.org/doi/10.1126/scirobotics.adi3099) · *Science Robotics 2023*
- Enhanced Autonomous Navigation on the Perseverance Mars Rover (ENav): [Link](https://www.researchgate.net/publication/397929378_Enhanced_Autonomous_Navigation_on_the_Perseverance_Mars_Rover)
- Mars 2020 Autonomous Rover Navigation: [Link](https://www.semanticscholar.org/paper/MARS-2020-AUTONOMOUS-ROVER-NAVIGATION-McHenry-Abcouwer/c20138d836a7359ca83b8a35aafed060abe46b53)
- MLNav: Learning to Safely Navigate on Martian Terrains: [Link](https://arxiv.org/pdf/2203.04563) · *IEEE RA-L 2022*
- Adaptive sampling with PIXL on the Mars Perseverance rover: [Link](https://arxiv.org/pdf/2405.14471) · *Icarus*
- AI-Enabled Capabilities to Facilitate Next-Generation Rover Surface Operations: [Link](https://arxiv.org/html/2510.05985v1) · *ASTRA 2025*

## Lunar navigation, SLAM and perception
- Visual SLAM with DEM Anchoring for Lunar Surface Navigation: [Link](https://arxiv.org/html/2603.17229)
- BEVIO: Bird's-Eye-View based Sparse-Update Visual-Inertial Odometry for Lunar Day-Night Navigation: [Link](https://arxiv.org/abs/2606.00709)
- Full Stack Navigation, Mapping, and Planning for the Lunar Autonomy Challenge: [Link](https://arxiv.org/pdf/2603.17232) · *ION GNSS+ 2025*
- Vulcan Centaur: towards end-to-end real-time perception in lunar rovers: [Link](https://arxiv.org/abs/2011.15104)
- Lunar Rover Localization Using Craters as Landmarks: [Link](https://arxiv.org/pdf/2203.10073) · *IEEE Aerospace Conference 2022*
- Semantic Segmentation and Depth Estimation for Real-Time Lunar Surface Mapping Using 3D Gaussian Splatting: [Link](https://arxiv.org/pdf/2603.18218)
- POLAR-Sim: Augmenting NASA's POLAR Dataset for Data-Driven Lunar Perception and Rover Simulation: [Link](https://arxiv.org/pdf/2309.12397) - [Code](https://github.com/uwsbel/POLAR-Sim)
- LuMon: A Comprehensive Benchmark and Development Suite with Novel Datasets for Lunar Monocular Depth Estimation: [Link](https://arxiv.org/html/2604.09352) · *CVPR 2026 Workshops (AI4Space)*
- MoonAnything: A Vision Benchmark with Large-Scale Lunar Supervised Data: [Link](https://arxiv.org/pdf/2604.00682) - [Code](https://github.com/clementinegrethen/MoonAnything)
- OmniLRS: A Photorealistic Simulator for Lunar Robotics: [Link](https://arxiv.org/abs/2309.08997) - [Code](https://github.com/OmniLRS/OmniLRS) · *ICRA 2024*

## Foundation models and VLMs for planetary science
- Space-LLaVA: a Vision-Language Model Adapted to Extraterrestrial Applications: [Link](https://arxiv.org/abs/2408.05924) · *IEEE Aerospace Conference 2025*
- Mars-Bench: A Benchmark for Evaluating Foundation Models for Mars Science Tasks: [Link](https://arxiv.org/abs/2510.24010) - [Code](https://github.com/kerner-lab/Mars-Bench) · *NeurIPS 2025 (Datasets and Benchmarks)*
- MarsRetrieval: Benchmarking Vision-Language Models for Planetary-Scale Geospatial Retrieval on Mars: [Link](https://arxiv.org/html/2602.13961v1) - [Code](https://github.com/ml-stat-Sustech/MarsRetrieval)
- A Domain-Specific Vision Foundation Model for Mars: [Link](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2025JH000827) · *JGR: Machine Learning and Computation 2026*
- Vision Foundation Models for Domain Generalisable Cross-View Localisation in Planetary Ground-Aerial Robotic Teams: [Link](https://arxiv.org/pdf/2601.09107)
- Martian World Models: Controllable Video Synthesis with Physically Accurate 3D Reconstructions: [Link](https://arxiv.org/html/2507.07978v1) - [Code](https://github.com/loongfeili/Martian-World-Model) · *NeurIPS 2025*
- Adapting a Foundation Model for Lunar Surface Height Estimation: [Link](https://arxiv.org/abs/2609.02448)

## Space manipulation and in-orbit servicing
- A comprehensive survey of space robotic manipulators for on-orbit servicing: [Link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11496037/) · *Frontiers in Robotics and AI 2024*
- Artificial Intelligence-Enabled Space Robot Operations: Technologies, Challenges and Prospects (survey): [Link](https://arxiv.org/pdf/2609.16880)
- Redundant Space Manipulator Autonomous Guidance for In-Orbit Servicing via Deep Reinforcement Learning: [Link](https://doi.org/10.3390/aerospace11050341) · *Aerospace 2024*
- Reinforcement Learning with Prior Policy Guidance for Motion Planning of Dual-Arm Free-Floating Space Robot: [Link](https://arxiv.org/pdf/2209.01434) · *Aerospace Science and Technology 2023*
- Path Planning and Reinforcement Learning-Driven Control of On-Orbit Free-Flying Multi-Arm Robots: [Link](https://arxiv.org/pdf/2603.23182) · *IJRR 2026*
- Leveraging Procedural Generation for Learning Autonomous Peg-in-Hole Assembly in Space: [Link](https://arxiv.org/pdf/2405.01134) - [Code](https://github.com/AndrejOrsula/drl_omni_peg) · *iSpaRo 2024*
- APIARY: Autonomous Planning In-space Assembly Reinforcement-learning free-flYer, ISS Astrobee testing: [Link](https://arxiv.org/pdf/2512.03729) · *iSpaRo 2025*
- SmallSatSim: A GPU-Accelerated Microgravity Robotics Toolkit for Planning, Control, and Policy Learning: [Link](https://arxiv.org/pdf/2603.14598) - [Code](https://github.com/davidbschwartz/smallsat-sim)
- Markerless Multi-Modal Autonomous Robotic Inspection of Large Space Structures: [Link](https://arxiv.org/abs/2609.29644)
- Transformer-Based Warm-Starting for Feasible and Optimal Terminal Approach to Tumbling Objects with Space Manipulators: [Link](https://arxiv.org/abs/2606.17317)
- Learning Smooth and Robust Space Robotic Manipulation of Dynamic Target via Inter-frame Correlation: [Link](https://arxiv.org/abs/2603.27537)

## Legged, jumping and cave robots
- Martian Lava Tube Exploration Using Jumping Legged Robots: A Concept Study: [Link](https://arxiv.org/abs/2310.14876) · *IAC 2023*
- Design and Experimental Verification of a Jumping Legged Robot for Martian Lava Tube Exploration: [Link](https://arxiv.org/abs/2311.03854) · *ICAR 2023*
- Olympus: A Jumping Quadruped for Planetary Exploration Utilizing Reinforcement Learning for In-Flight Attitude Control: [Link](https://arxiv.org/pdf/2503.03574) · *ICRA 2025*
- Efficient Learning-Based Control of a Legged Robot in Lunar Gravity: [Link](https://arxiv.org/pdf/2509.10128)
- Locomotion as Manipulation with ReachBot (extendable booms for caves and lava tubes): [Link](https://arxiv.org/html/2407.00973) · *Science Robotics 2024*
- Cooperative robotic exploration of a planetary skylight surface and lava cave: [Link](https://www.science.org/doi/10.1126/scirobotics.adj9699) · *Science Robotics*
- Terrain-Aware Autonomous Planetary Exploration for Exteroceptive-Proprioceptive Mapping with Quadruped Scouts: [Link](https://arxiv.org/abs/2609.35493) · *iSpaRo 2026*

## Asteroids and small bodies
- Mobility and Science operations On An Asteroid Using a Hopping Small Spacecraft on Stilts: [Link](https://arxiv.org/pdf/1801.09482) · *AAS GNC 2018*
- Planning and Navigation of Climbing Robots in Low-Gravity Environments: [Link](https://arxiv.org/pdf/1803.05601) · *IEEE/ION PLANS 2018*
- Path planning for asteroid hopping rovers with pre-trained deep reinforcement learning architectures: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0094576520301351) · *Acta Astronautica 2020*
- Micro-hopping robot for asteroid exploration (Acta Astronautica, classic): [Link](https://www.sciencedirect.com/science/article/abs/pii/S0094576502001868) · *Acta Astronautica 2002*

## Sampling, drilling and excavation (ISRU)
- Learning Tool-Aware Adaptive Compliant Control for Autonomous Regolith Excavation: [Link](https://arxiv.org/abs/2509.05475) - [Code](https://github.com/AndrejOrsula/space_robotics_bench)
- Autonomous Multirobot Excavation for Lunar Applications: [Link](https://arxiv.org/pdf/1701.01657) · *Robotica 2017*
- An Information Theoretic Approach to Sample Acquisition and Perception in Planetary Robotics: [Link](https://arxiv.org/pdf/1709.04617) · *AHS 2017*
- Learning and Autonomy for Extraterrestrial Terrain Sampling: An Experience Report from OWLAT Deployment: [Link](https://arxiv.org/pdf/2311.17405) · *AIAA SciTech 2024*
- A multi-string and wireline-coring drilling robot for planetary regolith sampling: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0273117725000870) · *Advances in Space Research 2025*

## Teleoperation, shared autonomy and human-robot teaming
- Human-Robot Teaming Strategy for Fast Teleoperation of a Lunar Resource Exploration Rover: [Link](https://www.hou.usra.edu/meetings/isairas2020fullpapers/pdf/5092.pdf) · *ISAIRAS 2020*
- Supervising Remote Humanoids Across Intermediate Time Delay (NASA): [Link](https://ntrs.nasa.gov/api/citations/20060051886/downloads/20060051886.pdf)
- Shared control on lunar spacecraft teleoperation rendezvous operations with large time delay: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0094576516304751) · *Acta Astronautica 2016*
- Effect of time-delay on lunar sampling tele-operations: cardiac, ocular and behavioral measures: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0003687022002332) · *Applied Ergonomics 2022*
- Long range teleoperation for fine manipulation tasks under time-delay network conditions: [Link](https://arxiv.org/pdf/1903.09189)
- Advancing the Scientific Frontier with Increasingly Autonomous Systems: [Link](https://arxiv.org/pdf/2009.07363) · *Planetary Science Decadal Survey white paper*

## Space debris and active debris removal
- Review of Autonomous Space Robotic Manipulators for On-Orbit Servicing and Active Debris Removal: [Link](https://spj.science.org/doi/10.34133/space.0291) · *Space: Science & Technology*
- Capture and detumbling control for active debris removal by a dual-arm space robot: [Link](https://www.sciencedirect.com/science/article/pii/S1000936121003708) · *Chinese Journal of Aeronautics 2021*
- Repeated Impact-Based Capture of a Spinning Object by a Dual-Arm Space Robot: [Link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7805643/)
- Design and Operational Elements of the Robotic Subsystem for the e.deorbit Debris Removal Mission: [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC7805711/)
- Formal Modelling and Runtime Verification of Autonomous Grasping for Active Debris Removal: [Link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8829115/)
- Active debris removal: A review and case study on LEOPARD Phase 0-A mission: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0273117723004453) · *Advances in Space Research 2023*

## Simulation
- Simulation for Planetary Robotic Perception and Autonomy: A Concise Survey of Recent Capabilities and Gaps: [Link](https://arxiv.org/html/2609.34743) - [Code](https://github.com/kimhoyun-robotair/Survey-For-Planetary-Robotic-Simulation) · *iSpaRo 2026*
- MarsLab: A Martian Rover Simulator for Planetary Rover Autonomous Navigation: [Link](https://arxiv.org/abs/2609.34702) - [Code](https://github.com/kimhoyun-robotair/MarsLab) · *iSpaRo 2026*
- mjorbit: A Simulation Framework for Space Robotics: [Link](https://arxiv.org/abs/2609.08010) · *iSpaRo 2026*

## Flight software and frameworks
- Space ROS: An Open-Source Framework for Space Robotics and Flight Software: [Link](https://ntrs.nasa.gov/citations/20220017761) · *AIAA SciTech 2023*
- SRFS: Parallel Processing Fault-tolerant ROS2-based Flight Software for the Space Ranger CubeSat: [Link](https://arxiv.org/pdf/2412.08164) · *IEEE AESM 2026*
- Bridging the Basilisk Astrodynamics Framework with ROS 2 for Modular Spacecraft Simulation and Hardware Integration: [Link](https://arxiv.org/pdf/2512.09833) - [Code](https://github.com/DISCOWER/bsk-ros2-bridge) · *iSpaRo 2025*

## Space resources and mining
- Mining beyond Earth with Space Robots: Exploration, Sampling, and Extraction: [Link](https://arxiv.org/pdf/2608.21358) - [Code](https://github.com/visiondrag/Space-Mining-and-Robotics-Survey)

## Dataset papers
- The Katwijk beach planetary rover dataset: [Link](https://dl.acm.org/doi/abs/10.1177/0278364917737153) · *IJRR*

## Research directions (VLMs / VLAs / efficient inference)
- More on foundation models, remote-sensing VLMs, LLM agents for spacecraft and VLAs: [AI, VLMs and agents page](ai-vlm.md)
- [VLAs for driving](vlas-for-driving.md)
- [Efficient inference](efficient-inference.md)
