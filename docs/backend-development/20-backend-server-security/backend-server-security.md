---
slug: /backend-development/backend-server-security
id: backend-server-security
title: Backend & Server Security
description: Backend & Server Security
---

**Main Source :**

- **[Backend Developer Roadmap, Web Security - roadmap.sh](https://roadmap.sh/backend)**
- **[API Security Best Practices - roadmap.sh](https://roadmap.sh/best-practices/api-security)**
- **[CORS in 100 Seconds - Fireship](https://youtu.be/4KHiSt0oLJ0?si=YOAgWDaYEHJRCFoH)**

Security is always a concern everywhere including in the backend, which correspond to the security within server-side components of an application.

### Injection Attack

There are many different kind of attacks, one of the common type of attack is an injection attack. Injection attack is when the attacker insert malicious code or commands into an application's backend system. Example for injection attack are :

- **[SQL Injection](/computer-security/web-security#sql-injection)** : Attacker manipulates user input to execute unauthorized SQL queries, potentially gaining access to or modifying the database.
- **[Cross-site scripting (XSS)](/computer-security/web-security#cross-site-scripting-xss)** : Injecting malicious scripts into web pages viewed by users in some input field, might steal user's sensitive information.
- **[Cross-site request forgery](/computer-security/web-security#cross-site-request-forgery)** : Trick a user into performing an action on a website without their knowledge or consent.
- **[DDoS attack](/computer-security/ddos-attack)** : Flooding a backend server with by overwhelming it with a flood of traffic, making it unable to process users request.

### API Security

APIs is very important in software development to enable communication and data exchange between various systems, applications, or services. APIs often expose valueable data, and they are heavily relied by the application, attacking them might be a good starting point.

- **API Bruteforcing** : Attacker attempts all possible combinations of authentication credentials to gain unauthorized access to an API. This attack is often used to bypass weak or improperly implemented authentication mechanisms.
- **[Cookie Hijacking](/computer-security/web-security#cookie-hijacking)** : When someone that uses an API has been successfully authenticated using token or session, some attackers may try to steal them and use it to gain unauthorized access.
- **Excessive Request** : This is related to DDoS attack, when a backend service receives flood of request from an attacker within a short period. It will consume server's resources such as CPU, memory, network and the server may experience performance degradation, unresponsiveness, or even the server might down.

### Security Mitigation

Some strategy used to protect backend system :

- **Rate Limiting** : A technique which will limit API request per time interval, this can help prevent DDoS attack.
- **Sanitizing Input** : Make sure to always validate the input field in your application, make sure it doesn't contains exploitable character to be safe from injection attack like XSS or SQL injection.
- **Data Encryption** : Encrypt sensitive data stored in database, communication may also use [secure protocol](/computer-networking/network-encryption) such as [HTTPS](/computer-networking/http-https#https).
- **Content Security Policy (CSP)** : A security mechanism implemented by web browsers to mitigate the risk of certain types of web-based attacks. CSP works by specifying a whitelist of trusted sources for various types of content, such as scripts, stylesheets, images, fonts, and frames. For example :

  - `default-src` Specifies the default source for all types of content if a specific directive is not specified.
  - `script-src` : Specifies the allowed sources for JavaScript code.
  - `style-src` : Specifies the allowed sources for CSS stylesheets.
  - `img-src` : Specifies the allowed sources for images.
  - `font-src` : Specifies the allowed sources for fonts.

### CORS

Web browser enforce the Same-Origin Policy, which restricts web pages from making requests to resources on different domains. For example, we have a website at `https://www.example1.com` and another one at `https://www.example2.com`. When our application at `https://www.example1.com` has a script to access data or make request to the `https://www.example2.com`, this is called **cross-origin request** and it is not allowed according to the Same-Origin Policy.

**Cross-Origin Resource Sharing (CORS)** is a security mechanism that relaxes the Same-Origin Policy allowing for cross-origin request. CORS provides a way for servers to explicitly allow cross-origin requests from specific domains (can be our own server that is located in different domain) while still protecting against unauthorized access. It works by adding exception for a specific request :

1. **Client-Side Request** : When the browser makes a cross-origin request, the browser sends an HTTP request with an "Origin" header that indicates the page's origin (e.g. `https://example.com`).

2. **Server-Side Response** : The server that receives the request can respond with specific HTTP headers to indicate whether the requested resource should be accessible to the client-side script. These headers include :

   - **Access-Control-Allow-Origin** : Specifies the domains that are allowed to make cross-origin requests. For example, "Access-Control-Allow-Origin: https://example.com" would allow requests from "https://example.com" but reject requests from other origins. The server can also use wildcard values with \* to allow requests from any origin.

   - **Access-Control-Allow-Methods** : Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) allowed for cross-origin requests.

   - **Access-Control-Allow-Headers** : Specifies the headers that are allowed to be included in the cross-origin request. Header can contain content-type, which specify the format data in request or response body, or authentication/authorization credentials.

   - **Access-Control-Allow-Credentials** : Indicates whether the request can include credentials such as cookies or HTTP authentication information.

3. **Preflight Request** : The browser may send a preflight request also known as HTTP OPTIONS request. An HTTP OPTIONS request is used to retrieve information about the communication options available in a server. For example this is an example of an HTTP OPTIONS request and response.

```http
OPTIONS /api/resource HTTP/1.1
Host: example.com
Origin: https://client.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, Authorization
```

```http
HTTP/1.1 200 OK
Allow: GET, POST, HEAD, OPTIONS
Access-Control-Allow-Origin: https://client.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```
