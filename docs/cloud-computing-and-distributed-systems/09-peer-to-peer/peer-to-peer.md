---
slug: /cloud-computing-and-distributed-systems/peer-to-peer
id: peer-to-peer
title: Peer-to-Peer
description: Peer-to-Peer
---

**Main Source :**

- **[Peer-to-peer - Wikipedia](https://en.wikipedia.org/wiki/Peer-to-peer)**

**Peer-to-Peer (P2P)** is a decentralized architecture which participants, called **peers**, interact and collaborate with each other directly, without the need for a central server or authority. Each peer can act both as a client and a server, they can request resources, or even serving others request.

![Peer-to-Peer architecture compared to client-server](./peer-to-peer.png)  
Source : https://www.researchgate.net/figure/Architecture-of-C-S-and-P2P_fig1_238638509

In contrast to [client-server architecture](/software-engineering/client-server), clients can only request to a single entity in the system.

- **Scalability** : It can be a bottleneck for the server in client-server architecture as the number of clients and the demand for services increase. P2P can more scalable, as the client itself can be the server.
- **Fault Tolerance** : In client-server architecture, if the server goes down or becomes unavailable, clients cannot access the services. P2P architecture is inherently more fault-tolerant, since there can be multiple peers and the failure of one or more peers does not lead to a complete system failure.
- **Flexibility in Resource Location** : In client-server architecture, clients are typically aware of and connected to a specific server. They depend on that server for their requests. In P2P architecture, clients have the flexibility to discover and connect with different peers in the network. They can choose the most appropriate peer based on factors like proximity, availability, or the specific resources or services they require.

:::info
Although client-server architecture can prevent some of these limitations by having multiple servers to handle requests in a balanced manner ([load balancing](/computer-networking/server#server-optimization)) or distribute the server around the world ([CDN](/computer-networking/server#server-optimization)).
:::

### Architecture

The specific architecture of P2P define how peers are connected to each other. The network topology can be structured, unstructured, or hybrid.

- **Structured** : Peers are organized in a specific structured topology, using a [distributed hash table (DHT)](/cloud-computing-and-distributed-systems/distributed-systems-communication#distributed-hash-tables). Unique identifier is associated to each peer and resources or data onto the identifier space. So, when a peer are looking for particular resource, they will connect to specific peer that stores it.

  ![Structured P2P](./structured.png)  
   Source : https://en.wikipedia.org/wiki/Peer-to-peer#/media/File:Structured_(DHT)_peer-to-peer_network_diagram.png

- **Unstructured** : Peers connect to each other in a random or ad-hoc manner, without any specific organization or topology. Peers typically maintain a list of other peers they are aware of, forming a network of connections. This is suitable in the case of all peer own the same resources. If not, the search for resources spread through the network can be expensive, as it requires to find the resource in neighboring peers or by using random walks.

  ![Unstructured P2P](./unstructured.png)  
   Source : https://en.wikipedia.org/wiki/Peer-to-peer#/media/File:Unstructured_peer-to-peer_network_diagram.png

- **Hybrid** : Hybrid P2P networks combine elements of both structured and unstructured topologies to leverage their respective advantages.

### Usage

P2P architectures are used in various applications :

- **File Sharing** : Platforms such as BitTorrent, eMule, and Gnutella utilize P2P architectures to enable users to share files directly with each other, without relying on centralized servers.
- **[Content Delivery](/computer-networking/server#server-optimization)** : P2P architectures are also used in content delivery networks (CDNs) to distribute and deliver content efficiently. P2P CDNs are particularly useful for distributing large media files, software updates, and streaming video content.
- **Communication** : [Real-Time Communication (RTC) protocol](/computer-networking/rtc), such as [WebRTC](/computer-networking/rtc#webrtc) uses P2P architecture under the hood. However, they are not a complete P2P connection, as it relies on servers during the initial connection setup phase.
- **[Blockchain](/computer-security/blockchain)** : Blockchain networks, such as Bitcoin and Ethereum, are built upon P2P architectures. In these decentralized systems, peers (or nodes) maintain a distributed ledger, validate transactions, and reach consensus without relying on a central authority.
