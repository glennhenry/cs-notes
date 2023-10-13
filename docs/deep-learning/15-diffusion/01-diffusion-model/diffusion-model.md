---
slug: /deep-learning/diffusion/diffusion-model
id: diffusion-model
title: Diffusion Model
description: Diffusion Model
---

**Main Source :**

- [Wikipedia Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model)

**Diffusion Model** is a class of generative model, meaning it generates new data by learning the distribution of given dataset and then sample it. Diffusion model is typically used for tasks including image generation, image denoising, generating high-resolution image, and etc.

Diffusion model is inspired by the concept of [diffusion](https://en.wikipedia.org/wiki/Diffusion) in physics, which is a stochastic phenomenon where particles spread out from an area of high concentration to an area of low concentration, eventually leading to a uniform distribution. The underlying principles and equations of diffusion in physics provide a mathematical foundation that is adapted and applied to model to generates data.

The idea of diffusion model is, we model the target image (the target image we want to generate) as a data distribution (called target distribution), and then the model will aim to transform a simple base distribution, typically a Gaussian distribution, into the target distribution through an iterative diffusion process.

<video width="720" height="360" controls>
  <source src="https://learnopencv.com/wp-content/uploads/2023/02/denoising-diffusion-probabilistic-models_flower_inference_2.mp4" type="video/mp4"/>
</video>  

Source : https://learnopencv.com/denoising-diffusion-probabilistic-models/

## Denoising Diffusion Model

**Denoising Diffusion Model** is the type of diffusion model that uses the diffusion concept, it aims to remove noise from observed data and generate clean, high-quality samples.

### DDPM

Denoising Diffusion Probabilistic Models

### DDIM

Denoising Diffusion Implicit Models

## Score-Based Diffusion Model

uses score function

## Latent Diffusion Model (LDM)

uses [variational autoencoder (VAE)](/deep-learning/variational-autoencoder)

---

The entire diffusion topics is based on the fast.ai part 2 course, with addition from other sources.

- **[fast.ai Part 2 course](https://course.fast.ai/Lessons/part2.html)**

this note should include the general principle of how diffusion model works, the next notes should explain it in more detailed along with the explanation about the method and technique used.

what to explain in diffusion :

- Diffusion method
- Denoising Diffusion Probabilistic Models (DDPM)
- Denoising Diffusion Implicit Models (DDIM)
- conditional and unconditional diffusion
- sampler
- CLIP
- a
- b
- c
  the last 3: stable diffusion, dall-e, and midjourney will explain what diffusion model technique they specifically uses, it can be thought as the application of diffusion model.
- stable diffusion
- dall-e
- midjourney
