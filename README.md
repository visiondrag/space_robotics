# Space Robotics

A curated, community-editable collection of resources for anyone who wants to become a professional in space robotics, across two areas: **planetary and surface robotics** (rovers, landers, legged robots, ISRU) and **satellites and orbital systems** (attitude control, guidance and navigation, proximity operations, in-orbit servicing, space computer vision).

![Space](assets/futuristic_interplanetary_system.png)

## Start here
1. **New to the field?** Watch the overview videos and follow the [learning path](docs/learning/README.md).
2. **Doing research?** Browse [papers by topic](docs/papers/README.md) and the [datasets](datasets/README.md).
3. **Building something?** See [simulators and flight software](docs/tools/README.md).
4. **Want experience?** Join a [competition](docs/competitions.md).

## Contents
| Section | What you'll find |
|---|---|
| [Learning](docs/learning/README.md) | Videos, courses, books, robotics and space fundamentals |
| [Papers: planetary](docs/papers/README.md) | About 80 papers in 15 topics: terrain perception, rover autonomy, lunar SLAM, planetary VLMs, legged and cave robots, asteroids, ISRU excavation, teleoperation, debris removal, in-orbit manipulation, flight software |
| [Papers: satellites](docs/papers/satellites.md) | About 45 papers: pose estimation, rendezvous and proximity ops, space object detection, attitude control with RL, star trackers and optical navigation, formation flying, onboard AI for Earth observation |
| [Datasets](datasets/README.md) | Mars, Moon, satellite-vision and analog-field datasets with task and size |
| [Tools](docs/tools/README.md) | OmniLRS, Isaac Sim, Gazebo, Basilisk, Space ROS, cFS, F Prime, SPICE, data portals |
| [Missions & reports](docs/missions-and-reports/README.md) | NASA/ESA reports, mission documents, careers |
| [Organizations](docs/organizations.md) | Agencies and labs to follow |
| [Competitions](docs/competitions.md) | Lunabotics, ERC, ESA Space Resources Challenge, Space Apps |
| [`library/`](library/) | Local PDF copies of key papers, reports and proposals |

## Topic map
- **Perception**: terrain segmentation, traversability, monocular depth → [papers](docs/papers/README.md#terrain-segmentation-and-perception-mars), [datasets](datasets/README.md)
- **Autonomy**: Perseverance AutoNav/ENav, MLNav → [papers](docs/papers/README.md#rover-autonomy-and-navigation)
- **Localization**: lunar VIO/SLAM, crater landmarks → [papers](docs/papers/README.md#lunar-navigation-slam-and-perception)
- **AI/VLMs**: Space-LLaVA, Mars-Bench, foundation models → [papers](docs/papers/README.md#foundation-models-and-vlms-for-planetary-science)
- **Manipulation**: on-orbit servicing, RL for free-flyers → [papers](docs/papers/README.md#space-manipulation-and-in-orbit-servicing)
- **Locomotion**: jumping and legged robots, lava tubes, asteroid hoppers → [papers](docs/papers/README.md#legged-jumping-and-cave-robots)
- **ISRU**: excavation, drilling, sampling → [papers](docs/papers/README.md#sampling-drilling-and-excavation-isru)
- **Operations**: teleoperation under delay, human-robot teaming → [papers](docs/papers/README.md#teleoperation-shared-autonomy-and-human-robot-teaming)
- **Debris**: active debris removal → [papers](docs/papers/README.md#space-debris-and-active-debris-removal)
- **Satellite vision**: pose estimation, space object detection → [papers](docs/papers/satellites.md#spacecraft-pose-estimation-and-relative-navigation), [datasets](datasets/satellite/spacecraft-vision.md)
- **Satellite GNC**: attitude control, formation flying, star trackers → [papers](docs/papers/satellites.md#attitude-determination-and-control)
- **Onboard AI**: Φ-Sat, cloud detection, TinyML on CubeSats → [papers](docs/papers/satellites.md#onboard-ai-and-earth-observation)
- **Software**: Space ROS, cFS, F Prime → [tools](docs/tools/README.md)

## Contributing
Contributions are welcome: see [CONTRIBUTING.md](CONTRIBUTING.md). Link checking runs weekly through GitHub Actions.

## License
Curation and descriptions: [CC BY 4.0](LICENSE). Linked papers and PDFs in `library/` keep their own terms.

## Note on sources
Many recent papers are preprints. Links were collected from web searches and may need checking; open an issue if one is broken.
