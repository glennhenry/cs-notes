---
slug: /backend-development/apis-server-logic
id: apis-server-logic
title: APIs & Server Logic
description: APIs & Server Logic
---

**Main Source :**

- **[What Is Middleware? - AWS](https://aws.amazon.com/what-is/middleware/)**


### Middleware

In backend, **Middleware** is a software that bridges between application and server. It is an intermediary that takes incoming requests from application and pass it into server. Middleware is not restricted to a single component, multiple middleware can be connected with other middleware or with other application logic before it is connected into the server. 

The purpose of middleware is to pre-process incoming request before passing it into server to make the server can focus only on the actual logic. For example, middleware can check if user has logged in or not, checking for cookies (file that stores basic user information), add additional data or configuration, and handling request error.

![Middleware that acts as a bridge between application and server](./middleware.png)  
Source : https://medium.com/@seymarslan/what-ismiddleware-fdb2ad163388

### Routing

### Server Logic