---
title: SOAP
slug: backend-system/soap
description: SOAP
---

**Main Source:**

- **[SOAP — Wikipedia](https://en.wikipedia.org/wiki/SOAP)**

**Simple Object Access Protocol (SOAP)** is a protocol to exchange information or message using [XML](/cs-notes/digital-media-processing/xml). It follows XML standard such as schema to define message in a structured way. Specifically, XML uses the WSDL (Web Services Description Language), a standard used for XML-based services on the web.

It still uses [HTTP](/cs-notes/computer-networking/http-https#http) as the transport protocol over the network. When SOAP messages are transmitted over HTTP, they are typically encapsulated within the payload of an HTTP request (POST) or response. The HTTP headers and body are used to transport the SOAP message between the client and the server.

Here is an example of SOAP request encapsulated in HTTP POST method:

```xml
POST /exampleWebService HTTP/1.1
Host: www.example.com
Content-Type: application/soap+xml; charset=utf-8
Content-Length: [length]

<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/">
  <soap:Header>
    <!-- Optional header -->
  </soap:Header>
  <soap:Body>
    <getWeather xmlns="http://example.com/weather/">
      <city>New York</city>
    </getWeather>
  </soap:Body>
</soap:Envelope>
```

Request is sent to the `/exampleWebService` endpoint on the `www.example.com` server encapsulated in `POST` method. The content type specified is in SOAP XML format.

The `soap:Envelope` is the root element of a SOAP message, it defines the namespace with the soap envelope URI. The header contains optional information. The body specifies the actual SOAP message. The SOAP message here is using the `<getWeather>` operation with the New York City as the parameter.

:::info
SOAP is not very used in modern days, using XML may add complexity for a relatively simple use case. [REST API](/cs-notes/backend-system/rest-api) is more used due to its better performance, XML parsing can be slower than [JSON](/cs-notes/digital-media-processing/json) data format as JSON has a simpler structure and syntax.
:::
