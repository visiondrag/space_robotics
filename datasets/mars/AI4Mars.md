# AI4Mars

About 35,000 rover images from Curiosity (NAVCAM and Mastcam), Opportunity and Spirit, with pixel-level labels for 4 terrain classes: soil, sand, bedrock, big rock.
- Training labels: 16,064 images, crowdsourced from citizen scientists, each image labeled by 10 people.
- Test set: 322 "gold standard" images, each pixel agreed by 3 experts.
- Use: terrain-aware autonomous driving, segmentation benchmark.

Links: [Paper (CVPRW 2021)](https://openaccess.thecvf.com/content/CVPR2021W/AI4Space/papers/Swan_AI4MARS_A_Dataset_for_Terrain-Aware_Autonomous_Driving_on_Mars_CVPRW_2021_paper.pdf) · [NASA data](https://data.nasa.gov/dataset/ai4mars-a-dataset-for-terrain-aware-autonomous-driving-on-mars) · [Hugging Face](https://huggingface.co/datasets/hassanjbara/AI4MARS)
Used by: [Mars Terrain Segmentation with Less Labels](https://arxiv.org/abs/2202.00791), [Mixed-domain Training](https://arxiv.org/pdf/2209.13674)
