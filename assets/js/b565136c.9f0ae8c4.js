"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[186],{62459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(85893),r=n(11151);const i={slug:"/backend-system/rest-api",id:"rest-api",title:"REST API",description:"REST API"},o=void 0,c={id:"backend-system/rest-api/rest-api",title:"REST API",description:"REST API",source:"@site/docs/backend-system/03-rest-api/rest-api.md",sourceDirName:"backend-system/03-rest-api",slug:"/backend-system/rest-api",permalink:"/cs-notes/backend-system/rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-system/03-rest-api/rest-api.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723455088e3,frontMatter:{slug:"/backend-system/rest-api",id:"rest-api",title:"REST API",description:"REST API"},sidebar:"sidebar",previous:{title:"APIs & Server Logic",permalink:"/cs-notes/backend-system/apis-server-logic"},next:{title:"SOAP",permalink:"/cs-notes/backend-system/soap"}},a={},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Main Source:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://aws.amazon.com/what-is/restful-api/",children:"What Is A RESTful API? \u2014 AWS"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://youtu.be/-MTSQjw5DrM?si=mGOKWYNFT7H6yl_m",children:"RESTful APIs in 100 Seconds \u2014 Fireship"})})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Representational State Transfer API (REST API)"})," is an architectural style for designing an API.\nWeb services that implement REST architecture are called RESTful web services."]}),"\n",(0,s.jsxs)(t.p,{children:["REST works by leveraging or extending HTTP concepts. The underlying architecture of REST API follows the ",(0,s.jsx)(t.a,{href:"/computer-networking/http-https#http",children:"HTTP protocol"})," to perform specific types of operation such as accessing resource."]}),"\n",(0,s.jsxs)(t.p,{children:["Every resource in the server are uniquely identified by Uniform Resource Identifiers (URI), basically a unique address. An example of URI: ",(0,s.jsx)(t.code,{children:"file:///C:/Users/username/Documents/file.txt"}),", ",(0,s.jsx)(t.code,{children:"https://www.example.com/index.html"}),". In the case of REST API, the URI used typically uses the concept of ",(0,s.jsx)(t.a,{href:"/backend-system/apis-server-logic#routing--endpoint",children:"routing and endpoint"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"REST includes another HTTP concepts like:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/computer-networking/http-https#http-request--method",children:"HTTP methods"})}),": Such as GET, POST, DELETE, PUT followed with the endpoint (e.g. GET /books)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/computer-networking/http-https#http-format--syntax",children:"HTTP format and syntax"})}),": Including header, request line, request body, response format, and version."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/computer-networking/http-https#http-response",children:"HTTP Responses"})}),": Codes to indicate the result of the response, for example, 200 OK signifies a successful response, 404 Not Found denotes that the requested resource does not exist."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example of REST API GET request:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"GET /books HTTP/1.1\nHost: api.example.com\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36\nAccept: application/json\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, a GET request is made to the ",(0,s.jsx)(t.code,{children:"/books"})," endpoint of the ",(0,s.jsx)(t.code,{children:"api.example.com"})," server. User agent contains information about the client. The client expects a response in JSON format."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n[\n  {\n    "id": 1,\n    "title": "Book 1",\n    "author": "Author 1"\n  },\n  {\n    "id": 2,\n    "title": "Book 2",\n    "author": "Author 2"\n  }\n]\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the response, the server returns a status line with the status code (200 OK) along with the JSON data. The response body is a JSON array that includes information about two books, each with an ID, title, and author."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);