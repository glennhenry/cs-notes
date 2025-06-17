---
title: Cloud Security
slug: cloud-computing-and-distributed-systems/cloud-security
description: Cloud Security
---

**Main Source:**

- **[Cloud computing security — Wikipedia](https://en.wikipedia.org/wiki/Cloud_computing_security)**
- **[Cloud computing, Security and privacy — Wikipedia](https://en.wikipedia.org/wiki/Cloud_computing#Security_and_privacy)**

Despite the cloud provider offering many services that reduce developers concerns, including security, cloud computing can still be vulnerable to security risks and breaches. Cloud providers employ many security mechanisms to prevent it.

### Security Concerns

Overall, the security risks in cloud computing can be categorized based on whether they affect the cloud service provider or the customer.

Some security concerns from the provider:

- **Infrastructure Vulnerabilities**: Cloud service providers are responsible for maintaining the underlying infrastructure, including servers, networks, and storage systems. Vulnerabilities in the provider's infrastructure can expose customer data to risks such as unauthorized access, data breaches, or service disruptions. They could implement access control to prevent [DDoS](/cs-notes/computer-security/network-security#ddos-attack), implement [network firewall](/cs-notes/computer-security/network-security#firewall) to filter traffic, or using a [VPN](/cs-notes/computer-networking/vpn) to establish secure and encrypted connections between customer environments and the cloud infrastructure.
- **Insider Threats**: Employees or insiders within the cloud service provider may have unauthorized access to customer data. Insider threats can include malicious activities, data theft, or unintentional actions that lead to data exposure.
- **Redundancy**: If a significant data is stored in the cloud, it is a significant concern for both the cloud provider and the customers. Cloud providers could replicate user's data by having multiple copies of customer data stored in different locations. This redundancy helps protect against data loss due to data leakage, data loss, or service disruptions due to attacks.

Some security concerns from the customer:

- **Securing Application**: Customer are responsible for securing their applications deployed in the cloud. This includes implementing secure coding practices to prevent attacks such as [SQL injection](/cs-notes/computer-security/web-security#sql-injection), [cross-site scripting (XSS)](/cs-notes/computer-security/web-security#cross-site-scripting-xss), etc.
- **Data Encryption**: Customer data should be encrypted both in transit and at rest.
- **Authentication**: Implement a strong authentication system, such as enforcing strong passwords, adding a [multifactor authentication](/cs-notes/backend-system/authentication#authentication-factor-number), and using role-based access control (RBAC), in which users are given specific role that makes them eligible to access certain resources.

Cloud computing use [virtualization](/cloud-computing-and-distributed-systems/virtualization) technology heavily. It provides a good isolation even when multiple applications are being run on single host. This isolation helps prevent interference between applications, thereby reducing the potential for the malicious activities of one app to affect the system, which could, in turn, impact others.

Therefore, it's important for the technology to be implemented correctly. The one that manages virtual machines, hypervisor, must be regularly updated to protect against vulnerabilities and potential attacks.

:::tip
Cloud security is just a subdomain of a larger umbrella, see also [computer security](/cs-notes/computer-security).
:::
