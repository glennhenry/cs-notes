---
slug: /digital-signal-processing/signal
id: signal
title: Signal
description: Signal
---

**Main Source : [Wikipedia Signal](https://en.wikipedia.org/wiki/Signal)**

**Signal** refers to a function, variable or quantity that carries information. It can represent different types of data or information, such as electrical, acoustic, optical, or digital information.

Example of signal :

- Audio signal from sound wave
- Voltage signal from electronic
- Image signal from image pixels color

### Signal Types Based On Periodicity

- **Periodic Signal** : A periodic signal repeats its pattern over time at regular intervals. This means that the signal waveform or pattern recurs identically after a specific time duration called the period.

  ![An example of periodic signal which is sine wave that has some waves properties such as amplitude and period or cycle](./periodic-signal.png)  
   Source : https://www.open.edu/openlearn/science-maths-technology/exploring-communications-technology/content-section-1.1

  Examples of periodic signals include sine waves, square waves, sawtooth waves, triangle waves, semicircle waves, and etc.

  ![Example of various periodic signal including sawtooth](./signal-variation.png)
  Source : https://byjus.com/maths/fourier-series/

- **Non Periodic Signal** : Also known as aperiodic signals or transient signals, do not exhibit repetitive patterns over time. Examples of non-periodic signals include a single pulse, a burst of noise, or a speech signal.

  ![Example of non periodic signal, sound wave](./non-periodic-signal.jpeg)  
   Source : https://www.k-space.org/Class_Info/EE470/SigSys_chapter1_lec.pdf

- **Quasi-Periodic Signal** : Quasi-periodic signals exhibit a pattern that is similar to periodic signals, but not exactly identical. They have a repetitive nature, but with slight variations or irregularities.

  ![A signal that has period but not exactly identical](./quasi-periodic-signal.png)  
   Source : https://www.researchgate.net/figure/Predictability-Periodic-quasi-periodic-and-chaotic-regimes-Prediction-Zt-x-of_fig2_341395962

### Signal Types Based On Continuity

- **Continuous Time Signal** : Continuous-time signal are defined and exist for all values of time within a specified interval. They are represented by a continuous function of time. Examples of continuous-time signals are typically encountered in analog systems or natural phenomena including audio signals, analog electrical signals, sine waves, etc.

- **Discrete-Time Signal** : Discrete-time signal are defined only at specific instances or discrete points in time. They are represented by a sequence of values called sample taken at specific time intervals or time instances. Examples of discrete-time signal are commonly encountered in digital systems such as computer systems including digital audio signals, sampled analog signals, and sequences of numbers representing measurements or data such as image colors.

  ![Discrete signals has gap between while continous signals not](./continuity-signals.png)  
   Source : https://electronicsprojects.in/signals_and_systems/continuous-time-signal-and-discrete-time-signal-difference-diagram-and-information/ (with modification)

### Signal Types Based On Representation

- **Analog Signal** : Analog signal are continuous-time signals that represent physical quantities with a continuous range of values. They can take on any value within a specified range. Analog signal typically represent varying voltage or current levels. Examples of analog signals commonly encountered in natural phenomena including audio signals, analog electrical signals, and continuous variations of physical quantities such as temperature, pressure, or light intensity.

- **Digital Signal** : Digital signal are discrete-time signals that represent information using a finite set of discrete values or levels. These discrete values are typically represented by binary digits, or bits, such as 0s (low voltage) and 1s (high voltage). Digital signal are commonly encountered in digital world example of it includes digital audio signals, binary data streams, and sequences of discrete values representing measurements or data.

  ![Analog signal such as sine wave represents voltage and digital signal shows square wave varying only between 0 volt and 5 volt](./signal-representation.png)  
  Source : https://instrumentationtools.com/what-are-analog-and-digital-signals-differences-examples/
