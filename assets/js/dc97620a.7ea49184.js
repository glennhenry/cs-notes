"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={slug:"/backend-development/backend-server-security",id:"backend-server-security",title:"Backend & Server Security",description:"Backend & Server Security"},s=void 0,o={unversionedId:"backend-development/backend-server-security/backend-server-security",id:"backend-development/backend-server-security/backend-server-security",title:"Backend & Server Security",description:"Backend & Server Security",source:"@site/docs/backend-development/20-backend-server-security/backend-server-security.md",sourceDirName:"backend-development/20-backend-server-security",slug:"/backend-development/backend-server-security",permalink:"/cs-notes/backend-development/backend-server-security",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-development/20-backend-server-security/backend-server-security.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1695657784,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{slug:"/backend-development/backend-server-security",id:"backend-server-security",title:"Backend & Server Security",description:"Backend & Server Security"},sidebar:"sidebar",previous:{title:"Docker & Kubernetes",permalink:"/cs-notes/backend-development/docker-kubernetes"},next:{title:"Caching",permalink:"/cs-notes/backend-development/caching"}},c={},l=[{value:"Injection Attack",id:"injection-attack",level:3},{value:"API Security",id:"api-security",level:3},{value:"Security Mitigation",id:"security-mitigation",level:3},{value:"CORS",id:"cors",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main Source :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://roadmap.sh/backend"},"Backend Developer Roadmap, Web Security - roadmap.sh"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://roadmap.sh/best-practices/api-security"},"API Security Best Practices - roadmap.sh"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://youtu.be/4KHiSt0oLJ0?si=YOAgWDaYEHJRCFoH"},"CORS in 100 Seconds - Fireship")))),(0,n.kt)("p",null,"Security is always a concern everywhere including in the backend, which correspond to the security within server-side components of an application."),(0,n.kt)("h3",{id:"injection-attack"},"Injection Attack"),(0,n.kt)("p",null,"There are many different kind of attacks, one of the common type of attack is an injection attack. Injection attack is when the attacker insert malicious code or commands into an application's backend system. Example for injection attack are :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/computer-security/web-security#sql-injection"},"SQL Injection"))," : Attacker manipulates user input to execute unauthorized SQL queries, potentially gaining access to or modifying the database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/computer-security/web-security#cross-site-scripting-xss"},"Cross-site scripting (XSS)"))," : Injecting malicious scripts into web pages viewed by users in some input field, might steal user's sensitive information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/computer-security/web-security#cross-site-request-forgery"},"Cross-site request forgery"))," : Trick a user into performing an action on a website without their knowledge or consent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/computer-security/ddos-attack"},"DDoS attack"))," : Flooding a backend server with by overwhelming it with a flood of traffic, making it unable to process users request.")),(0,n.kt)("h3",{id:"api-security"},"API Security"),(0,n.kt)("p",null,"APIs is very important in software development to enable communication and data exchange between various systems, applications, or services. APIs often expose valueable data, and they are heavily relied by the application, attacking them might be a good starting point."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API Bruteforcing")," : Attacker attempts all possible combinations of authentication credentials to gain unauthorized access to an API. This attack is often used to bypass weak or improperly implemented authentication mechanisms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/computer-security/web-security#cookie-hijacking"},"Cookie Hijacking"))," : When someone that uses an API has been successfully authenticated using token or session, some attackers may try to steal them and use it to gain unauthorized access."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Excessive Request")," : This is related to DDoS attack, when a backend service receives flood of request from an attacker within a short period. It will consume server's resources such as CPU, memory, network and the server may experience performance degradation, unresponsiveness, or even the server might down.")),(0,n.kt)("h3",{id:"security-mitigation"},"Security Mitigation"),(0,n.kt)("p",null,"Some strategy used to protect backend system :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rate Limiting")," : A technique which will limit API request per time interval, this can help prevent DDoS attack.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Sanitizing Input")," : Make sure to always validate the input field in your application, make sure it doesn't contains exploitable character to be safe from injection attack like XSS or SQL injection.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Data Encryption")," : Encrypt sensitive data stored in database, communication may also use ",(0,n.kt)("a",{parentName:"p",href:"/computer-networking/network-encryption"},"secure protocol")," such as ",(0,n.kt)("a",{parentName:"p",href:"/computer-networking/http-https#https"},"HTTPS"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Content Security Policy (CSP)")," : A security mechanism implemented by web browsers to mitigate the risk of certain types of web-based attacks. CSP works by specifying a whitelist of trusted sources for various types of content, such as scripts, stylesheets, images, fonts, and frames. For example :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default-src")," Specifies the default source for all types of content if a specific directive is not specified."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"script-src")," : Specifies the allowed sources for JavaScript code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"style-src")," : Specifies the allowed sources for CSS stylesheets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"img-src")," : Specifies the allowed sources for images."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"font-src")," : Specifies the allowed sources for fonts.")))),(0,n.kt)("h3",{id:"cors"},"CORS"),(0,n.kt)("p",null,"Web browser enforce the Same-Origin Policy, which restricts web pages from making requests to resources on different domains. For example, we have a website at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.example1.com")," and another one at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.example2.com"),". When our application at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.example1.com")," has a script to access data or make request to the ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.example2.com"),", this is called ",(0,n.kt)("strong",{parentName:"p"},"cross-origin request")," and it is not allowed according to the Same-Origin Policy."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cross-Origin Resource Sharing (CORS)")," is a security mechanism that relaxes the Same-Origin Policy allowing for cross-origin request. CORS provides a way for servers to explicitly allow cross-origin requests from specific domains (can be our own server that is located in different domain) while still protecting against unauthorized access. It works by adding exception for a specific request :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Client-Side Request"),' : When the browser makes a cross-origin request, the browser sends an HTTP request with an "Origin" header that indicates the page\'s origin (e.g. ',(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Server-Side Response")," : The server that receives the request can respond with specific HTTP headers to indicate whether the requested resource should be accessible to the client-side script. These headers include :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Access-Control-Allow-Origin"),' : Specifies the domains that are allowed to make cross-origin requests. For example, "Access-Control-Allow-Origin: ',(0,n.kt)("a",{parentName:"p",href:"https://example.com%22"},'https://example.com"'),' would allow requests from "',(0,n.kt)("a",{parentName:"p",href:"https://example.com%22"},'https://example.com"')," but reject requests from other origins. The server can also use wildcard values with ","*"," to allow requests from any origin.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Access-Control-Allow-Methods")," : Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) allowed for cross-origin requests.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Access-Control-Allow-Headers")," : Specifies the headers that are allowed to be included in the cross-origin request. Header can contain content-type, which specify the format data in request or response body, or authentication/authorization credentials.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Access-Control-Allow-Credentials")," : Indicates whether the request can include credentials such as cookies or HTTP authentication information.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Preflight Request")," : The browser may send a preflight request also known as HTTP OPTIONS request. An HTTP OPTIONS request is used to retrieve information about the communication options available in a server. For example this is an example of an HTTP OPTIONS request and response."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"OPTIONS /api/resource HTTP/1.1\nHost: example.com\nOrigin: https://client.com\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: Content-Type, Authorization\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 200 OK\nAllow: GET, POST, HEAD, OPTIONS\nAccess-Control-Allow-Origin: https://client.com\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization\n")))}m.isMDXComponent=!0}}]);