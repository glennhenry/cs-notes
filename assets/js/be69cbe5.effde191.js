"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7571],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>k});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=l(t),h=s,k=c["".concat(i,".").concat(h)]||c[h]||N[h]||m;return t?n.createElement(k,r(r({ref:e},o),{},{components:t})):n.createElement(k,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=h;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},55822:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const m={slug:"/machine-learning/naive-bayes",id:"naive-bayes",title:"Naive Bayes",description:"Naive Bayes"},r=void 0,p={unversionedId:"machine-learning/naive-bayes/naive-bayes",id:"machine-learning/naive-bayes/naive-bayes",title:"Naive Bayes",description:"Naive Bayes",source:"@site/docs/machine-learning/03-naive-bayes/naive-bayes.md",sourceDirName:"machine-learning/03-naive-bayes",slug:"/machine-learning/naive-bayes",permalink:"/cs-notes/machine-learning/naive-bayes",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/machine-learning/03-naive-bayes/naive-bayes.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1694018546,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{slug:"/machine-learning/naive-bayes",id:"naive-bayes",title:"Naive Bayes",description:"Naive Bayes"},sidebar:"sidebar",previous:{title:"Logistic Regression",permalink:"/cs-notes/machine-learning/logistic-regression"},next:{title:"K-Nearest Neighbors",permalink:"/cs-notes/machine-learning/k-nearest-neighbors"}},i={},l=[{value:"Bayes Theorem",id:"bayes-theorem",level:3},{value:"Naive Bayes Classifier",id:"naive-bayes-classifier",level:3}],o={toc:l},c="wrapper";function N(a){let{components:e,...m}=a;return(0,s.kt)(c,(0,n.Z)({},o,m,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Main Source : ",(0,s.kt)("a",{parentName:"strong",href:"https://youtu.be/lFJbZ6LVxN8?si=MpMCC5LA30ytenDB"},"The Math Behind Bayesian Classifiers Clearly Explained! - Normalized Nerd"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Naive Bayes")," is a machine learning algorithm which is based on the principles of Bayes' theorem in probability theory, it describes the probability of an event based on prior knowledge or information."),(0,s.kt)("p",null,"Naive Bayes is often used for classification, the category we are classfying into is called dependent variable, and the variable we believe that affect the classification is the independent variable (often called features). Naive bayes uses conditional probability, this mean the probability of an event occuring is given by a specific features. In other word, an event occurs based on specific condition. The algorithm will keep being updated as we gain new information."),(0,s.kt)("p",null,"When we predict an event in based on prior knowledge, this mean if a feature we observed before causes outcome of a particular event, then in the future, there will be a higher chance for other things that has the similar features to also cause the same particular event."),(0,s.kt)("p",null,"For example, if we observed that at Saturday night it often rains, then in the future there is a higher chance of it to occurs again. In this case, temperature may be a feature or a variable that affect if it's gonna rain or not."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Bayes theorem",src:t(33578).Z,width:"751",height:"287"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://mlarchive.com/machine-learning/the-ultimate-guide-to-naive-bayes/"},"https://mlarchive.com/machine-learning/the-ultimate-guide-to-naive-bayes/")),(0,s.kt)("h3",{id:"bayes-theorem"},"Bayes Theorem"),(0,s.kt)("p",null,"Probability of a thing classified into some label can be mathematically writen as :",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"Y"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,s.kt)("mi",{parentName:"mrow"},"X"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"x"),(0,s.kt)("mn",{parentName:"msub"},"1")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"x"),(0,s.kt)("mn",{parentName:"msub"},"2")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"x"),(0,s.kt)("mi",{parentName:"msub"},"n")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P(Y = y | X = (x_1, x_2, ..., x_n))")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"Y"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"..."),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},"))")))))),(0,s.kt)("p",null,"Where :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"Y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"Y")))))," : label, what we are going to classify a thing into"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," : what the label actually is"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"X")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"X")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X")))))," : the features, the variable that affect why a thing is classified into some label"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"x"),(0,s.kt)("mn",{parentName:"msub"},"1")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"x"),(0,s.kt)("mi",{parentName:"msub"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x_1,...x_n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"..."),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," : all the actual features")),(0,s.kt)("p",null,"Let's say we have an event that has 2 features, x1 and x2, the outcome or can be either 0 or 1. We wanted to know in the future what is the outcomes for a specific features."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Example of known outcome from features x1 and x2",src:t(34189).Z,width:"231",height:"213"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/lFJbZ6LVxN8?si=g3ks1QA5hPnq91xD&t=304"},"https://youtu.be/lFJbZ6LVxN8?si=g3ks1QA5hPnq91xD&t=304")),(0,s.kt)("p",null,"We can use Bayes theorem here to calculate the outcome, we will need to calculate all the required number first, the evidence, prior outcomes, and the likelihood using the data known before. The calculation for them is simple, the number of outcomes of an event divided by total number event."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Calculting the required number",src:t(97236).Z,width:"512",height:"458"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/lFJbZ6LVxN8?si=p3aB_jAKZMBnevEn&t=353"},"https://youtu.be/lFJbZ6LVxN8?si=p3aB_jAKZMBnevEn&t=353")),(0,s.kt)("p",null,"This Bayes theorem looks working for a quite simple problem. However, as the problem getting more complex (more data and more features), we may never have an outcomes for particular features, and it's hard to predict if nothing particular happens before."),(0,s.kt)("h3",{id:"naive-bayes-classifier"},"Naive Bayes Classifier"),(0,s.kt)("p",null,"In naive bayes classifier, we assume in a naive way that all the features are independent, this mean the outcome of an event doesn't depend or influence each other. This is why we also need to make sure that the features we are studying are actually independent. By assumming they are independent, we multiply them instead."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Naive bayes prediction",src:t(56412).Z,width:"626",height:"210"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/lFJbZ6LVxN8?si=St8QN9YRZJvRcjn_&t=516"},"https://youtu.be/lFJbZ6LVxN8?si=St8QN9YRZJvRcjn_&t=516")))}N.isMDXComponent=!0},34189:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/bayes-example-1-2df0ed1968c26aa1f7b79f0366fbcd60.png"},97236:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/bayes-example-2-6cbec7c12155c101a12c2f5fca439600.png"},33578:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/bayes-theorem-6a09a0130cf02930820eca2991d06686.png"},56412:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/naive-bayes-80202ed6c3a2583fe600cdbfd983f287.png"}}]);