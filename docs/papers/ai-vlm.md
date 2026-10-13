# Papers: AI, foundation models, VLMs and LLM agents for space

Thanks to [Victor Rodriguez-Fernandez](https://www.linkedin.com/in/vrodriguezf90/) for his weekly arXiv picks on AI for space, which are a great source of papers for this list.

Cross-cutting page for machine learning applied to both planetary robotics and satellites. Core planetary VLM entries (Space-LLaVA, Mars-Bench, MarsRetrieval, Mars foundation model) are in the [planetary papers page](README.md#foundation-models-and-vlms-for-planetary-science). Many entries are recent preprints.

## Foundation models for planetary imagery
- MOMO: Mars Orbital Model Foundation Model for Mars Orbital Applications (includes a HiRISE boulder segmentation dataset): [Link](https://arxiv.org/pdf/2604.02719) - [Code](https://github.com/kerner-lab/MOMO) · *CVPR 2026*
- Knowledge distillation with Segment Anything (SAM) for Planetary Geological Mapping: [Link](https://arxiv.org/pdf/2305.07586)
- Zero-shot semantic landmark-based visual odometry using foundation models for unstructured planetary exploration (SAM for rock landmarks, DINOv2 descriptors): [Link](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2026.1819714/full) · *Frontiers in Robotics and AI 2026*
- MARS-CLIP: Multi-Resolution and Attention Refined Zero-Shot Image Segmentation: [Link](https://arxiv.org/abs/2609.08283) · *ICIP 2026*
- Vision-Language Model for Accurate Crater Detection: [Link](https://arxiv.org/pdf/2601.07795)
- Deep learning framework for crater detection and identification on the Moon and Mars: [Link](https://www.nature.com/articles/s44453-026-00036-x) · *npj Space Exploration 2026*
- Mapping landslides on Earth, Moon, and Mars using satellite imagery and deep learning: [Link](https://www.researchgate.net/publication/387619586_Mapping_landslides_on_Earth_Moon_and_Mars_using_satellite_imagery_and_deep_learning_techniques)
- MANTLE: A Framework for Adaptive In-Situ Planetary Perception Using a Modular Uplink Principle: [Link](https://arxiv.org/pdf/2608.28724) - [Code](https://github.com/pranavdurai10/mantle)
- MARTIAN: A Rendering Framework for Aerial Mars Imagery from HiRISE Orbital Data: [Link](https://arxiv.org/pdf/2605.29647) - [Code](https://github.com/nasa-jpl/martian)

## VLMs for spacecraft and orbital scenes
- Lost in Space? Vision-Language Models Struggle with Relative Camera Pose Estimation: [Link](https://arxiv.org/pdf/2601.22228) - [Code](https://github.com/kdeng03/lost-in-space)
- Annotation Free Spacecraft Detection and Segmentation using Vision Language Models: [Link](https://arxiv.org/pdf/2602.04699) - [Code](https://github.com/giddyyupp/annotation-free-spacecraft-segmentation) · *ICRA 2026*
- Are VLMs Lost Between Sky and Space? LinkS²Bench for UAV-Satellite Dynamic Cross-View Spatial Intelligence: [Link](https://arxiv.org/pdf/2604.02020)

## Remote-sensing VLMs (Earth observation; transferable to satellite payloads)
- Vision-Language Modeling Meets Remote Sensing: Models, Datasets and Perspectives (survey): [Link](https://arxiv.org/html/2505.14361v1) · *IEEE GRSM 2025*
- Advancements in Visual Language Models for Remote Sensing: Datasets, Capabilities, and Enhancement Techniques: [Link](https://arxiv.org/html/2410.17283v2) · *Remote Sensing (MDPI) 2025*
- EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues: [Link](https://arxiv.org/pdf/2412.15190) - [Code](https://github.com/hiyamdebary/EarthDial) · *CVPR 2025*
- ChatEarthNet: A Global-Scale Image-Text Dataset Empowering Vision-Language Geo-Foundation Models: [Link](https://arxiv.org/pdf/2402.11325) · *Earth System Science Data 2025*
- RSVLM-QA: A Benchmark Dataset for Remote Sensing VLM-based Question Answering: [Link](https://arxiv.org/abs/2508.07918) - [Code](https://github.com/StarZi0213/RSVLM-QA) · *ACM MM 2025*
- Few-Shot Vision-Language Reasoning for Satellite Imagery via Verifiable Rewards: [Link](https://arxiv.org/pdf/2507.21745) - [Code](https://github.com/aybora/FewShotReasoning) · *ICCV 2025 Workshops (CDEL)*
- GeoDiT: A Diffusion-based Vision-Language Model for Geospatial Understanding: [Link](https://arxiv.org/pdf/2512.02505)
- GeoNLI: A Natural Language Interpreter for Satellite Imagery: [Link](https://arxiv.org/pdf/2609.28741)
- REOBench: Benchmarking Robustness of Earth Observation Foundation Models: [Link](https://arxiv.org/pdf/2505.16793) - [Code](https://github.com/lx709/REOBench) · *NeurIPS 2025 (Datasets and Benchmarks)*
- EarthNets: Empowering AI in Earth Observation: [Link](https://arxiv.org/pdf/2210.04936)
- GeoChat: Grounded Large Vision-Language Model for Remote Sensing: [Link](https://arxiv.org/abs/2311.15826) - [Code](https://github.com/mbzuai-oryx/GeoChat) · *CVPR 2024*
- RemoteCLIP: A Vision Language Foundation Model for Remote Sensing: [Link](https://arxiv.org/abs/2306.11029) - [Code](https://github.com/ChenDelong1999/RemoteCLIP) · *IEEE TGRS*
- EarthGPT: A Universal Multi-modal Large Language Model for Multi-sensor Image Comprehension in Remote Sensing: [Link](https://arxiv.org/abs/2401.16822) · *IEEE TGRS 2024*
- SkyScript: A Large and Semantically Diverse Vision-Language Dataset for Remote Sensing (5.2M image-text pairs): [Link](https://arxiv.org/abs/2312.12856) - [Code](https://github.com/wangzhecheng/SkyScript) · *AAAI 2024*
- SatlasPretrain: A Large-Scale Dataset for Remote Sensing Image Understanding: [Link](https://arxiv.org/abs/2211.15660) · *ICCV 2023*
- VRSBench: A Versatile Vision-Language Benchmark Dataset for Remote Sensing Image Understanding: [Link](https://arxiv.org/abs/2406.12384) - [Code](https://github.com/lx709/VRSBench)

## LLM and agentic systems for spacecraft operations
- Language Models are Spacecraft Operators: [Link](https://arxiv.org/abs/2404.00413)
- LLMSat: A Large Language Model-Based Goal-Oriented Agent for Autonomous Space Exploration: [Link](https://arxiv.org/abs/2405.01392) - [Code](https://github.com/DM1122/LLMSat)
- Large Language Models as Autonomous Spacecraft Operators in Kerbal Space Program: [Link](https://arxiv.org/abs/2505.19896v1) · *Advances in Space Research 2025*
- ASTREA: Introducing Agentic Intelligence for Orbital Thermal Autonomy (an LLM plus RL controller run on flight-heritage hardware aboard the ISS): [Link](https://arxiv.org/pdf/2509.13380v2)
- Space AI: Leveraging Artificial Intelligence for Space to Improve Life on Earth: [Link](https://arxiv.org/pdf/2512.22399)
- OrbitTAMP: Grounding Language Models for Task and Motion Planning in Spacecraft Rendezvous: [Link](https://arxiv.org/abs/2610.01093) · *IEEE TAES 2026*
- HELIOS: An LLM-Driven Autonomous Indirect Trajectory Optimization Agent: [Link](https://arxiv.org/abs/2607.24051)
- Semantic Constraint Synthesis for Adaptive Trajectory Optimization via Large Language Models: [Link](https://arxiv.org/abs/2606.04123) · *CVPR 2026 Workshops (AI4Space)*
- Agentic AutoResearch for Space Autonomy: An Auditable, LLM-Driven Research Agent for Aerospace Control Problems: [Link](https://arxiv.org/abs/2606.20394)
- Cognitively Layered Data Synthesis for Domain Adaptation of LLMs to Space Situational Awareness: [Link](https://arxiv.org/abs/2603.09231)

## Vision-language-action and embodied models (general, relevant to space robots)
- Large VLM-based Vision-Language-Action Models for Robotic Manipulation: A Survey: [Link](https://arxiv.org/abs/2508.13073) - [Code](https://github.com/JiuTian-VL/Large-VLM-based-VLA-for-Robotic-Manipulation)
- RoboMamba: Efficient Vision-Language-Action Model for Robotic Reasoning and Manipulation: [Link](https://arxiv.org/html/2406.04339v2) - [Code](https://github.com/lmzpai/roboMamba) · *NeurIPS 2024*
- Vision Language Action (VLA) Models for Unmanned Aerial Robotics and Bimanual Manipulation: A Review: [Link](https://arxiv.org/pdf/2607.06706) · *Drones (MDPI) 2026*
- Related notes in this repo: [VLAs for driving](vlas-for-driving.md), [efficient inference](efficient-inference.md)
