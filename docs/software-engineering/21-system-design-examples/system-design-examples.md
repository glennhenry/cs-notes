---
slug: /software-engineering/system-design-examples
id: system-design-examples
title: System Design Examples
description: System Design Examples
---

**Main Source :**

- **[How zoom works - architecture explained](https://youtu.be/CgriozF_U20?si=31OZtSTKSTXm6EcO)**
- I made the design myself, of course with some help from chatbot and the reference.

### Meeting Platform

A video conferencing and collaboration platform similar to application like Google Meet or Zoom.

#### Requirements

Functional :

- Users register/login through the client.
- Users configure settings from the client, such as their profile photo and background.
- Users use the app meeting client which will connect them to the meeting. Meeting room is based on ID and passcode.
- In the meeting, they will see other participants video and audio.
- Participant broadcast their video/audio and all the other participant should be able to see it in real time.
- Participant can send chat, reaction, share screen, etc.
- The meeting will end whenever a select participant, acting as host end the meeting. Unless if individual participant chooses to leave themselves, then the client will disconnect them.

Technical :

- Meeting client act as the codecs for video/audio streamed by participant. The codec can be [AVC](/digital-media-processing/mp4#mp4-compression-h264) or SVC.
- When a meeting is started, a logical meeting room is created on the meeting server which the participant can connect to.
- Video are sent to server that communicates and synchronizes with each other. The server act as central hub for gathering and combining participant video, which is then sent back to each participant.
- The server will have a connection to a cloud server (e.g., AWS) that stores data, such as user profiles, user settings, chat logs, and meeting recording.
- If the participant share their screen, the video stream will be their window instead of the webcam. This mean the client will also handle the recording.
- Simple data such as chat or reaction can be sent to the server using standard protocol such as [HTTPS](/computer-networking/http-https). The client will also keep track of these.
- Video stream is sent using [RTP](/computer-networking/rtp), specifically the secure RTP.
- Prioritize availability over consistency in [CAP theorem](/software-engineering/system-design#cap-theorem), so it should be an AP system. The idea is, user shouldn't be interrupted whenever a partition occurs, the server can keep their data temporarily and synchronize after the partition is resolved.
- Scalable horizontally, because meetings are typically participated by people around the worlds. To suit with business constraints, we can limit the meeting size or duration.

#### High Level Design

![High level design](./high-level.png)

#### Core Design

Use as many libraries as possible to reduce development time and cost.

- **Client** : The client that will either connect to meeting or web server.

  - Basically can use any programming languages, let's say we are using Kotlin Compose Multiplatform.
  - We can use this [JCodec library](https://github.com/jcodec/jcodec) for codec.
  - We can use [libjitsi](https://github.com/jitsi/libjitsi) for media library (RTP protocol implementation).
  - Find a way to set up the streams. We can use [JavaFX media API](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/media/Media.html) to handle the capture of video, audio, and share screen.
  - We can use [Ktor](https://ktor.io/) as HTTP client.
  - User recording can be kept at the client first, and then uploaded to the meeting server after the recording is ended.

- **Meeting Server** : A server dedicated to handle meeting.

  - One choice of backend library is [Ktor](https://ktor.io/).
  - The server listens to participants that broadcast their video, and also shares the data with other meeting server. Received broadcast is gathered and sent to all nearby participants.
  - Receive the recording from client and save other data to the cloud.
  - Could use [message broker](/backend-development/message-broker) technology like RabbitMQ to handle the distribution of messages and events among meeting server instances.

- **Web Server** : We will have another server for serving web-based client. This server will also be used for serving request that aren't meeting related, such as authentication.

  - Provide [REST API](/backend-development/rest-api) services. Similarly, we can use [Ktor](https://ktor.io/) for this. Ktor provide a simple way to create authentication, serialization, and other server stuff.
  - Also, deploy the Compose Multiplatform app for the web.

- **Cloud Server** : Used for database. There are many options, such as Amazon S3.

  - API keys or any configuration to connect to the cloud can be saved on meeting and web server.

#### Scale & Other Measures

horizontal scaling
high availability
load balancing, web server nginx
caching
aws backup
