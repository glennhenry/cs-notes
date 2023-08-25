---
slug: /computer-networking/router
id: router
title: Router
description: Router
---

**Main Source :**

- **[Wikipedia Router (computing)](<https://en.wikipedia.org/wiki/Router_(computing)>)**
- **[Hub, Switch, & Router Explained | PowerCert](https://youtu.be/1z0ULvg_pW8?si=6F-oF8maBovN6VnN)**

**Router** is a networking device that connects multiple computer networks together, and directs network traffic between them. It uses uses [IP addresses](/computer-networking/ip-address) to make decisions on how to forward data packets across networks.

Router is a type of [gateway](/computer-networking/gateway), which is an entry point or exit point between two different networks. It acts as a bridge, translator, or the central point of connection, it enables and manage the flow of network traffic within a computer network.

As explained in [routing](/computer-networking/routing), routers keep track information about network addresses in database called **routing tables**, it helps to determine where to send packets. They examine the destination IP address of incoming packets and consult their routing tables to determine the appropriate next-hop router or network interface to forward the packets.

Routers are commonly used in homes, offices, and other environments to enable communication between devices on different networks. Routers can be wired or wireless, depending on the type of network they are connecting. Wired routers typically have [Ethernet](/computer-networking/ethernet) ports to connect devices via Ethernet cables, while wireless routers have built-in [Wi-Fi](/computer-networking/wi-fi) capabilities to enable wireless connectivity for devices such as laptops, smartphones, and tablets.

In addition to forwarding data packets, routers can perform other functions such as [network address translation (NAT)](/computer-networking/nat), which allows multiple devices on a local network to share a single [public IP address](/computer-networking/ip-address#public-ip-address) by using [private IP address](/computer-networking/ip-address#private-ip-address), and [firewalling](/computer-networking/firewall), which provides security by filtering and controlling network traffic.

![Example of router connecting network together](./router-example.png)  
Source : https://www.mytechlogy.com/IT-blogs/22654/essential-settings-for-home-network-routers/

:::tip
Find out more about how routers forward or send data to another routers [here](/computer-networking/routing)
:::

### Hub & Switch vs Router

[Hub](/computer-networking/hubs) and [switch](/computer-networking/switch) are networking device used for local or private network, it can't sends data to external network. This is because hub and switch doesn't have public IP address, as you need it to communicate with external network like internet.

A network may have hub or switch to connects the local device and have a router to externally connect with other network. Data transmission from the local network won't be forwarded to external network by router. Only if the local device wants to send it outside using the destination IP address.

Hubs and switches can be thought as the device you use to make network, while routers are used to connect them.

![Several local network connected with switch and externally connected with router](./hub-switch-vs-router.png)  
Source : https://youtu.be/1z0ULvg_pW8?si=GkDgO98d3d0uKt43&t=401
