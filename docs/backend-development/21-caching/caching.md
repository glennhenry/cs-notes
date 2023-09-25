---
slug: /backend-development/caching
id: caching
title: Caching
description: Caching
---

**Main Source :**

- **[Caching Overview - AWS](https://aws.amazon.com/caching/)**
- **[Redis in 100 Seconds - Fireship](https://youtu.be/G1rOthIU-uo?si=ED-VbtEqY25-TZkW)**
- **[Cache Strategies by Moshe Binieli - Medium Blog](https://medium.com/@mmoshikoo/cache-strategies-996e91c80303)**
- **[Cache Replacement Algorithms: How To Efficiently Manage The Cache Storage by Amir Keshavarz - DEV.to](https://dev.to/satrobit/cache-replacement-algorithms-how-to-efficiently-manage-the-cache-storage-2ne1)**

**Caching** is the process of storing frequently accessed data or computation results in temporary storage, typically in a high-speed memory, to improve the performance and efficiency of an application or system. In the context of backend, caching helps server to response to common request by just retrieving data from previous the request.

![Caching](./caching.png)  
Source : https://pressidium.com/blog/browser-cache-work/

### Type of Caching

- **Client-side** : The caching technique is implemented in the client side, they are typically handled by the web browsers. This includes caching static resources such as HTML pages, images, files that are loaded when the user visits a website. Web browser also include local storage API, which can be used to store frequently accessed data such as user credentials.

- **Server-side** : Caching where the server or the developer is the one who handles it, they are typically implemented on the server to store and serve frequently accessed data or resources.

  - **CDN Caching** : CDN is a geographically distributed network of servers that are strategically placed in different locations worldwide. The primary purpose of a CDN is to improve the delivery speed and performance of web content to end-users  
    For example, a person connecting from Asia is likely to have a better connection to a server located in Asia compared to a server located in a distant region, such as North America or Europe.  
    We may also cache the resource in the CDN itself, which is what CDN caching is, they are considered **distributed caching**, which is the practice of distributing cache around multiple servers to allows efficient data access across different machines or locations.

  - **Database Query** : When a common type of query is executed, the result is stored in a cache. If the same query is requested again, the server can return the cached result instead of executing the query again.

  - **Redis** : **REmote DIctionary Server (Redis)** is in-memory data structure store that implements hash-map like data structure where data is stored as key-value pairs. The keys are unique identifiers, and the corresponding values which is where we store our actual data, it can be of different types, such as strings, lists, sets, hashes, or sorted sets. By using key-value pair, it allows for efficient constant O(1) for read and write speed.

    ![Server side caching](./server-side-caching.png)
    Source : https://www.wallarm.com/what/difference-between-a-cdn-and-web-accelerator, https://blog.hackajob.com/how-to-implement-redis-in-go/

### Caching Strategy

- **Cache-Aside** : The application is responsible for managing the cache. When data is requested, the application first checks the cache, if the data is found, it is retrieved from the cache and returned to the requester. If the data is not in the cache (called **cache miss**), the application retrieves it from the data source, stores it in the cache for future use, and then returns it to the requester.

- **Write-Through** : This is a cache writing strategy where, everytime data is written or updated, it is written to both cache and data source simultaneously. Write-through caching ensures data consistency but may have higher write latency due to the additional write operation to the data source.

- **Write-Back** : Write-back caching involves writing or updating data in the cache first and deferring the write to the underlying data source. This will reduce latency compared to write-through strategy, however, this approachs introduce the risk of data loss.

- **Read-Through** : When data is requested and not found in the cache (a cache miss), the cache automatically retrieves the data from the underlying data source. The retrieved data is then stored in the cache and returned to the requester.

![Cache strategies](./cache-strategy.png)  
Source : https://medium.com/@mmoshikoo/cache-strategies-996e91c80303

### Cache Invalidation

**Cache Invalidation** is the process of removing or marking data as invalid in a cache when the corresponding data in the underlying data source is updated or deleted. It ensures that the cached data remains consistent with the source of truth.

The methods are :

- **Explicit Invalidation** : The application explicitly triggers the invalidation of specific data in the cache when changes are made to the corresponding data in the data source. This can involve calling cache-specific methods or APIs to remove or update the affected data in the cache.

- **Time-Based Invalidation** : Associates a **time-to-live (TTL)** value with each cached item. When the TTL expires, the cached item is considered invalid and is evicted from the cache.

- **Event-Based Invalidation** : Cache is invalidated by observing events or triggers that signify changes in the data source. These events can be database triggers or [message queue notifications](/backend-development/message-broker).

### Cache Replacement

**Cache Replacement**, also known as **cache eviction**, is the process of selecting which data should be evicted from a cache when the cache reaches its capacity limit and a new item needs to be stored.

- **Least Recently Used (LRU)** : This policy assumes that recently accessed data is more likely to be accessed again in the near future. The data item that has not been accessed for the longest period is evicted.

- **Least Frequently Used (LFU)** : This policy assumes that frequently accessed items are more valuable and should be retained in the cache. The data item that has been accessed the least number of times will be evicted.

- **First-In-First-Out (FIFO)** : The data item that was inserted into the cache first is evicted when the cache is full. This follows a queue-like behavior, where the oldest data is removed.

- **Random Replacement** : This will select a random data item from the cache for eviction. It does not take into account the recency or frequency of access.

  ![LRU cache](./lru-cache.png)  
  Source : https://www.interviewcake.com/concept/java/lru-cache
