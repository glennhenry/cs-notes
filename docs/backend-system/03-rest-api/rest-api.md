---
slug: /backend-system/rest-api
id: rest-api
title: REST API
description: REST API
---

**Main Source:**

- **[What Is A RESTful API? — AWS](https://aws.amazon.com/what-is/restful-api/)**
- **[RESTful APIs in 100 Seconds — Fireship](https://youtu.be/-MTSQjw5DrM?si=mGOKWYNFT7H6yl_m)**

**Representational State Transfer API (REST API)** is an architectural style for designing an API.
Web services that implement REST architecture are called RESTful web services.

REST works by leveraging or extending HTTP concepts. The underlying architecture of REST API follows the [HTTP protocol](/computer-networking/http-https#http) to perform specific types of operation such as accessing resource.

Every resource in the server are uniquely identified by Uniform Resource Identifiers (URI), basically a unique address. An example of URI: `file:///C:/Users/username/Documents/file.txt`, `https://www.example.com/index.html`. In the case of REST API, the URI used typically uses the concept of [routing and endpoint](/backend-system/apis-server-logic#routing--endpoint).

REST includes another HTTP concepts like:

- **[HTTP methods](/computer-networking/http-https#http-request--method)**: Such as GET, POST, DELETE, PUT followed with the endpoint (e.g. GET /books).
- **[HTTP format and syntax](/computer-networking/http-https#http-format--syntax)**: Including header, request line, request body, response format, and version.
- **[HTTP Responses](/computer-networking/http-https#http-response)**: Codes to indicate the result of the response, for example, 200 OK signifies a successful response, 404 Not Found denotes that the requested resource does not exist.

Example of REST API GET request:

```
GET /books HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
Accept: application/json
```

In this example, a GET request is made to the `/books` endpoint of the `api.example.com` server. User agent contains information about the client. The client expects a response in JSON format.

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": 1,
    "title": "Book 1",
    "author": "Author 1"
  },
  {
    "id": 2,
    "title": "Book 2",
    "author": "Author 2"
  }
]
```

In the response, the server returns a status line with the status code (200 OK) along with the JSON data. The response body is a JSON array that includes information about two books, each with an ID, title, and author.