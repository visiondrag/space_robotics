# Datasets

Datasets for planetary perception and navigation, sorted by body. Check each dataset's own license before use.

## Mars
| Name | Data | Task | Details |
|---|---|---|---|
| AI4Mars | About 35,000 rover images (Curiosity, Opportunity, Spirit), 4 terrain classes | Terrain-aware segmentation | [mars/AI4Mars.md](mars/AI4Mars.md) |
| MarsScapes | 195 panoramas, 9 classes | Semantic and instance segmentation | [mars/MarsScapes.md](mars/MarsScapes.md) |
| S5Mars | 6K high-resolution images, sparse labels | Semi-supervised segmentation | [mars/S5Mars.md](mars/S5Mars.md) |
| Curiosity surface images | Curiosity images | Classification | [mars/Curiosity_surface_images.md](mars/Curiosity_surface_images.md) |
| Mars32K | 32,368 unlabeled Curiosity Mastcam colour images (2012–2018) | Self-supervised / clustering | [mars/Mars32k_MarsData_Mars-Bench.md](mars/Mars32k_MarsData_Mars-Bench.md) |
| MarsData-V2 | 8,390 labeled 512×512 Mastcam images | Rock segmentation | [mars/Mars32k_MarsData_Mars-Bench.md](mars/Mars32k_MarsData_Mars-Bench.md) |
| Mars-Bench | 20 datasets, orbital and surface | Classification, segmentation, detection | [mars/Mars32k_MarsData_Mars-Bench.md](mars/Mars32k_MarsData_Mars-Bench.md) |
| MarsPlanBench | Terrain maps for path planning | Rover path planning | [mars/orbital-and-benchmarks.md](mars/orbital-and-benchmarks.md) |
| HiRISE boulders, CTX landforms, RMaM rockfall, MCTED | Orbital imagery | Segmentation, classification, DEM generation | [mars/orbital-and-benchmarks.md](mars/orbital-and-benchmarks.md) |
| Tianwen-1 segmentation | Mars surface images | Segmentation | [misc-links.md](misc-links.md) |

## Moon
| Name | Data | Task | Details |
|---|---|---|---|
| LuSNAR | Simulated stereo, semantic labels, depth, LiDAR (9 Unreal Engine scenes) | Segmentation, navigation, reconstruction | [moon/lunar-datasets.md](moon/lunar-datasets.md) |
| POLAR-Sim | About 2,600 HDR stereo pairs, 13 terrain scenarios (NASA POLAR) | Perception, rover simulation | [moon/lunar-datasets.md](moon/lunar-datasets.md) |
| LuMon | Chang'e-3 stereo ground truth, CHERI dark analog | Monocular depth | [moon/lunar-datasets.md](moon/lunar-datasets.md) |
| MoonAnything | Large-scale lunar supervised data | Vision benchmark | [moon/lunar-datasets.md](moon/lunar-datasets.md) |
| MoonPlanBench, SPICE-HL3, RMaM-2020 | Planning maps, single-photon and stereo, rockfall tiles | Planning, perception | [moon/lunar-datasets.md](moon/lunar-datasets.md) |
| Real change lunar landscape, LPI lunar surface | Imagery | Change detection / reference | [misc-links.md](misc-links.md) |

## Satellite and orbital vision
| Name | Data | Task |
|---|---|---|
| SPEED / SPEED+ | Synthetic and hardware-in-the-loop images of Tango (about 60k synthetic + 9.5k HIL) | 6D pose estimation, domain gap |
| SPARK / SPARK 2024 | About 150k RGB+depth images, 11 classes; real Zero-G lab sequences | Space object detection, segmentation, trajectory estimation |
| Non-cooperative target benchmark | Large-scale synthetic | Target perception |
| ESA-ADB, OPS-SAT, SMAP/MSL | Real satellite and rover telemetry | Anomaly detection |

Details: [satellite/spacecraft-vision.md](satellite/spacecraft-vision.md)

## Vision-language and multimodal datasets
| Name | Domain | Use |
|---|---|---|
| Space-LLaVA fine-tuning data (extraterrestrial databases with fine-grained language annotations) | Planetary | VLM adaptation ([paper](https://arxiv.org/abs/2408.05924)) |
| MarsRetrieval | Mars | Image-text retrieval, landform retrieval, geo-localization ([paper](https://arxiv.org/html/2602.13961v1)) |
| Mars-Bench | Mars | Foundation-model evaluation |
| RSVLM-QA, ChatEarthNet, VRSBench, SkyScript, SatlasPretrain | Earth observation | Remote-sensing VLM training and evaluation, see [AI/VLM papers](../docs/papers/ai-vlm.md) |
| LinkS²Bench | UAV-satellite views | Cross-view spatial reasoning |

## Analog field data
| Name | Data | Link |
|---|---|---|
| Katwijk Beach Planetary Rover Dataset | 1 km traverse with a rocker-bogie rover, stereo cameras, ToF and scanning LiDAR, ExoMars-like sensors | [ESA Robotics Datasets](https://robotics.estec.esa.int/datasets/katwijk-beach-11-2015/) |

## Where to find more
[NASA PDS](https://pds.nasa.gov/), [ESA Robotics Datasets](https://robotics.estec.esa.int/datasets/), [Earthdata](https://search.earthdata.nasa.gov/).
