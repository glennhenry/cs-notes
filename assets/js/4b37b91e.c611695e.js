"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[5697],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),c=l(t),d=s,k=c["".concat(p,".").concat(d)]||c[d]||h[d]||r;return t?n.createElement(k,i(i({ref:a},o),{},{components:t})):n.createElement(k,i({ref:a},o))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m[c]="string"==typeof e?e:s,i[1]=m;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40921:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const r={slug:"/deep-learning/siamese-network",id:"siamese-network",title:"Siamese Network",description:"Siamese Network"},i=void 0,m={unversionedId:"deep-learning/siamese-network/siamese-network",id:"deep-learning/siamese-network/siamese-network",title:"Siamese Network",description:"Siamese Network",source:"@site/docs/deep-learning/07-siamese-network/siamese-network.md",sourceDirName:"deep-learning/07-siamese-network",slug:"/deep-learning/siamese-network",permalink:"/cs-notes/deep-learning/siamese-network",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/deep-learning/07-siamese-network/siamese-network.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1697109148,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{slug:"/deep-learning/siamese-network",id:"siamese-network",title:"Siamese Network",description:"Siamese Network"},sidebar:"sidebar",previous:{title:"U-Net",permalink:"/cs-notes/deep-learning/u-net"},next:{title:"RNN",permalink:"/cs-notes/deep-learning/rnn"}},p={},l=[{value:"Basic Idea",id:"basic-idea",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Embedding Layer",id:"embedding-layer",level:4},{value:"Calculating Distance",id:"calculating-distance",level:4},{value:"Triplet-based Siamese Network",id:"triplet-based-siamese-network",level:3},{value:"Triplet Loss",id:"triplet-loss",level:4},{value:"Triplet Mining",id:"triplet-mining",level:4}],o={toc:l},c="wrapper";function h(e){let{components:a,...r}=e;return(0,s.kt)(c,(0,n.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Main Source :")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://youtu.be/6jfw8MuKwpI?si=5bIxLyoAe8QQ_bBS"},"C4W4L03 Siamese Network - DeepLearningAI"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://towardsdatascience.com/illustrated-guide-to-siamese-network-3939da1b0c9d"},"Illustrated Guide to Siamese Network by Pranjal Gupta - Medium"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://www.v7labs.com/blog/triplet-loss"},"Triplet Loss: Intro, Implementation, Use Cases"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://towardsdatascience.com/siamese-networks-introduction-and-implementation-2140e3443dee"},"Siamese Networks Introduction and Implementation by Aditya Dutt - Medium")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Siamese Network")," is a type of ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/neural-network"},"neural network")," architecture designed to compare and measure similarity between pair of input data, one of the use case is to verify signature like fingerprint."),(0,s.kt)("h3",{id:"basic-idea"},"Basic Idea"),(0,s.kt)("p",null,"The basic idea of how siamese network works is there will be two identical network, called ",(0,s.kt)("strong",{parentName:"p"},"twins")," or ",(0,s.kt)("strong",{parentName:"p"},"branches")," which has the shared weights and architecture. The input data will go into both twins, the network will process it and give the input some score based on its features. If the score are close, it means they are similar, and vice versa."),(0,s.kt)("p",null,"The pair of input will be provided along with the label (whether they are similar or not), the network will adjust its parameters to make sure similar input will also have similar score."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Siamese network illustration",src:t(99180).Z,width:"685",height:"325"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://pyimagesearch.com/2020/11/30/siamese-networks-with-keras-tensorflow-and-deep-learning/"},"https://pyimagesearch.com/2020/11/30/siamese-networks-with-keras-tensorflow-and-deep-learning/")),(0,s.kt)("h3",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"Siamese networks share the same architecture, if the task is to recognize similar image, then they will have the identical ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/cnn"},"convolutional networks"),". The convolution network will flatten its data at the last layer before it goes into the fully-connected layer, same as the original CNN. However, the classifier in the fully-connected layer will not be included. It will go into the next layer called ",(0,s.kt)("strong",{parentName:"p"},"embedding layer"),"."),(0,s.kt)("h4",{id:"embedding-layer"},"Embedding Layer"),(0,s.kt)("p",null,"This is where we give each input its corresponding score, it works by mapping the input data with many features into a lower-dimensional space so that the similarity can be easily measured."),(0,s.kt)("p",null,"The input which comes from the previous layer will be represented in vectors. They will be transformed into vector by applying a normalization operation, which is an operation to transform data into some scale. The normalization is called ",(0,s.kt)("strong",{parentName:"p"},"L2 normalization")," or ",(0,s.kt)("strong",{parentName:"p"},"Euclidean normalization"),"."),(0,s.kt)("p",null,"This process is also called ",(0,s.kt)("strong",{parentName:"p"},"image encoding"),", where we transform input into a compact representation or embedding that captures its charateristics. The embedding process is similar to the embedding in ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/deep-learning-tasks#natural-language-processing-nlp"},"NLP"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Siamese layers",src:t(3757).Z,width:"150",height:"708"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/illustrated-guide-to-siamese-network-3939da1b0c9d"},"https://towardsdatascience.com/illustrated-guide-to-siamese-network-3939da1b0c9d")),(0,s.kt)("h4",{id:"calculating-distance"},"Calculating Distance"),(0,s.kt)("p",null,"After they are represented in a lower-dimensional space, the inputs are compared in the space using technique like ",(0,s.kt)("strong",{parentName:"p"},"Euclidean distance")," or ",(0,s.kt)("strong",{parentName:"p"},"cosine similarity"),". The result distance is the measure of how similar are the input, the model will predict by categorizing the input as similar or not similar based on some threshold."),(0,s.kt)("p",null,"After the prediction is done, the learning process will be the same as traditional network which includes loss calculation, backpropagation, and parameters update. The goal is to make our embedding better, we should map similar samples to have small distances between their embeddings and dissimilar samples to have large distances."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Embedding distance",src:t(92789).Z,width:"329",height:"280"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://www.researchgate.net/figure/Improving-the-similarity-distance-in-an-embedding-space_fig1_346902941"},"https://www.researchgate.net/figure/Improving-the-similarity-distance-in-an-embedding-space_fig1_346902941")),(0,s.kt)("h3",{id:"triplet-based-siamese-network"},"Triplet-based Siamese Network"),(0,s.kt)("p",null,"There is a variant of siamese network called ",(0,s.kt)("strong",{parentName:"p"},"triplet-based Siamese network"),", which uses 3 types of sample in the training process."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Anchor")," : Specific sample that serves as the reference point for comparison."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Positive")," : Positive sample is the input which is a similar to the anchor."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Negative")," : Negative sample is the input which is not similar to the anchor.")),(0,s.kt)("p",null,"Compared to standard siamese network, the triplet-based approach provides a more fine-grained learning signal. It enables the network to learn to rank or order examples based on their similarity to the anchor, rather than just predicting similar or not. By using the anchor as a reference, the network can learn to focus on the specific characteristics that distinguish positive examples from negative examples."),(0,s.kt)("p",null,"In this context, a good embedding mean that we successfully map the positive sample and the anchor sample close while the negative is distinguished from these two."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Embedding result",src:t(70709).Z,width:"499",height:"189"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://www.v7labs.com/blog/triplet-loss"},"https://www.v7labs.com/blog/triplet-loss")),(0,s.kt)("h4",{id:"triplet-loss"},"Triplet Loss"),(0,s.kt)("p",null,"The loss function used for triplet-based siamese network is called the ",(0,s.kt)("strong",{parentName:"p"},"triplet loss"),". It involve calculating the distance of positive and negative sample with the anchor point. Triplet loss measure how correct our embedding is, we will aim to minimize the loss. We will minimize the distance between positive and anchor while maximizing the distance between negative and the anchor."),(0,s.kt)("p",null,"The formula for triplet loss is :"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mtext",{parentName:"mrow"},"max"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mtext",{parentName:"mrow"},"margin"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"L = \\text{max}(d(A, P) - d(A, N) + \\text{margin}, 0)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"max")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"margin")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"Where :"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d(A, P)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," : Distance between anchor and positive example in the embedding space.",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d(A, N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," : Distance between anchor and negative example in the embedding space.",(0,s.kt)("br",{parentName:"p"}),"\n","margin : Hyperparameter that defines the minimum desired difference between the distances of the anchor-positive pair and the anchor-negative pair."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Anchor, positive, and negative embedding before and after learning",src:t(99477).Z,width:"850",height:"204"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://www.researchgate.net/figure/Distances-among-anchor-positive-and-negative-samples-during-training-using-Siamese_fig2_358019630"},"https://www.researchgate.net/figure/Distances-among-anchor-positive-and-negative-samples-during-training-using-Siamese_fig2_358019630")),(0,s.kt)("h4",{id:"triplet-mining"},"Triplet Mining"),(0,s.kt)("p",null,"Triplet mining is the strategy used in triplet-based networks to select which dataset should we choose as the anchor, positive, or negative sample. The goal is to find the dataset that contribute the most to the learning process."),(0,s.kt)("p",null,"It can be categorized into two based on when the triplet is generated :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Online Mining")," : Dynamically generates triplets sample during training process, we can adapt the samples to suit the model performance."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Offline Mining")," : Pre-selected before the training process, it will be more efficient.")),(0,s.kt)("p",null,"Three category based on how hard is the train triplet :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Hard Triplet Mining")," : Negative sample is closer to anchor than the positive."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Semi-Hard Triplet Mining")," : Negative is close to the anchor, but not a zero distance."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Easy Triplet Mining")," : Positive sample is close to anchor while negative is far."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Random Triplet Mining")," : Randomly selected without considering their distance.")))}h.isMDXComponent=!0},99477:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/anchor-positive-negative-7b3a5b648a5b95571c956092f68286f4.png"},92789:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/embedding-distance-b3d82624e3c27c968d439cf68ee3eae9.png"},70709:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/embedding-result-8ddabc123d02ad25c6e20e72cc9966ee.png"},3757:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/siamese-layers-5180b08d323b1b45f29eb5cd76e93c7c.png"},99180:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/siamese-network-5097a0b8f4320399e09bd63b1553fdbf.png"}}]);