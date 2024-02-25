---
slug: /software-engineering/system-design
id: system-design
title: System Design
description: System Design
---

**Main Source :**

- **[system-design-primer by donnemartin - GitHub](https://github.com/donnemartin/system-design-primer)**

**System Design** is the process of defining the architecture, components, modules, interfaces, and data for a software system. Many factors including criteria of requirements are considered when designing the architecture.

- **Performance** : The speed, responsiveness, and efficiency of a software system. The goal is to optimize the system to deliver fast response times, minimize resource utilization, and handle high workloads.
- **Scalability** : The ability of a system to handle increasing workloads and growing user demands.
- **Availability & Reliability** : Availability is the ability of a system to remain operational and accessible to users (e.g., the downtime during update). Reliability refers to the system's ability to consistently perform as expected without failures (e.g., no data loss during update).
- **Consistency** : Relates to maintaining data integrity and ensuring that the system behaves predictably under concurrent operations.
- **Infrastructure** : The design or choice of the underlying hardware and software environment required to support the software system. This includes selecting appropriate servers, networking, storage solutions, and cloud services.
- **Security** : Mechanisms implemented to protect the system, data, and users from unauthorized access, data breaches, and malicious attacks.

### Performance

There are several performance measures :

- **Latency** : Delay in transmission of request or response.
- **Processing time** : The time it takes for the request to be processed.
- **Response time** : The time it takes for the system to process a request from client and response.
- **Throughput** : Number of requests handled within a unit of time.

To put it simply, `response time = latency + processing time + latency`. The goal is to get **low latency**, **low processing time**, **low response time**, and **high throughput**.

Technique to improve performance includes :

- Implement [caching mechanism](/backend-development/caching).
- [Optimize database](/database-system/database-optimization), such as using [database index](/database-system/index).
- [Load balancing](/backend-development/backend-optimization#server-optimization), incorporate multiple servers or instance to distribute the workload.
- Efficient algorithms and data structures.
- Asynchronous systems, use algorithm that are capable of doing concurrent operations.

### Scalability

A system can either be scaled horizontally or vertically.

**Horizontal scale** includes adding more instance, such as adding more server to handle the request. **Vertical scale** increase the individual resources of existing instances, such as upgrading the server CPU, memory, or disk.

Technique to improve scalability :

- Use distributed architecture like [SOA](/backend-development/soa) or [microservice](/backend-development/microservice), allowing the system to be decomposed into smaller and independent server that can be developed, deployed, and scaled individually. For example, the authentication system may struggle, but not the file uploader system.

- Horizontal scaling (adding more machines/nodes)
- Vertical scaling (upgrading hardware/resources)
- Distributed systems
- Load balancing techniques
- Sharding and partitioning
- Replication and data consistency

### Availability & Reliability

- Redundancy and fault tolerance
- High availability architectures
- Failover and disaster recovery mechanisms
- Monitoring and error handling

### Consistency

- ACID properties
- CAP theorem
- Data replication strategies
- Eventual consistency
- Distributed caching
- Database technologies (relational, NoSQL, NewSQL)
- Data modeling and schema design

#### CAP Theorem

### Infrastructure

- DNS (Domain Name System)
- CDN (Content Delivery Network)
- Load balancers and reverse proxies
- Microservices architecture
- Service discovery and service registry
- Message queues and event-driven systems
- Web servers (Apache, Nginx)

### Security

- Authentication and authorization mechanisms
- Encryption and data protection
- Secure communication (SSL/TLS)
- Security best practices and considerations
- Denial-of-Service (DoS) prevention
- Vulnerability scanning and penetration testing
