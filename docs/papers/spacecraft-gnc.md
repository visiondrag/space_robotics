# Papers: spacecraft guidance, navigation and control

Guidance, navigation and control (GNC) for satellites and spacecraft: rendezvous and proximity operations, adaptive and learned control, world models, attitude control, formation flying, orbit determination and deep-space navigation.

Thanks to [Victor Rodriguez-Fernandez](https://www.linkedin.com/in/vrodriguezf90/) for his weekly arXiv picks on AI for space, which are a great source of papers for this list.

LLM-driven trajectory and planning agents are on the [AI, VLMs and agents](ai-vlm.md) page. Spacecraft vision is on the [vision and onboard AI](satellites.md) page. Many recent entries are preprints.

## Rendezvous and proximity operations
- Trajectory Design and Guidance for Far-range Proximity Operations of Active Debris Removal Missions with Angles-only Navigation: [Link](https://arxiv.org/html/2411.01021v1)
- Current state of the multi-agent multi-view experimental and digital twin rendezvous (MMEDR-Autonomous) framework: [Link](https://arxiv.org/pdf/2603.20575)
- Transformers for Trajectory Optimization with Application to Spacecraft Rendezvous: [Link](https://arxiv.org/pdf/2310.13831) · *IEEE Aerospace Conference 2024*
- Spacecraft Rendezvous Trajectory Generation with Modular Constraints via Diffusion Model Composition: [Link](https://arxiv.org/abs/2610.05642)
- Rapid Sequence Cost Evaluation for Multi-Spacecraft Rendezvous: A Permutation-Invariant Set Transformer: [Link](https://arxiv.org/abs/2610.08439)

## Adaptive, meta and continual learning for control
- Reward-Free Continual Adaptation for Resilient Space Robots: [Link](https://arxiv.org/abs/2608.23452) - [Code](https://github.com/AndrejOrsula/space_robotics_bench) · *SPAICE 2026*
- Learning Adaptive Multi-Task Guidance, Navigation, and Control via Hypernetworks: [Link](https://arxiv.org/abs/2607.24292) - [Code](https://github.com/snt-spacer/Hyper-GNC)
- Memory-Efficient Meta-Reinforcement Learning for Adaptive Safety-Critical Control in Adversarial Spacecraft Proximity Operations: [Link](https://arxiv.org/abs/2606.17414)

## World models and learned dynamics for satellite agents
- GPU-Accelerated Astrodynamics World Models for Spacecraft Rendezvous and Proximity Operations: [Link](https://arxiv.org/abs/2609.03067) · *AMOS 2026*
- Orbit-Planner: Towards Latent World Models for On-Orbit Obstacle Avoidance of Satellite Agents: [Link](https://arxiv.org/abs/2608.16651)

## Low-thrust trajectories and mission design
- Pretrained Approximators for Low-Thrust Trajectory Cost and Reachability: [Link](https://arxiv.org/abs/2605.26790) - [Code](https://github.com/zhong-zh15/neural-low-thrust-approximator)

## Attitude determination and control
- Deep reinforcement learning-based spacecraft attitude control with pointing keep-out constraint: [Link](https://arxiv.org/pdf/2511.13746)
- Safe Deep Reinforcement Learning for Spacecraft Reorientation with Pointing Keep-Out Constraint: [Link](https://arxiv.org/pdf/2605.19967)
- Adaptive satellite attitude control for varying masses using deep reinforcement learning: [Link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11300345/)
- Deep Reinforcement Learning for Spacecraft Attitude Control During Atmospheric Re-Entry: [Link](https://arxiv.org/pdf/2606.31291)
- Reinforcement learning-based satellite formation attitude control under multi-constraint: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0273117724008032) · *Advances in Space Research 2024*

## Star trackers, optical and celestial navigation
- Satellite celestial navigation using star-tracker and earth sensor (IEEE): [Link](https://ieeexplore.ieee.org/document/7364961/)
- Autonomous optical navigation using nanosatellite-class instruments: a Mars approach case study: [Link](https://link.springer.com/article/10.1007/s10569-017-9800-x) · *Celestial Mechanics and Dynamical Astronomy 2017*
- Fully Multiplicative Attitude and Orbit Determination for Deep space Navigation: [Link](https://arxiv.org/pdf/2607.10072)
- Automated Shape-Model-Based Astrometry of Phobos from Mars Express SRC Images: [Link](https://arxiv.org/abs/2608.22352)

## Formation flying and swarms
- Low-Thrust Under-Actuated Satellite Formation Guidance and Control Strategies: [Link](https://arxiv.org/pdf/2412.20489) · *Acta Astronautica 2025*
- Autonomous and Distributed Motion Planning for Satellite Swarm: [Link](https://arc.aiaa.org/doi/10.2514/1.22736) · *JGCD*
- Behaviour based, autonomous and distributed scatter manoeuvres for satellite swarms: [Link](https://www.sciencedirect.com/science/article/abs/pii/S0094576512001452) · *Acta Astronautica 2012*
- Multi-Agent Algorithms for Collective Behavior: A structural and application-focused atlas: [Link](https://arxiv.org/pdf/2103.11067)

## Orbit determination, orbit prediction and space traffic
- Self-supervised Machine Learning Based Approach to Orbit Modelling Applied to Space Traffic Management: [Link](https://arxiv.org/html/2312.06854) · *IAASS Conference*
- Precise and Efficient Orbit Prediction in LEO with Machine Learning using Exogenous Variables: [Link](https://arxiv.org/html/2407.11026v1) · *IEEE WCCI 2024 (CEC)*
- Towards Automated Satellite Conjunction Management with Bayesian Deep Learning: [Link](https://arxiv.org/pdf/2012.12450) - [Code](https://github.com/kesslerlib/kessler) · *NeurIPS 2020 Workshop (AI for Earth Sciences)*
- A Markov Decision Process Framework for Early Maneuver Decisions in Satellite Collision Avoidance: [Link](https://arxiv.org/pdf/2508.05876)
- Satellite Trajectory Optimization via Proximal Policy Optimization for Space Debris Avoidance: [Link](https://arxiv.org/pdf/2608.09628) · *IEEE Access 2026*
- Treatment of Epistemic Uncertainty in Conjunction Analysis with Dempster-Shafer Theory: [Link](https://arxiv.org/pdf/2402.00060) · *Advances in Space Research 2024*
- Statistical Inference on the Miss Distance Compared to Collision Probability for Conjunction Analysis: [Link](https://arxiv.org/pdf/2503.20085)
- Space AI: Leveraging Artificial Intelligence for Space to Improve Life on Earth (survey): [Link](https://arxiv.org/pdf/2512.22399)
- Velocity-coupled Representation Refinement for Satellite Orbit Prediction: [Link](https://arxiv.org/abs/2608.23728)
- MAD-LEO: A Maneuver-Annotated Orbital Dataset for LEO Satellites with Tiered Multi-Source Evidence: [Link](https://arxiv.org/abs/2609.08556)

## Lunar and deep-space navigation, optical navigation and landing
- Deep Learning-Based Lunar Crater Terrain Relative Navigation (U-Net++ crater detector + EKF): [Link](https://arxiv.org/abs/2606.14776)
- AI-Enabled Crater-Based Navigation for Lunar Mapping: [Link](https://arxiv.org/pdf/2509.20748) · *Astrodynamics 2026*
- Lunar Terrain Relative Navigation Using a Convolutional Neural Network for Visual Crater Detection: [Link](https://arxiv.org/pdf/2007.07702) · *ACC 2020*
- Deep Learning Crater Detection for Lunar Terrain Relative Navigation: [Link](https://arc.aiaa.org/doi/abs/10.2514/6.2020-1838) · *AIAA SciTech 2020*
- Optical navigation for Lunar landing based on Convolutional Neural Network crater detector: [Link](https://www.sciencedirect.com/science/article/abs/pii/S1270963822001778) · *Aerospace Science and Technology 2022*
- Vision-Based Terrain Relative Navigation on High-Altitude Balloon and Sub-Orbital Rocket: [Link](https://arxiv.org/pdf/2302.08011)
- Autonomous navigation for deep space small satellites: Scientific and technological advances (review of 64 missions): [Link](https://www.sciencedirect.com/science/article/pii/S0094576521006652) · *Acta Astronautica 2022*
- Onboard Optical Position Estimation for Autonomous Cislunar Navigation via Reinforcement Learning: [Link](https://arc.aiaa.org/doi/10.2514/1.A36615) · *Journal of Spacecraft and Rockets*
- Cislunar Navigation Accuracy Using Optical Observations of Natural and Artificial Targets: [Link](https://arc.aiaa.org/doi/10.2514/1.A34694) · *Journal of Spacecraft and Rockets*
- Optical Deep-Space Instrument for Navigation (ODIN): [Link](https://ntrs.nasa.gov/api/citations/20240012072/downloads/Optical_Deep_space_Instrument_for_Navigation.pdf)
- Autonomous optical navigation for interplanetary missions: [Link](https://www.researchgate.net/publication/252328363_Autonomous_optical_navigation_for_interplanetary_missions)
