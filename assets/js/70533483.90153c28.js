"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h=a.createContext({}),c=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(h.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,h=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(h,".").concat(d)]||p[d]||u[d]||s;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var h in t)hasOwnProperty.call(t,h)&&(o[h]=t[h]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const s={slug:"/backend-development/authentication-technique",id:"authentication-technique",title:"Authentication Technique",description:"Authentication Technique"},r=void 0,o={unversionedId:"backend-development/authentication-technique/authentication-technique",id:"backend-development/authentication-technique/authentication-technique",title:"Authentication Technique",description:"Authentication Technique",source:"@site/docs/backend-development/10-authentication-technique/authentication-technique.md",sourceDirName:"backend-development/10-authentication-technique",slug:"/backend-development/authentication-technique",permalink:"/cs-notes/backend-development/authentication-technique",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-development/10-authentication-technique/authentication-technique.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1699086567,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{slug:"/backend-development/authentication-technique",id:"authentication-technique",title:"Authentication Technique",description:"Authentication Technique"},sidebar:"sidebar",previous:{title:"Authentication",permalink:"/cs-notes/backend-development/authentication"},next:{title:"Authorization",permalink:"/cs-notes/backend-development/authorization"}},h={},c=[{value:"Session-based Authentication",id:"session-based-authentication",level:3},{value:"Session-based Authentication Process",id:"session-based-authentication-process",level:4},{value:"Token-based Authentication",id:"token-based-authentication",level:3},{value:"JWT",id:"jwt",level:4},{value:"Token-based Authentication Process",id:"token-based-authentication-process",level:4},{value:"SSO",id:"sso",level:3}],l={toc:c},p="wrapper";function u(e){let{components:t,...s}=e;return(0,i.kt)(p,(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main Source :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://youtu.be/gKkBEOq_shs?si=wCIoAb65N0x3oOhz"},"Session Based Authentication | Authentication Series - the roadmap"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://youtu.be/UBUNrFtufWo?si=IGz6Uo6OpzPTywjq"},"Session vs Token Authentication in 100 Seconds - Fireship"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://auth0.com/learn/token-based-authentication-made-easy"},"Token Based Authentication Made Easy - Auth0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://fusionauth.io/articles/tokens/jwt-components-explained"},"Components of JWTs Explained - FusionAuth Docs"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://youtu.be/O1cRJWYF-g4?si=4vqTPiWb4DheFCF8"},"What Is Single Sign-on (SSO)? How It Works - ByteByteGo")))),(0,i.kt)("p",null,"There are many types and technique used in authentication, these methods can be categorized into two general types which is ",(0,i.kt)("strong",{parentName:"p"},"session-based authentication")," and ",(0,i.kt)("strong",{parentName:"p"},"token-based authentication"),"."),(0,i.kt)("h3",{id:"session-based-authentication"},"Session-based Authentication"),(0,i.kt)("p",null,"Session is a period of time the user has been actively authenticated in a system . After a user provide a valid credentials and successfully authenticated, the system will generate a unique session identifier. These are used to uniquely identify and track the user's session throughout their interaction with the system or application, this way the user doesn't need to authenticate everytime they made a request."),(0,i.kt)("p",null,"The session identifier (often referred as session ID) is typically also stored in user's device. They are stored in small piece of data called ",(0,i.kt)("strong",{parentName:"p"},"cookie"),". Cookie is a small text files sent by web server and stored in user's browser. Web browsers use cookies to store information about a user's preferences, activity, or session ID."),(0,i.kt)("h4",{id:"session-based-authentication-process"},"Session-based Authentication Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Authentication")," : The authentication process begins when a user submits their credentials such as a username/email and password to the server. The server verifies the provided credentials against its user database or authentication system. If the credentials are valid, the user is considered authenticated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Session Establishment & Generation")," : After successful authentication, the server creates a session for the user. The server generates a unique identifier or session ID for the session. Session ID is stored on the user's device in the form of cookie, when the user wants to make request to the system, the browser will sends this along with the request to identify the user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Session Validation")," : Whenever the server receives a request from the user, it validates the session ID. It checks whether the session ID is valid, associated with an authenticated user, and has not expired or been invalidated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Expiration & Session Termination")," : Sessions often have a defined expiration time to ensure security by allowing limited access to the system. Session can also be terminated before the expiration time, for example, if the user remains inactive for a specified period (idle timeout), or manually logs out, the session is terminated. The session ID is invalidated, and subsequent requests with that session ID will not be accepted."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session authentication process",src:n(27599).Z,width:"749",height:"412"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://sherryhsu.medium.com/session-vs-token-based-authentication-11a6c5ac45e4"},"https://sherryhsu.medium.com/session-vs-token-based-authentication-11a6c5ac45e4")),(0,i.kt)("p",null,"Session-based authentication has some downsides :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Session Management")," : The server needs to store each of the user's session ID, in a large-scale application with high user traffic, this can be memory-intensive. The server also need to validate and maintain the session state which require additional processing. In a load balancing server architecture, session data also needs to be shared or replicated across servers to maintain session continuity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Security Concern")," : Session-based authentication can raise some security concern including ",(0,i.kt)("a",{parentName:"p",href:"/computer-security/web-security#cookie-hijacking"},"cookie hijacking")," and ",(0,i.kt)("a",{parentName:"p",href:"/computer-security/web-security#cross-site-request-forgery"},"cross-site request forgery")," which steal user's session ID to make request on behalf of the user."))),(0,i.kt)("h3",{id:"token-based-authentication"},"Token-based Authentication"),(0,i.kt)("p",null,"Token-based authentication is a method of authentication where a token is used to verify the identity of a user. A token is a unique and encoded string of characters that contains all the necesarry information to authenticate user."),(0,i.kt)("p",null,"In session-based authentication, the user stores session ID and the server also store it aswell along with the session state. Instead of that, when the user wanted to authenticate, the server send the user a token encoded in a secret key which only the server has. When the user make a request, the server will verify if it is encoded using the same secret key. This way, we can reduce the burden of the server. However, token-based authentication still have some security downsides similar to session-based authentication, because the information is still stored on the client-side, it can still be stolen by an attacker."),(0,i.kt)("h4",{id:"jwt"},"JWT"),(0,i.kt)("p",null,"In token-based authentication, JSON Web Token (JWT) is typically used as the implementation. JWT is encoded in ",(0,i.kt)("a",{parentName:"p",href:"/computer-and-programming-fundamentals/data-representation#base64"},"base64")," uses ",(0,i.kt)("a",{parentName:"p",href:"/frontend-web-development"},"JSON")," as the format for representing the token's actual data. JWT consists of header, payload, and signature."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Header"),' : Header specify algorithm used to sign the token and the type of the token (which is "JWT").'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payload")," : Payload contains the actual user's data such as username and email."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signature")," : Signature contains a string which is generated by signing the concatenated string of the header and payload with ",(0,i.kt)("inlineCode",{parentName:"li"},".")," using the algorithm specified in the header and the secret key owned by the server. While making request, the user send the token and the server will unsign the token and verify it.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"JWT example token",src:n(35901).Z,width:"895",height:"471"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/"},"https://jwt.io/")),(0,i.kt)("h4",{id:"token-based-authentication-process"},"Token-based Authentication Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Authentication")," : The user provides their credentials (e.g., username and password) to an authentication endpoint or service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Authentication & Token Generation")," : The authentication server verifies the user's credentials and if successful, the server generates a token. This token is associated with the authenticated user and contains relevant information such as user ID, roles, and permissions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token Issuance")," : The server issues the token to the client in the response. The token is typically returned as part of the authentication response payload.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token Usage")," : The client stores the token securely and include it in subsequent requests to the server. This is done by adding the token to request header, such as the authentication bearer method. This is done by including the token in the HTTP header, for example : ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer abc123"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token Validation")," : When the server receives a request with a token, it validates the token using the secret key as well as other checks such as expiration time, token format, and any additional custom validation rules.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Authorization & Access Grant")," : Once the token is validated succesfully, the server will only allow user action they are allowed to do based on the information in the token.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token Expiration")," : Tokens may have an expiration time to ensure security and session management. If a token expires, the client needs to obtain a new token by repeating the authentication process."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Token-based auth process",src:n(88470).Z,width:"776",height:"425"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/"},"https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/")),(0,i.kt)("h3",{id:"sso"},"SSO"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signle Sign-On (SSO)")," is an authentication solution to authenticate user to log in once and gain access to multiple device without needing to authenticate again. SSO is implemented by protocol, the two popular are ",(0,i.kt)("strong",{parentName:"p"},"Security Assertion Markup Language (SAML)")," and ",(0,i.kt)("strong",{parentName:"p"},"OpenID"),". The difference is SAML uses XML while OpenID uses JWT to exchange data, both provide secure connection."),(0,i.kt)("p",null,"In SSO, a ",(0,i.kt)("strong",{parentName:"p"},"service provider (SP)")," is an application that relies on ",(0,i.kt)("strong",{parentName:"p"},"identity provider (IdP)"),", the one who provide user's identity. This is how SSO works in general using SAML :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Accesses an Application")," : The user initiates the SSO process by attempting to access an application or service that supports SAML-based SSO.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application Redirects to Identity Provider (IdP)"),": IdP is a service that authenticate user and provide identity information to other system, it is responsible for verifying user's identity.The application will redirect the user to the chosen IdP.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Authentication at IdP"),": The user is presented with the IdP's login page or authentication form. The user enters their credentials (e.g., username and password) to authenticate themselves to the IdP.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"IdP Generates SAML Assertion")," : Upon successful authentication, the IdP generates a SAML assertion, which contains information about the user's authentication status and attributes. The SAML assertion is digitally signed by the IdP, meaning it is encrpyted using a ",(0,i.kt)("a",{parentName:"p",href:"/computer-security/encryption#public--private-key"},"public/private key encryption")," so that only the IdP and SP itself knows the information to ensure the integrity and origin of the data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SAML Assertion Sent to Service Provider")," : The IdP sends the SAML assertion back to the original application or browser and sent it to the service provider. The assertion is sent to Assertion Consumer Service (ACS) URL, which is a specific endpoint provided by service provider used when the authentication is successful.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SP Validates the SAML Assertion")," : The SP receives the SAML assertion from the IdP. The SP validates the assertion by verifying the digital signature to ensure the assertion's integrity and authenticity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Authorized & Session Established")," : Upon successful validation of the SAML assertion, the SP considers the user authenticated and establishes a session for the user. The session allows the user to access the application or service without providing additional credentials, basically the authentication process will be skipped.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SAML Assertion Expiration")," : SAML assertions have an expiration time, typically set by the IdP. If the assertion expires, the SP may need to request a new assertion from the IdP to continue the SSO session. The SP may also supports single logout, which is a mechanism to log out from the SP and terminate the SSO session."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SSO SAML process",src:n(5907).Z,width:"465",height:"375"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6262987?hl=id"},"https://support.google.com/a/answer/6262987?hl=id")))}u.isMDXComponent=!0},35901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jwt-62d961db0d992ba6d6ec58bb3aa5bc0e.png"},27599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/session-auth-cdf628fa3e50b3ff87ddad9d60a4b935.png"},5907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-cc25b92946d3a97a81fa23930022c2a8.png"},88470:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-auth-254dd3880ca8130e17a69bd43badf0a5.png"}}]);