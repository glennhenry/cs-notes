"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8124],{42231:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(85893),t=s(11151);const r={slug:"/backend-system/microservice",id:"microservice",title:"Microservice",description:"Microservice"},c=void 0,a={id:"backend-system/microservice/microservice",title:"Microservice",description:"Microservice",source:"@site/docs/backend-system/14-microservice/microservice.md",sourceDirName:"backend-system/14-microservice",slug:"/backend-system/microservice",permalink:"/cs-notes/backend-system/microservice",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-system/14-microservice/microservice.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723455088e3,frontMatter:{slug:"/backend-system/microservice",id:"microservice",title:"Microservice",description:"Microservice"},sidebar:"sidebar",previous:{title:"Monolithic",permalink:"/cs-notes/backend-system/monolithic"},next:{title:"SOA",permalink:"/cs-notes/backend-system/soa"}},o={},l=[{value:"Advantages &amp; Disadvantages",id:"advantages--disadvantages",level:3}];function d(e){const i={a:"a",br:"br",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Main Source:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.a,{href:"https://youtu.be/lTAcCNbJ7KE?si=9iNSTooup4bKqm5g",children:"What Are Microservices Really All About? (And When Not To Use It) \u2014 ByteByteGo"})})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.a,{href:"https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/",children:"Advantages and Disadvantages of Microservices Architecture by Joe Nemer \u2014 cloud academy"})})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["While ",(0,n.jsx)(i.a,{href:"/backend-system/monolithic",children:"monolithic"})," architecture combine all the software component together, microservice architecture divide it into small component instead. ",(0,n.jsx)(i.strong,{children:"Microservice"})," is an architecture where the structure of application is broken down into small service called microservice, each with their own responsibility. Every component are loosely coupled and independent unlike monolithic architecture."]}),"\n",(0,n.jsx)(i.p,{children:"In a microservice architecture, each service is developed, deployed, and scaled independently of other services. This allows for greater flexibility, scalability, and ease of maintenance compared to traditional monolithic architectures. Each service can also be developed using different technologies and programming languages, as long as they can communicate."}),"\n",(0,n.jsx)(i.p,{children:"A microservice architecture can be implemented in a social media app. The app is organized such that, the feature of the app is broken down as small as possible. For example, while posting a photo, there could be:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Image upload service, responsible for handling user's image upload"}),"\n",(0,n.jsx)(i.li,{children:"Image processing service, this one responsible for processing uploaded image"}),"\n",(0,n.jsx)(i.li,{children:"Like service, handles the management of a like on a post, counting like's count, allowing user to like or unlike"}),"\n",(0,n.jsx)(i.li,{children:"Comment service, manages the comment of a post such as adding comment, deleting comment, editing comment"}),"\n",(0,n.jsx)(i.li,{children:"Notification service, the service that sends notification to the user's followers"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["They can communicate with each other using ",(0,n.jsx)(i.a,{href:"/backend-system/message-broker",children:"messaging systems"})," or using ",(0,n.jsx)(i.a,{href:"/backend-system/rpc",children:"RPC"}),". The architecture uses ",(0,n.jsx)(i.a,{href:"/backend-system/apis-server-logic#api-gateway",children:"API gateway"})," as the single entry point to access any microservice, it is responsible to route client request to the appropriate service. Each microservice may have their own database. However, if they will likely share the same data, they can share the database together."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Example of microservice architecture",src:s(77032).Z+"",width:"525",height:"304"}),(0,n.jsx)(i.br,{}),"\n","Source: ",(0,n.jsx)(i.a,{href:"https://medium.com/design-microservices-architecture-with-patterns/microservices-architecture-for-enterprise-large-scaled-application-825436c9a78a",children:"https://medium.com/design-microservices-architecture-with-patterns/microservices-architecture-for-enterprise-large-scaled-application-825436c9a78a"})," (with modification)"]}),"\n",(0,n.jsx)(i.h3,{id:"advantages--disadvantages",children:"Advantages & Disadvantages"}),"\n",(0,n.jsx)(i.p,{children:"Advantages:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Scalability"}),": Microservices allow independent scaling of different components of an application. Scaling heavyweight service won't affect lightweight service, thus allowing for efficient resource utilization."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Flexibility"}),": Different services can be developed using different programming languages, frameworks, and databases as long as they can communicate with each other."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Maintainability"}),": Complex application can be broken down into smaller and self-contained services. Each service can be developed, deployed, and maintained independently, making it easier to add new features, fix bugs, and perform updates without impacting the entire system."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Fault Isolation"}),": If one microservice were to break, the isolation characteristics of microservices will help to prevent impacting other service."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Team Development"}),": Different teams can work on different services easily, as each service should be independent. This allows for faster development cycles and easier team coordination."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Disadvantages:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Complexity"}),": Microservices still need to talk with each other, meaning they should be as general as possible to adapt with other service. The management of distributed systems, inter-service communication, and data consistency between services can be challenging."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Operational Overhead"}),": Each service will require separate deployment, monitoring, and infrastructure management. This can increase the complexity and cost of system operations."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Network Latency & Performance"}),": Microservices rely on inter-service communication, which introduces latency compared to in-process communication in monolithic architectures."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Testing & Debugging"}),": Ensuring all service to work correctly while also having external dependencies if they talk to other services can be quite challenging. Coordinating between each service's logs, events, and data across different services can be time-consuming (distributed debugging)"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Overall, microservices architecture are suitable for complex application where each component need to be scaled independently, diverse development team, or frequent update for each component."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Microservice vs monolithic architecture",src:s(65354).Z+"",width:"655",height:"354"}),(0,n.jsx)(i.br,{}),"\n","Source: ",(0,n.jsx)(i.a,{href:"https://medium.com/hengky-sanjaya-blog/monolith-vs-microservices-b3953650dfd",children:"https://medium.com/hengky-sanjaya-blog/monolith-vs-microservices-b3953650dfd"})]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},77032:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/microservice-example-2f27ba90081b72a11e05f3cfbfc3376c.png"},65354:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/microservice-vs-monolithic-77b0256936f4cec64a223502753cbdc7.png"},11151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>c});var n=s(67294);const t={},r=n.createContext(t);function c(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);