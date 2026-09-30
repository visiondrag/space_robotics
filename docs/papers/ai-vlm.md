# Papers: AI, foundation models, VLMs and LLM agents for space

Cross-cutting page for machine learning applied to both planetary robotics and satellites. Core planetary VLM entries (Space-LLaVA, Mars-Bench, MarsRetrieval, Mars foundation model) are in the [planetary papers page](README.md#foundation-models-and-vlms-for-planetary-science). Many entries are recent preprints.

## Foundation models for planetary imagery
- MOMO: Mars Orbital Model Foundation Model for Mars Orbital Applications (includes a HiRISE boulder segmentation dataset): [Link](https://arxiv.org/pdf/2604.02719)
- Knowledge distillation with Segment Anything (SAM) for Planetary Geological Mapping: [Link](https://arxiv.org/pdf/2305.07586)
- Zero-shot semantic landmark-based visual odometry using foundation models for unstructured planetary exploration (SAM for rock landmarks, DINOv2 descriptors): [Link](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2026.1819714/full)
- MARS-CLIP: Multi-Resolution and Attention Refined Zero-Shot Image Segmentation: [Link](https://arxiv.org/abs/2609.08283)
- Vision-Language Model for Accurate Crater Detection: [Link](https://arxiv.org/pdf/2601.07795)
- Deep learning framework for crater detection and identification on the Moon and Mars (npj Space Exploration): [Link](https://www.nature.com/articles/s44453-026-00036-x)
- Mapping landslides on Earth, Moon, and Mars using satellite imagery and deep learning: [Link](https://www.researchgate.net/publication/387619586_Mapping_landslides_on_Earth_Moon_and_Mars_using_satellite_imagery_and_deep_learning_techniques)
- MANTLE: A Framework for Adaptive In-Situ Planetary Perception Using a Modular Uplink Principle: [Link](https://arxiv.org/pdf/2608.28724)
- MARTIAN: A Rendering Framework for Aerial Mars Imagery from HiRISE Orbital Data: [Link](https://arxiv.org/pdf/2605.29647)

## VLMs for spacecraft and orbital scenes
- Lost in Space? Vision-Language Models Struggle with Relative Camera Pose Estimation: [Link](https://arxiv.org/pdf/2601.22228)
- Annotation Free Spacecraft Detection and Segmentation using Vision Language Models: [Link](https://arxiv.org/pdf/2602.04699)
- Are VLMs Lost Between Sky and Space? LinkS²Bench for UAV-Satellite Dynamic Cross-View Spatial Intelligence: [Link](https://arxiv.org/pdf/2604.02020)

## Remote-sensing VLMs (Earth observation; transferable to satellite payloads)
- Vision-Language Modeling Meets Remote Sensing: Models, Datasets and Perspectives (survey): [Link](https://arxiv.org/html/2505.14361v1)
- Advancements in Visual Language Models for Remote Sensing: Datasets, Capabilities, and Enhancement Techniques: [Link](https://arxiv.org/html/2410.17283v2)
- EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues: [Link](https://arxiv.org/pdf/2412.15190)
- ChatEarthNet: A Global-Scale Image-Text Dataset Empowering Vision-Language Geo-Foundation Models: [Link](https://arxiv.org/pdf/2402.11325)
- RSVLM-QA: A Benchmark Dataset for Remote Sensing VLM-based Question Answering: [Link](https://arxiv.org/abs/2508.07918)
- Few-Shot Vision-Language Reasoning for Satellite Imagery via Verifiable Rewards: [Link](https://arxiv.org/pdf/2507.21745)
- GeoDiT: A Diffusion-based Vision-Language Model for Geospatial Understanding: [Link](https://arxiv.org/pdf/2512.02505)
- GeoNLI: A Natural Language Interpreter for Satellite Imagery: [Link](https://arxiv.org/pdf/2609.28741)
- REOBench: Benchmarking Robustness of Earth Observation Foundation Models: [Link](https://arxiv.org/pdf/2505.16793)
- EarthNets: Empowering AI in Earth Observation: [Link](https://arxiv.org/pdf/2210.04936)
- Named models to look up: GeoChat, RemoteCLIP, EarthGPT, SkyScript, SatlasPretrain, VRSBench.

## LLM and agentic systems for spacecraft operations
- Language Models are Spacecraft Operators: [Link](https://arxiv.org/abs/2404.00413)
- LLMSat: A Large Language Model-Based Goal-Oriented Agent for Autonomous Space Exploration: [Link](https://arxiv.org/abs/2405.01392)
- Large Language Models as Autonomous Spacecraft Operators in Kerbal Space Program: [Link](https://arxiv.org/abs/2505.19896v1)
- ASTREA: agentic spacecraft operations with an LLM plus RL controller on flight-heritage hardware aboard the ISS: [Link](https://arxiv.org/pdf/2509.13380v2)
- Space AI: Leveraging Artificial Intelligence for Space to Improve Life on Earth: [Link](https://arxiv.org/pdf/2512.22399)

## Vision-language-action and embodied models (general, relevant to space robots)
- Large VLM-based Vision-Language-Action Models for Robotic Manipulation: A Survey: [Link](https://arxiv.org/abs/2508.13073)
- RoboMamba: Efficient Vision-Language-Action Model for Robotic Reasoning and Manipulation: [Link](https://arxiv.org/html/2406.04339v2)
- Vision Language Action (VLA) Models for Unmanned Aerial Robotics and Bimanual Manipulation: A Review: [Link](https://arxiv.org/pdf/2607.06706)
- Related notes in this repo: [VLAs for driving](vlas-for-driving.md), [efficient inference](efficient-inference.md)

## Open problems worth exploring
- Onboard deployment: run VLMs and foundation models under radiation-tolerant, low-power constraints (see [satellite hardware](satellites.md#on-orbit-ai-hardware-radiation-tolerant-accelerators)).
- Domain gap: models trained on Earth imagery vs Mars/Moon lighting and texture.
- Hallucination and safety of LLM agents in operations.
- Sparse labels: SAM/DINOv2 pseudo-labels for planetary terrain.
