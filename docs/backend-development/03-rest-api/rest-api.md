---
slug: /backend-development/rest-api
id: rest-api
title: REST API
description: REST API
---

**Main Source :**

**Representational State Transfer API (REST API)** is an architectural style for designing an API.
Web services that implement REST architecture are called RESTful web services.

### How REST Works

The underlying architecture of REST API still uses [HTTP methods](/computer-networking/http-https#http-request--method) to perform specific types of operation.

- Stateless: Each request from a client to a server contains all the information needed to understand and process that request. The server does not maintain any client state between requests.

- Resources: REST APIs are centered around resources, which are the key entities or objects that the API exposes. Resources can be accessed and manipulated using unique resource identifiers (URIs).

- HTTP Verbs/Methods: REST APIs use HTTP methods to perform actions on resources. The common methods include GET (retrieve a resource), POST (create a new resource), PUT (update an existing resource), and DELETE (remove a resource).

- Uniform Interface: REST APIs have a uniform interface that follows a consistent set of conventions. This includes using standard HTTP status codes to indicate the result of a request, utilizing hypermedia links for resource navigation, and employing a clear and consistent data format such as JSON or XML for representing resources.

- State Transfer: REST APIs transfer the representation of a resource's state between the client and server. This can be in various formats such as JSON (JavaScript Object Notation) or XML (eXtensible Markup Language).

- Authentication and Security: REST APIs often use authentication mechanisms such as API keys, tokens, or OAuth to ensure secure access and protect resources from unauthorized use.
