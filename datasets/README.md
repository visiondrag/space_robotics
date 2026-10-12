# Datasets

Datasets for planetary perception and navigation, sorted by body. Check each dataset's own license before use.

## Mars
| Name | Data | Task | Details |
|---|---|---|---|
| AI4Mars | About 35,000 rover images (Curiosity, Opportunity, Spirit), 4 terrain classes | Terrain-aware segmentation | [Details](mars/AI4Mars.md) |
| MarsScapes | 195 panoramas, 9 classes | Semantic and instance segmentation | [Details](mars/MarsScapes.md) |
| S5Mars | 6K high-resolution images, sparse labels | Semi-supervised segmentation | [Details](mars/S5Mars.md) |
| Curiosity surface images | Curiosity images | Classification | [Details](mars/Curiosity_surface_images.md) |
| MarsData-V2 | 8,390 labeled 512×512 Mastcam images | Rock segmentation | [Details](mars/MarsData_Mars-Bench.md) |
| Mars-Bench | 20 datasets, orbital and surface | Classification, segmentation, detection | [Details](mars/MarsData_Mars-Bench.md) |
| MarsPlanBench | Terrain maps for path planning | Rover path planning | [Details](mars/orbital-and-benchmarks.md) |
| HiRISE boulders, CTX landforms, RMaM rockfall, MCTED | Orbital imagery | Segmentation, classification, DEM generation | [Details](mars/orbital-and-benchmarks.md) |
| Tianwen-1 segmentation | Mars surface images | Segmentation | [Details](misc-links.md) |

## Moon
| Name | Data | Task | Details |
|---|---|---|---|
| LuSNAR | Simulated stereo, semantic labels, depth, LiDAR (9 Unreal Engine scenes) | Segmentation, navigation, reconstruction | [Details](moon/lunar-datasets.md) |
| POLAR-Sim | About 2,600 HDR stereo pairs, 13 terrain scenarios (NASA POLAR) | Perception, rover simulation | [Details](moon/lunar-datasets.md) |
| LuMon | Chang'e-3 stereo ground truth, CHERI dark analog | Monocular depth | [Details](moon/lunar-datasets.md) |
| MoonAnything | Large-scale lunar supervised data | Vision benchmark | [Details](moon/lunar-datasets.md) |
| [MoonPlanBench](https://arxiv.org/abs/2512.21438), [SPICE-HL3](https://www.nature.com/articles/s41597-026-06668-8), [RMaM-2020](https://www.frontiersin.org/articles/10.3389/frsen.2021.640034/full) | Planning maps, single-photon and stereo, rockfall tiles | Planning, perception | [Details](moon/lunar-datasets.md) |
| Real change lunar landscape, LPI lunar surface | Imagery | Change detection / reference | [Details](misc-links.md) |

## Satellite and orbital vision
| Name | Data | Task |
|---|---|---|
| [SPEED / SPEED+](https://purl.stanford.edu/wv398fc4383) | Synthetic and hardware-in-the-loop images of Tango (about 60k synthetic + 9.5k HIL) | 6D pose estimation, domain gap |
| [SPARK](https://arxiv.org/html/2104.05978) / [SPARK 2024](https://cvi2.uni.lu/spark2024/) | About 150k RGB+depth images, 11 classes; real Zero-G lab sequences | Space object detection, segmentation, trajectory estimation |
| [Non-cooperative target benchmark](https://www.nature.com/articles/s41597-025-06056-8) | Large-scale synthetic | Target perception |
| [ESA-ADB](https://arxiv.org/pdf/2406.17826), [OPS-SAT](https://arxiv.org/pdf/2407.04730), [SMAP/MSL](https://arxiv.org/pdf/1802.04431) | Real satellite and rover telemetry | Anomaly detection |

Details: [satellite and spacecraft datasets](satellite/spacecraft-vision.md)

## Vision-language and multimodal datasets
| Name | Domain | Use |
|---|---|---|
| [Space-LLaVA](https://arxiv.org/abs/2408.05924) fine-tuning data (extraterrestrial databases with fine-grained language annotations) | Planetary | VLM adaptation ([paper](https://arxiv.org/abs/2408.05924)) |
| [MarsRetrieval](https://arxiv.org/html/2602.13961v1) | Mars | Image-text retrieval, landform retrieval, geo-localization ([paper](https://arxiv.org/html/2602.13961v1)) |
| [Mars-Bench](https://arxiv.org/abs/2510.24010) | Mars | Foundation-model evaluation |
| [RSVLM-QA](https://arxiv.org/abs/2508.07918), [ChatEarthNet](https://arxiv.org/pdf/2402.11325), [VRSBench](https://arxiv.org/abs/2406.12384), [SkyScript](https://arxiv.org/abs/2312.12856), [SatlasPretrain](https://arxiv.org/abs/2211.15660) | Earth observation | Remote-sensing VLM training and evaluation, see [AI/VLM papers](../docs/papers/ai-vlm.md) |
| [LinkS²Bench](https://arxiv.org/pdf/2604.02020) | UAV-satellite views | Cross-view spatial reasoning |

## Analog field data
| Name | Data | Link |
|---|---|---|
| Katwijk Beach Planetary Rover Dataset | 1 km traverse with a rocker-bogie rover, stereo cameras, ToF and scanning LiDAR, ExoMars-like sensors | [ESA Robotics Datasets](https://robotics.estec.esa.int/datasets/katwijk-beach-11-2015/) |

## Where to find more
[NASA PDS](https://pds.nasa.gov/), [ESA Robotics Datasets](https://robotics.estec.esa.int/datasets/), [Earthdata](https://search.earthdata.nasa.gov/).
