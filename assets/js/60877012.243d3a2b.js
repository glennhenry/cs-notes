"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={slug:"/backend-development/microservice",id:"microservice",title:"Microservice",description:"Microservice"},o=void 0,c={unversionedId:"backend-development/microservice/microservice",id:"backend-development/microservice/microservice",title:"Microservice",description:"Microservice",source:"@site/docs/backend-development/15-microservice/microservice.md",sourceDirName:"backend-development/15-microservice",slug:"/backend-development/microservice",permalink:"/cs-notes/backend-development/microservice",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-development/15-microservice/microservice.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1695658054,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{slug:"/backend-development/microservice",id:"microservice",title:"Microservice",description:"Microservice"},sidebar:"sidebar",previous:{title:"Monolithic",permalink:"/cs-notes/backend-development/monolithic"},next:{title:"SOA",permalink:"/cs-notes/backend-development/soa"}},s={},l=[{value:"Advantages &amp; Disadvantages",id:"advantages--disadvantages",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main Source :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://youtu.be/lTAcCNbJ7KE?si=9iNSTooup4bKqm5g"},"What Are Microservices Really All About? (And When Not To Use It) - ByteByteGo"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/"},"Advantages and Disadvantages of Microservices Architecture by Joe Nemer - cloud academy")))),(0,n.kt)("p",null,"While ",(0,n.kt)("a",{parentName:"p",href:"/backend-development/monolithic"},"monolithic")," architecture combine all the software component together, microservice architecture divide it into small component instead. ",(0,n.kt)("strong",{parentName:"p"},"Microservice")," is an architecture where the structure of application is broken down into small service called microservice, each with their own responsibility. Every component are loosely coupled and independent unlike monolithic architecture."),(0,n.kt)("p",null,"In a microservice architecture, each service is developed, deployed, and scaled independently of other services. This allows for greater flexibility, scalability, and ease of maintenance compared to traditional monolithic architectures. Each service can also be developed using different technologies and programming languages, as long as they can communicate."),(0,n.kt)("p",null,"A microservice architecture can be implemented in a social media app. The app is organized such that, the feature of the app is broken down as small as possible. For example, while posting a photo, there could be :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Image upload service, responsible for handling user's image upload"),(0,n.kt)("li",{parentName:"ul"},"Image processing service, this one responsible for processing uploaded image"),(0,n.kt)("li",{parentName:"ul"},"Like service, handles the management of a like on a post, counting like's count, allowing user to like or unlike"),(0,n.kt)("li",{parentName:"ul"},"Comment service, manages the comment of a post such as adding comment, deleting comment, editing comment"),(0,n.kt)("li",{parentName:"ul"},"Notification service, the service that sends notification to the user's followers")),(0,n.kt)("p",null,"They can communicate with each other using ",(0,n.kt)("a",{parentName:"p",href:"/backend-development/message-broker"},"messaging systems")," or using ",(0,n.kt)("a",{parentName:"p",href:"/backend-development/rpc"},"RPC"),". The architecture uses ",(0,n.kt)("a",{parentName:"p",href:"/backend-development/apis-server-logic#api-gateway"},"API gateway")," as the single entry point to access any microservice, it is responsible to route client request to the appropriate service. Each microservice may have their own database. However, if they will likely share the same data, they can share the database together."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example of microservice architecture",src:a(92566).Z,width:"525",height:"304"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/design-microservices-architecture-with-patterns/microservices-architecture-for-enterprise-large-scaled-application-825436c9a78a"},"https://medium.com/design-microservices-architecture-with-patterns/microservices-architecture-for-enterprise-large-scaled-application-825436c9a78a")," (with modification)"),(0,n.kt)("h3",{id:"advantages--disadvantages"},"Advantages & Disadvantages"),(0,n.kt)("p",null,"Advantages :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Scalability")," : Microservices allow independent scaling of different components of an application. Scaling heavyweight service won't affect lightweight service, thus allowing for efficient resource utilization.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Flexibility")," : Different services can be developed using different programming languages, frameworks, and databases as long as they can communicate with each other.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Maintainability")," : Complex application can be broken down into smaller and self-contained services. Each service can be developed, deployed, and maintained independently, making it easier to add new features, fix bugs, and perform updates without impacting the entire system.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fault Isolation")," : If one microservice were to break, the isolation charateristics of microservices will helps to prevent impacting other service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Team Development")," : Different teams can work on different services easily, as each service should be independent. This allows for faster development cycles and easier team coordination."))),(0,n.kt)("p",null,"Disadvantages :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Complexity")," : Microservices still need to talk with each other, meaning they should be as general as possible to adapt with other service. The management of distributed systems, inter-service communication, and data consistency between services can be challenging")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Operational Overhead")," : Each service will require separate deployment, monitoring, and infrastructure management. This can increase the complexity and cost of system operations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Network Latency & Performance")," : Microservices rely on inter-service communication, which introduces latency compared to in-process communication in monolithic architectures.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Testing & Debugging")," : Ensuring all service to work correctly while also having external dependencies if they talk to other services can be quite challenging. Coordinating between each service's logs, events, and data across different services can be time-consuming (distributed debugging)"))),(0,n.kt)("p",null,"Overall, microservices architecture are suitable for complex application where each component need to be scaled independently, diverse development team, or frequent update for each component."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Microservice vs monolithic architecture",src:a(9455).Z,width:"655",height:"354"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/hengky-sanjaya-blog/monolith-vs-microservices-b3953650dfd"},"https://medium.com/hengky-sanjaya-blog/monolith-vs-microservices-b3953650dfd")))}d.isMDXComponent=!0},92566:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/microservice-example-2f27ba90081b72a11e05f3cfbfc3376c.png"},9455:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/microservice-vs-monolithic-77b0256936f4cec64a223502753cbdc7.png"}}]);