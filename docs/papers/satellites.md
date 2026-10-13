# Papers: spacecraft vision, situational awareness and onboard AI

Thanks to [Victor Rodriguez-Fernandez](https://www.linkedin.com/in/vrodriguezf90/) for his weekly arXiv picks on AI for space, which are a great source of papers for this list.

Computer vision and onboard AI for satellites: pose estimation, spacecraft segmentation and 3D reconstruction, detecting space objects, anomaly detection and onboard hardware. Related pages: [guidance, navigation and control](spacecraft-gnc.md), [space weather](space-weather.md), [planetary and surface robotics](README.md), and [AI, VLMs and agents](ai-vlm.md). Many recent entries are preprints. See also [satellite datasets](../../datasets/README.md#satellite-and-orbital-vision).

## Surveys and overviews
- Computer vision tasks for intelligent aerospace missions: An overview: [Link](https://arxiv.org/pdf/2407.06513)
- A survey on deep learning-based monocular spacecraft pose estimation: Current state, limitations and prospects: [Link](https://arxiv.org/pdf/2305.07348)
- Deep Learning-based Spacecraft Relative Navigation Methods: A Survey: [Link](https://arxiv.org/html/2108.08876v2)
- Recent Advancements in Deep Learning Applications and Methods for Autonomous Navigation: A Comprehensive Review: [Link](https://arxiv.org/pdf/2302.11089)
- Review of Autonomous Space Robotic Manipulators for On-Orbit Servicing and Active Debris Removal: [Link](https://spj.science.org/doi/10.34133/space.0291)

## Spacecraft pose estimation and relative navigation
- Satellite Pose Estimation Challenge: Dataset, Competition Design and Results (SPEC2019, SPEED): [Link](https://arxiv.org/pdf/1911.02050)
- Satellite Pose Estimation Competition 2021: Results and Analyses (SPEED+): [Link](https://www.sciencedirect.com/science/article/abs/pii/S0094576523000048)
- Bridging the Domain Gap for Flight-Ready Spaceborne Vision: [Link](https://arxiv.org/pdf/2409.11661)
- Online Supervised Training of Spaceborne Vision during Proximity Operations using Adaptive Kalman Filtering: [Link](https://arxiv.org/pdf/2309.11645)
- Robust On-Manifold Optimization for Uncooperative Space Relative Navigation with a Single Camera: [Link](https://arxiv.org/pdf/2005.07110)
- Navigation Around Unknown Space Objects Using Visible-Thermal Image Fusion: [Link](https://arxiv.org/pdf/2512.12203)
- High-accuracy real-time satellite pose estimation for in-orbit applications (Chinese J. Aeronautics): [Link](https://www.sciencedirect.com/science/article/pii/S1000936125000640)
- Monocular Navigation Relative to Unknown Spacecraft Using a Transformer-Aided Kalman Filter: [Link](https://arxiv.org/abs/2610.07231)
- DreamSat-Bench: Development and Initial Testing of a Testbed for AI-Based Pose Estimation from 3D Reconstruction: [Link](https://arxiv.org/abs/2609.14183)

## Spacecraft segmentation, 3D reconstruction and sim-to-real data
- GABI: Geometry-Aware Boundary Integration for Spacecraft Segmentation: [Link](https://openaccess.thecvf.com/content/CVPR2026W/AI4Space/html/Velentzas_GABI_Geometry-Aware_Boundary_Integration_for_spacecraft_segmentation_CVPRW_2026_paper.html)
- NeRF-based Spacecraft Reconstruction from Monocular Imagery Under Illumination Variability and Pose Uncertainty: [Link](https://arxiv.org/abs/2605.18447)
- CAD-Free Learning of Spacecraft Pose Estimators via NeRF-Based Augmentations: [Link](https://arxiv.org/abs/2605.19649)
- Component-Aware Structure-Preserving Style Transfer for Satellite Visual Sim2Real Data Construction: [Link](https://arxiv.org/abs/2605.19624)
- SpaceSense-Bench: A Large-Scale Multi-Modal Benchmark for Spacecraft Perception and Pose Estimation: [Link](https://arxiv.org/abs/2603.09320)

## Space object detection, recognition and situational awareness
- SPARK: SPAcecraft Recognition leveraging Knowledge of Space Environment: [Link](https://arxiv.org/html/2104.05978)
- A Large-Scale Synthetic Benchmark Dataset for Non-Cooperative Space Target Perception (Scientific Data): [Link](https://www.nature.com/articles/s41597-025-06056-8)
- Annotation Free Spacecraft Detection and Segmentation using Vision Language Models: [Link](https://arxiv.org/pdf/2602.04699)
- A Simulation-Augmented Benchmarking Framework for Automatic RSO Streak Detection in Single-Frame Space Images: [Link](https://arxiv.org/pdf/2305.00412)
- CosmosDSR: automated detection and tracking of orbital debris using the Unscented Kalman Filter: [Link](https://arxiv.org/pdf/2310.17158)
- Machine learning implementation for in-orbit RSO detection with a star tracker (AMOS 2020): [Link](https://amostech.com/TechnicalPapers/2020/Machine-Learning-Applications-of-SSA/Dave.pdf)
- A ready-to-deploy MLOps software platform for satellite and NEO detection at meter-class ground-based observatories: [Link](https://arxiv.org/abs/2609.27676)
- Improving Faint Object Detection for Space Situational Awareness with Variational Autoencoders: [Link](https://arxiv.org/abs/2609.11269)
- Collaborative Space Object Detection with Multi-Satellite Viewpoints in LEO Constellations: [Link](https://arxiv.org/abs/2606.01895)

## Onboard AI and Earth observation
- The Φ-Sat-1 Mission: The First On-Board Deep Neural Network Demonstrator for Satellite Earth Observation (CloudScout): [Link](https://www.academia.edu/88934113/The_%CE%A6_Sat_1_Mission_The_First_On_Board_Deep_Neural_Network_Demonstrator_for_Satellite_Earth_Observation)
- Phi-Sat-2: Onboard AI Apps for Earth Observation: [Link](https://www.researchgate.net/publication/358278832_Phi-Sat-2_Onboard_AI_Apps_for_Earth_Observation)
- Efficient FPGA-accelerated Convolutional Neural Networks for Cloud Detection on CubeSats: [Link](https://arxiv.org/pdf/2504.03891)
- Lightweight Cloud Masking Models for On-Board Inference in Hyperspectral Imaging: [Link](https://arxiv.org/pdf/2507.08052)
- TinyML Enhances CubeSat Mission Capabilities: [Link](https://arxiv.org/pdf/2603.20174)
- Exploiting In-Sensor Computing for Energy-Efficient Earth Observation: [Link](https://arxiv.org/pdf/2606.01271)
- SAT-Edge-Agent: Hardware-in-the-Loop Edge-Agent Orchestration for Onboard Satellite Intelligence: [Link](https://arxiv.org/pdf/2608.03728)
- Semantic Segmentation in Satellite Hyperspectral Imagery by Deep Learning: [Link](https://arxiv.org/pdf/2310.16210)

## On-orbit AI hardware (radiation-tolerant accelerators)
- FPGA-Based Neural Network Accelerators for Space Applications: A Survey: [Link](https://arxiv.org/abs/2504.16173)
- FPGA & VPU Co-Processing in Space Applications: Development and Testing with DSP/AI Benchmarks: [Link](https://arxiv.org/pdf/2506.12968)
- Towards Employing FPGA and ASIP Acceleration to Enable Onboard AI/ML in Space Applications: [Link](https://pith.science/paper/2506.12970)
- Accelerating AI and Computer Vision for Satellite Pose Estimation on the Intel Myriad X Embedded SoC: [Link](https://arxiv.org/pdf/2409.12939)
- Enabling radiation tolerant heterogeneous GPU-based onboard data processing in space (CEAS Space Journal): [Link](https://link.springer.com/article/10.1007/s12567-020-00321-9)
- Efficient FPGA-accelerated CNNs for cloud detection on CubeSats (see also the onboard AI section): [Link](https://arxiv.org/pdf/2504.03891)
- Hardware-Accelerated Instance Segmentation for Resource-Constrained Space Robotics with Criticality Analysis: [Link](https://arxiv.org/abs/2609.02219)

## Anomaly detection and fault diagnosis
- Detecting Spacecraft Anomalies Using LSTMs and Nonparametric Dynamic Thresholding (NASA SMAP/MSL, widely used baseline): [Link](https://arxiv.org/pdf/1802.04431)
- European Space Agency Benchmark for Anomaly Detection in Satellite Telemetry (ESA-ADB): [Link](https://arxiv.org/pdf/2406.17826)
- Toward Deployable Satellite Anomaly Detection: A Benchmark Study on Large-Scale ESA-ADB Telemetry: [Link](https://arxiv.org/pdf/2607.07335)
- The OPS-SAT benchmark for detecting anomalies in satellite telemetry: [Link](https://arxiv.org/pdf/2407.04730)
- A Hierarchical Ensemble Pipeline for Anomaly Detection in ESA Satellite Telemetry: [Link](https://arxiv.org/pdf/2605.06681)
- Explainable anomaly detection in spacecraft telemetry: [Link](https://dl.acm.org/doi/10.1016/j.engappai.2024.108083)
- Physics-Informed Real NVP for Satellite Power System Fault Detection: [Link](https://arxiv.org/pdf/2405.17339)
- Convolutional Neural Network Design and Evaluation for Real-Time Multivariate Time Series Fault Detection in Spacecraft Attitude Sensors: [Link](https://arxiv.org/pdf/2410.09126)
- Structure-Aware Unsupervised Anomaly Detection for Spacecraft Telemetry with Adaptive EVT Thresholding: [Link](https://arxiv.org/abs/2609.10017)
- Deep Learning-Based Anomaly Detection in Spacecraft Telemetry on Edge Devices: [Link](https://arxiv.org/abs/2603.29375)

## In-orbit manipulation and servicing
See the manipulation, servicing and debris sections in the [main papers page](README.md#space-manipulation-and-in-orbit-servicing).
