"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7694],{91616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(85893),s=t(11151);const i={slug:"/backend-development/graphql",id:"graphql",title:"GraphQL",description:"GraphQL"},a=void 0,d={id:"backend-development/graphql/graphql",title:"GraphQL",description:"GraphQL",source:"@site/docs/backend-development/05-graphql/graphql.md",sourceDirName:"backend-development/05-graphql",slug:"/backend-development/graphql",permalink:"/cs-notes/backend-development/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-development/05-graphql/graphql.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1708081935,formattedLastUpdatedAt:"Feb 16, 2024",frontMatter:{slug:"/backend-development/graphql",id:"graphql",title:"GraphQL",description:"GraphQL"},sidebar:"sidebar",previous:{title:"SOAP",permalink:"/cs-notes/backend-development/soap"},next:{title:"RPC",permalink:"/cs-notes/backend-development/rpc"}},o={},l=[{value:"Schema",id:"schema",level:3},{value:"GraphQL Request",id:"graphql-request",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://youtu.be/eIQh02xuVw4?si=NZATScKXA3s8jYv9",children:"GraphQL Explained in 100 Seconds - Fireship"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.apollographql.com/blog/graphql/basics/what-is-graphql-introduction/",children:"What is GraphQL? GraphQL introduction - Apollo Blog"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GraphQL"})," is a query language specifically designed for querying APIs data, GraphQL accesses resource on server in a similar way we query a database. Compared to ",(0,r.jsx)(n.a,{href:"/backend-development/rest-api",children:"REST API"})," that accesses resource in a fixed way (e.g. GET /books endpoint), GraphQL allows clients to request specific data from the server in a flexible way by defining the structure of the response they need."]}),"\n",(0,r.jsxs)(n.p,{children:["GraphQL typically uses ",(0,r.jsx)(n.a,{href:"/computer-networking/http-https#http",children:"HTTP"})," as the transport layer, same as ",(0,r.jsx)(n.a,{href:"/backend-development/soap",children:"SOAP"}),", the request is encapsulated in HTTP POST method. GraphQL respond with HTTP response followed by a ",(0,r.jsx)(n.a,{href:"/frontend-web-development/json",children:"JSON"})," data object that contains the data requested by client."]}),"\n",(0,r.jsx)(n.h3,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(n.p,{children:"We need to define schema, it serves as contract for the client and the server for querying and manipulating data."}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of schema in GraphQL :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n}\n\ntype Query {\n  user(id: ID!): User\n  post(id: ID!): Post\n}\n\ntype Mutation {\n  createUser(name: String!, email: String!): User\n  createPost(title: String!, content: String!, authorId: ID!): Post\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A data type is defined using ",(0,r.jsx)(n.code,{children:"type"})," keyword followed with its name. In this example, a type ",(0,r.jsx)(n.code,{children:"User"})," contains fields ",(0,r.jsx)(n.code,{children:"id"}),", ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"email"}),", and ",(0,r.jsx)(n.code,{children:"posts"}),", each has its own type as well. The exclamation sign indicate the field is non-null or required. The square bracket indicate a relationship between data types (e.g. the ",(0,r.jsx)(n.code,{children:"User"})," has relation with ",(0,r.jsx)(n.code,{children:"Post"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Query"})," (not reserved word) is the actual query we are defining, to define a query, we include field (e.g. ",(0,r.jsx)(n.code,{children:"user"})," and ",(0,r.jsx)(n.code,{children:"post"}),") with argument and we specify the type we are returning. The argument can be used to filter or to query specific data."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Mutation"})," (also not reserved word) is the mutation we are defining. Mutation is an operation to modify data on server including create, update, or delete data. We define the ",(0,r.jsx)(n.code,{children:"createUser"})," to take name and email."]}),"\n",(0,r.jsx)(n.p,{children:"The type name and its field has no actual meaning, they are just random word. The way of how the server decides when to query and when to mutate data is included in the request."}),"\n",(0,r.jsx)(n.h3,{id:"graphql-request",children:"GraphQL Request"}),"\n",(0,r.jsx)(n.p,{children:"GraphQL consist of the following structure :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Operation Type"})," : GraphQL has 2 type of operation :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Query"})," : Request data from a server (read operation)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Mutation"})," : Modify data on the server such as create, update, or delete (write operation)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Operation Name (optional)"})," : Text specified to describe the action."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variables (optional)"})," : We can include our variable and it will be defined with ",(0,r.jsx)(n.code,{children:"$"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Query Fields"})," : The main part of a GraphQL request, these fields represent the data that the client wants to retrieve from the server. The client can specify the fields it needs, including nested fields and relationships which mean the data are related."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments (optional)"})," : Arguments are used to filter or provide additional information to the server to customize the response. Arguments are passed using the variable we defined before."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Directive (optional)"})," : Directives enable clients to modify the execution behavior of a GraphQL query. They provide additional instructions to the server about how to handle certain parts of the query. Directive can only modify functionality of an operation compared to argument that capable of modifying the data received."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of a GraphQL query (different from the schema above) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"query ($userId: ID!, $withPosts: Boolean!) {\n  user(id: $userId) {\n    name\n    email @include(if: $withPosts)\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We defined the variable ",(0,r.jsx)(n.code,{children:"userId"})," with types of ",(0,r.jsx)(n.code,{children:"ID!"}),". The query fields is based on the server schema, we also specify argument id that uses the ",(0,r.jsx)(n.code,{children:"userId"})," variable defined before. ",(0,r.jsx)(n.code,{children:"user"})," field includes name and email nested on it. The email field uses directive ",(0,r.jsx)(n.code,{children:"@include"})," which specify the response should include something, in this case it should include posts."]}),"\n",(0,r.jsxs)(n.p,{children:["By making the request flexible, GraphQL help to address REST API issues, sometimes the client may receive some data they don't need in a GET request, this is called ",(0,r.jsx)(n.strong,{children:"overfetch"}),". Another the client may not receive enough data in a single GET request, therefore making him need to make another network request which can waste resource, this is called ",(0,r.jsx)(n.strong,{children:"underfetch"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);