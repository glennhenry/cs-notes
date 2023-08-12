---
slug: /digital-media-processing/audio-input-output
id: audio-input-output
title: Audio Input & Output
description: Audio Input & Output
---

**Main Source:**

- **[Wikipedia Microphone](https://en.wikipedia.org/wiki/Microphone)**
- **[Wikipedia Loudspeaker](https://en.wikipedia.org/wiki/Loudspeaker)**

**Audio Input** is the process of capturing and conversion of sound waves into an electronic signal that can be processed and interpreted by a device. Common examples of audio input devices include microphones, which convert sound waves into electrical signals.

**Audio Output** on the other hand is the reproduction of sound from an electronic device. This can be achieved through speakers, headphones, or any other audio output device. The electronic signal representing the sound is converted back into sound waves that can be heard by humans.

#### Sound Card

The convertion between analog and digital signal are handled by sound card, also known as audio card or audio interface. It serves as an interface between the computer's digital system and audio devices such as speakers, headphones, microphones.

![A sound card](./sound-card.jpeg)  
Source : https://warmadewa.id/fungsi-sound-card/

#### MIDI

While exchanging information or communicating between computers related to digital audio, there is a standard called MIDI (Musical Instrument Digital Interface). 

Conforming to a standard like MIDI can be useful for computer to make it easier to read digital audio. For example, MIDI has standard for note-on and note-end that indicates the start and the end of a note.

![Example of MIDI data](./midi-example.png)  
Source : https://bard.google.com/

### Audio Input Device

Common type of audio input device is micrphone, there are many types of microphone, the common are condensed and dynamic. The difference is condenser microphone is more suitable for recording a higher frequency while dynamic microphone is better for capturing loud and strong sounds.

#### How Microphone Works

Microphone utilize the principle of electromagnetic induction. They consist of a diaphragm, a coil of wire, and a magnet.

Inside a mic, there is a diaphragm which is a thin, flexible membrane that vibrates in response to sound waves. Behind the diaphragm, there is a coil which is wrapped around a permanent magnet.

When sound wave hit the diaphragm, it vibrates, causing the attached coil to move within the magnetic field. This motion generates an electrical current in the coil through electromagnetic induction. The electrical current represents the variations in air pressure caused by the sound waves.

The electrical signal generated is in analog signal form, it is then sent through the microphone's output connector for further processing.

![Inside a dynamic microphone](./microphone.png)  
Source : https://en.wikipedia.org/wiki/Microphone

#### Signal Processing

One of the technique to further process the audio is amplification. Amplification to the process of increasing the amplitude or level of an electrical signal. It involves boosting the strength or the loudness of sound to a desired level. The analog electrical signal is amplified using amplifier tools.

The idea of amplifier is amplifying the signal using transistors. Transistor increase the voltage and power of an electrical audio signal by adding up voltage or current from another source, thereby amplifying it.

![The electrical design of amplifier](./amplifier-design.png)  
Source : https://en.wikipedia.org/wiki/Amplifier

![Amplifier](./amplifier.jpeg)  
Source : https://en.wikipedia.org/wiki/Integrated_amplifier

#### Digital Signal Processing

After electrical signal is amplified, it will be converted to a digital format using an analog-to-digital converter (ADC). Digital form of sound data or audio can be further processed using various digital signal processing techniques. This can include equalization, compression, filtering, effects, and other audio processing algorithms.

After processing, audio data can be encoded into specific digital audio formats, such as MP3, AAC, WAV, or FLAC, depending on the intended use or distribution requirements.

![A software to process audio using equalizer](./digital-audio-processing.jpeg)  
Source : https://www.gearrice.com/update/4-tricks-with-aimp-to-better-listen-to-rock-and-metal-music/

### Audio Output Device

Digital audio file contains sequence of binary data, the first step in outputting an audio data is to decode or read the audio file. It will be decode by an audio player software. The binary data will converted into an analog electrical signal using a digital-to-analog converter (DAC).

The analog audio signal is sent to the computer's audio output device, such as the sound card or built-in audio interface. The sound card is connected to audio output ports, which is speakers, headphones, or other audio playback devices.

#### How Speaker Works

The concept of speaker is the reverse process of microphone and based on the principle of electromagnetism. The speaker also consists of a permanent magnet and a coil. The voice coil is a wire coil attached to a diaphragm.

Electrical audio signal passes through the coil, it creates a changing magnetic field around the coil. Changing magnetic field interacts with the fixed magnet, resulting in a force acting on the coil.

Force generated by coil causes the attached diaphragm to move back and forth. Movement of diaphragm will create pressure variations or variation of sound wave, it depends on the force which is also dependent on the electrical signal.

Sound wave will then propagate through the air and reach our ears.

![Component of speaker](./speaker.jpg)  
Source : https://www.how2shout.com/what-is/what-is-speaker-and-how-it-functions.html

![A gif animation of how speaker works](./speaker.gif)  
Source : https://soundcertified.com/how-do-speakers-work/
