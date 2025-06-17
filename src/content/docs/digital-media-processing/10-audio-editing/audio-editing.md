---
title: Audio Editing
slug: digital-media-processing/audio-editing
description: Audio Editing
---

**Main Source:**

- **[Audio editing software — Wikipedia](https://en.wikipedia.org/wiki/Audio_editing_software)**

**Audio editing** is a broad term of the process of manipulating and modifying audio recordings using specialized software. It involves various techniques to enhance or alter audio files, such as adding background music, changing spoken word, adding sound effects, cutting or trimming specific part of audio, etc.

![An audio editing software](./audio-editor.png)  
Source: https://www.audacityteam.org/

- **Cutting & Trimming**: Cutting is the process of removing data of a specific portion in an audio file entirely. This can be useful for eliminating mistakes, removing silence or pauses, or getting rid of any undesirable parts.

  Trimming, on the other hand, involves shortening the length of an audio file by removing portions from the beginning or end. Trimming is commonly used to get rid of unnecessary or empty spaces at the start or end of a recording.

- **Adding Background Music & Sound Effect**: The editing software under the hood analyze audio properties such as amplitude adjustments, time stretching or compression, pitch shifting, and applying effects.

  The software then adds the corresponding audio together, taking into account their volume levels and any panning or spatial positioning settings. This is called mixing, and it creates a new set of audio samples that represents the combined audio.

- **Transition**: Transition is and effect used to smoothly connect or move between different audio segments. Common transition such as fade, where the audio gradually decreases or increases in volume over a specific duration.

  ![Adding ambience and background music in a video editor software](./adding-sound-editing.png)  
   Source: https://larryjordan.com/articles/how-to-auto-duck-audio-in-adobe-premiere-pro-cc/

  And many other techniques and terminology in audio editing…

#### Destructive & Non-Destructive

In audio editing (and other media editing in general), there are two different approaches to manipulate digital audio.

- **Destructive**: In destructive editing, any modifications made to the original audio are permanent and cannot be easily undone or reversed. When you apply changes to an audio file using destructive editing, the original data is overwritten, and the changes become a permanent part of the file.

  Destructive editing makes editing process more precise but after modifying the audio, we can't change it, although some editor allows you to "undo" the process.

- **Non-Destructive**: Instead of directly modifying the original file, non-destructive editing keep tracks the audio edits in separate file. While playing the audio, the edit file will be applied and processed on the fly. This makes editing more flexing although exporting or remixing may take longer as it need to process the audio edit first.

### Audio Restoration

Audio recordings suffer from a range of issues, such as background noise, clicks, pops, hisses, crackles, distortion, hum, or other artifacts. Audio restoration is the process of enhancing or repairing audio recordings that have been degraded or damaged over time.

#### Example

The first process is to identify the unwanted elements. Unwanted elements have some characteristics:

- Clicks are sudden and short-duration audio.
- Pops, are similar to clicks but are usually slightly longer
- Hisses are continuous, high-frequency noise that can be present in audio recordings.

Overall, the characteristics of unwanted elements are a sudden change in the constant audio or an unrelated patterns or rhythm to the main audio and not synchronized with specific events or sounds.

After identifying them, we can apply the corresponding algorithms or filter. For example, we can smoothen the surrounding audio near unwanted elements, apply frequencies filter, noise reduction in frequency domain using [FFT](/cs-notes/digital-signal-processing/fast-fourier-transform).

![Identifying unwanted elements in digital audio](./audio-restoration.png)  
Source: https://youtu.be/fWQ86r14Ei0
