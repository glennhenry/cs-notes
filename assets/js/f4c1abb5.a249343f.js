"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[570],{87651:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(85893),r=s(11151);const i={slug:"/cloud-computing-and-distributed-systems/client-server",id:"client-server",title:"Client-Server",description:"Client-Server"},o=void 0,a={id:"cloud-computing-and-distributed-systems/client-server/client-server",title:"Client-Server",description:"Client-Server",source:"@site/docs/cloud-computing-and-distributed-systems/06-client-server/client-server.md",sourceDirName:"cloud-computing-and-distributed-systems/06-client-server",slug:"/cloud-computing-and-distributed-systems/client-server",permalink:"/cs-notes/cloud-computing-and-distributed-systems/client-server",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/cloud-computing-and-distributed-systems/06-client-server/client-server.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1709712749,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{slug:"/cloud-computing-and-distributed-systems/client-server",id:"client-server",title:"Client-Server",description:"Client-Server"},sidebar:"sidebar",previous:{title:"Distributed Database",permalink:"/cs-notes/cloud-computing-and-distributed-systems/distributed-database"},next:{title:"Event-Driven",permalink:"/cs-notes/cloud-computing-and-distributed-systems/event-driven"}},c={},l=[{value:"Communication",id:"communication",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model",children:"Client\u2013server model - Wikipedia"})})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Client-Server model"})," is a type of architecture, typically used in distributed computing, where there exist two entity, namely ",(0,n.jsx)(t.strong,{children:"client"})," and ",(0,n.jsx)(t.strong,{children:"server"}),". A client can request a service or resource, and the server will be the one that response to the request, such as processing or computing the request, or retrieving the requested data."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Client requests a webpage",src:s(28776).Z+"",width:"513",height:"155"}),(0,n.jsx)(t.br,{}),"\n","Source : ",(0,n.jsx)(t.a,{href:"https://www.scaler.com/topics/nodejs/client-server-architecture/",children:"https://www.scaler.com/topics/nodejs/client-server-architecture/"})]}),"\n",(0,n.jsxs)(t.p,{children:["One of the biggest application that uses client-server model is the ",(0,n.jsx)(t.strong,{children:"World Wide Web (WWW or the web)"}),". For example, when we open a website from our browser, we are essentially sending a request to a server. The browser act as the client that requests to that server. In the case of opening a website, we are requesting webpage resources (",(0,n.jsx)(t.a,{href:"/frontend-web-development/html-css-javascript",children:"HTML, CSS, JavaScript code"}),"), which the browser will use to show us the website. The server is run by the organization or individual responsible for hosting the website or providing the service."]}),"\n",(0,n.jsx)(t.h3,{id:"communication",children:"Communication"}),"\n",(0,n.jsx)(t.p,{children:"The interaction between client and server is done in a specific protocol. They are specific rules and format that controls how the two should exchange data. Typically, we are only concerned with the application-level protocol."}),"\n",(0,n.jsx)(t.p,{children:"The examples are :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/computer-networking/http-https",children:"HTTP/HTTPS"})})," : HTTP is a protocol used for communication between web browsers (clients) and web servers. HTTPS is the secure version of HTTP that adds encryption and authentication using ",(0,n.jsx)(t.a,{href:"/computer-networking/network-encryption#ssltls",children:"SSL/TLS protocols"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/computer-networking/ftp",children:"FTP"})})," : FTP is a protocol used for transferring files between a client and a server. The protocol will specify commands, which are used for file operations such as uploading, downloading, renaming, and deleting files on a remote server."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/computer-networking/email-protocol#smtp",children:"SMTP"})})," : SMTP is a protocol for sending email messages between clients and servers. It provides a set of commands and responses for the transfer of email across networks."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For example, the HTTP protocol specify that the client (web browser) must send a request consisting :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Request Line"})," : Specify the HTTP method, which specifies our desired action of requesting, target URL or resource, and HTTP version."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Headers"})," : Provide additional information about the request, such as content type, authentication credentials, or cookies."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Body (optional)"})," : If we are sending data to the server (e.g., submitting a form), they are sent along with the request."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The server that responses to the request must also follow the format rules :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Status Line"})," : Includes the HTTP version, a three-digit status code indicating the result of the request (e.g., 200 for OK, 404 for Not Found), and a brief status message."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Headers"})," : Additional information about the response, such as content type (specify what type of data is returned), caching directives, or authentication challenges."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Body (optional)"})," : Contains the requested resource or additional data sent as part of the response."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Here are a simple HTTP request and its response :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"GET /example-page HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1234.56 Safari/537.36\nAccept: text/html,application/xhtml+xml\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This request specifies that we are requesting the ",(0,n.jsx)(t.code,{children:"www.example.com"})," webpage. The ",(0,n.jsx)(t.code,{children:"User-Agent"})," is a header that provides information about the client application making the request (in this case, a web browser)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"HTTP/1.1 200 OK\nDate: Fri, 19 Feb 2024 12:00:00 GMT\nServer: Apache/2.4.29 (Ubuntu)\nContent-Type: text/html; charset=utf-8\nContent-Length: 1234\n\n<!DOCTYPE html>\n<html>\n<head>\n   <title>Example Page</title>\n</head>\n<body>\n   <h1>Welcome to the Example Page</h1>\n   <p>This is a sample page for demonstration purposes.</p>\n</body>\n</html>\n"})}),"\n",(0,n.jsx)(t.p,{children:"The response is an HTML page, which the browser will render and show it to us."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28776:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/client-server-e01130b116adf71cd965e3adb15c75fb.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);