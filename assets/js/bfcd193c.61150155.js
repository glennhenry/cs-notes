"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[9388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/web-development/html-dom",id:"html-dom",title:"HTML DOM",description:"HTML DOM"},s=void 0,i={unversionedId:"web-development/html-dom/html-dom",id:"web-development/html-dom/html-dom",title:"HTML DOM",description:"HTML DOM",source:"@site/docs/web-development/02-html-dom/html-dom.md",sourceDirName:"web-development/02-html-dom",slug:"/web-development/html-dom",permalink:"/cs-notes/web-development/html-dom",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/web-development/02-html-dom/html-dom.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1689937001,formattedLastUpdatedAt:"Jul 21, 2023",frontMatter:{slug:"/web-development/html-dom",id:"html-dom",title:"HTML DOM",description:"HTML DOM"},sidebar:"sidebar",previous:{title:"HTML",permalink:"/cs-notes/web-development/html"},next:{title:"CSS",permalink:"/cs-notes/web-development/css"}},l={},d=[{value:"DOM Tree",id:"dom-tree",level:3},{value:"Nodes Type",id:"nodes-type",level:3},{value:"DOM Level",id:"dom-level",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Main Source :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.freecodecamp.org/news/what-is-the-dom-explained-in-plain-english/"},"What is the DOM? The Document Object Model Explained in Plain English"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Document_Object_Model"},"Wikipedia Document Object Model")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTML DOM")," stands for HTML Document Object Model. It is a programming interface for HTML documents that provides a hierarchical representation of the document structure, along with a set of methods and properties for manipulating the content and structure of the document."),(0,a.kt)("p",null,"Web browser is responsible for parsing HTML when you visit a web page, during parsing the browser reads the HTML code and creates a Document Object Model (DOM), which represents the structure of the web page."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"DOM is not limited to HTML it is also used in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/XML"},"Extensible Markup Language (XML)"))," which is markup language used to store and transport data in a structured format. XML allows developers to define their own custom tags and elements, making it highly extensible and adaptable to a wide range of applications.")),(0,a.kt)("h3",{id:"dom-tree"},"DOM Tree"),(0,a.kt)("p",null,"DOM is represented as tree-like structure, with each HTML element represented as a node in the tree and is represented as an object, with properties. The root of the tree is the document object, which represents the entire HTML document."),(0,a.kt)("p",null,"Objects and properties make each HTML element in the document possible to be accessed and manipulated using JavaScript. For example, the document object has properties such as title and URL, while HTML elements have properties such as innerHTML, className, and style."),(0,a.kt)("p",null,"Developers can use JavaScript to access and modify individual elements in the document, change their attributes and styles, add or remove elements from the document, and respond to user interactions."),(0,a.kt)("p",null,"See how Javascript access the DOM : ",(0,a.kt)("a",{parentName:"p",href:"/web-development/html-css-javascript#dom-manipulation"},"DOM Manipulation")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTML represented in tree structure with html tags as the root and has head and body as children which also contains another children elements such as p, ul, li",src:n(2025).Z,width:"757",height:"433"}),(0,a.kt)("br",{parentName:"p"}),"\n","Source : ",(0,a.kt)("a",{parentName:"p",href:"https://www.tutorialstonight.com/js/js-dom-introduction"},"https://www.tutorialstonight.com/js/js-dom-introduction")),(0,a.kt)("h3",{id:"nodes-type"},"Nodes Type"),(0,a.kt)("p",null,"There are several different types of nodes in the Document Object Model (DOM), with each type of node representing a different kind of object in an HTML or XML document. Here are the most common types of nodes in the DOM :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Element Nodes")," : Element nodes represent the actual elements in an HTML or XML document, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<p>"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"<img>"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Text Nodes")," : Text nodes represent the text content of an element, such as the text between two HTML tags."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Attribute Nodes")," : Attribute nodes represent the attributes of an element, such as the src attribute of an ",(0,a.kt)("inlineCode",{parentName:"li"},"<img>")," element."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Comment Nodes")," : Comment nodes represent comments in an HTML or XML document, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"\x3c!-- This is a comment --\x3e"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Document Nodes")," : Document nodes represent the entire HTML or XML document and are the root node of the DOM tree."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Document Type Nodes")," : Document type nodes represent the document type declaration in an HTML or XML document, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"<!DOCTYPE html>"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Processing Instruction Nodes")," : Processing instruction nodes represent processing instructions in an XML document, such as ",(0,a.kt)("inlineCode",{parentName:"li"},'<?xml version="1.0" encoding="UTF-8"?>'),".")),(0,a.kt)("h3",{id:"dom-level"},"DOM Level"),(0,a.kt)("p",null,"The Document Object Model (DOM) has evolved over time, with different versions or levels of the DOM being developed to support new features and capabilities. Here are some of the key levels of the DOM :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DOM Level 1")," : The first level of the DOM was released in 1998 introducing the basic concepts of the DOM, such as nodes, elements, and attributes, and provided a set of core methods and properties for working with these objects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DOM Level 2")," : The second level of the DOM was released in 2000 and added support for new features such as CSS, event handling, and user interface controls. It introduced new interfaces and methods for working with stylesheets, events, and user interface elements, and improved support for XML namespaces and namespaces."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DOM Level 3")," : The third level of the DOM was released in 2004 and included support for additional features such as XPath, keyboard navigation, and validation. It introduced new interfaces and methods for working with XPath expressions, keyboard events, and XML Schema validation, among other things."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DOM Level 4")," : The fourth level of the DOM was released in 2015 and has since become the standard. DOM Level 4 offers notable enhancements in areas such as performance, security, internationalization, and accessibility. Additionally, it introduces new elements and attributes to the model.")))}c.isMDXComponent=!0},2025:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dom-tree-76fcf530829915cfaa2027702b8de34c.png"}}]);