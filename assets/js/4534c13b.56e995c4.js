"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4411],{24140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(85893),s=n(11151);const r={slug:"/deep-learning/u-net",id:"u-net",title:"U-Net",description:"U-Net"},o=void 0,a={id:"deep-learning/u-net/u-net",title:"U-Net",description:"U-Net",source:"@site/docs/deep-learning/06-u-net/u-net.md",sourceDirName:"deep-learning/06-u-net",slug:"/deep-learning/u-net",permalink:"/cs-notes/deep-learning/u-net",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/deep-learning/06-u-net/u-net.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1707298369,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{slug:"/deep-learning/u-net",id:"u-net",title:"U-Net",description:"U-Net"},sidebar:"sidebar",previous:{title:"ResNet",permalink:"/cs-notes/deep-learning/resnet"},next:{title:"Siamese Network",permalink:"/cs-notes/deep-learning/siamese-network"}},c={},l=[{value:"Architecture",id:"architecture",level:3},{value:"Output &amp; Learning",id:"output--learning",level:3}];function d(e){const t={a:"a",br:"br",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://youtu.be/NhdzGfB1q74?si=BiC8L1cs-YRLn9T4",children:"The U-Net (actually) explained in 10 minutes - rupert ai"})})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"U-Net"})," is a U-shaped ",(0,i.jsx)(t.a,{href:"/deep-learning/cnn",children:"convolutional neural network"})," architecture that follows the encoder-decoder network with a ",(0,i.jsx)(t.a,{href:"/deep-learning/resnet#residual-connection",children:"skip connection"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"An encoder-decoder network consist of an encoder and a decoder. The encoder is a component responsible for processing input data and extracting relevant features. The decoder reconstructs or generates the desired output based on the encoded information produced by encoder."}),"\n",(0,i.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:'As the name suggests, the architecture has a "U" shape and is symmetric. It begins by extracting the features of input image, downsampling, and then the reverse process.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"U-Net architecture",src:n(26e3).Z+"",width:"750",height:"505"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://towardsdatascience.com/unet-line-by-line-explanation-9b191c76baf5",children:"https://towardsdatascience.com/unet-line-by-line-explanation-9b191c76baf5"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Input"})," : U-Net typically used for image segmentation tasks, the input of U-Net is an image that requires segmentation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Encoder"})," : The encoder, which is the left part of the architecture, extracts the features of the image, it consists of a series of convolutional layers with ReLU activation function followed by pooling or down-sampling operations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Skip Connection"})," : Each encoder's layers level is included with skip connection that connects directly to decoder, allowing the features to flow without being sampled in the encoder's layer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Decoder"})," : The last level of encoder's layer produced the highly abstract and global information about the input image. The decoder takes it and perform the reverse process of encoder including upsampling followed by convolutional layers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The skip connection combined with decoder makes U-Net suitable for tasks requiring image segmentation, particularly in domains like biomedicine. The decoder is able to combine high-level features from the output of encoder with the information from multiple level of encoder's layer accessed using skip connection."}),"\n",(0,i.jsx)(t.h3,{id:"output--learning",children:"Output & Learning"}),"\n",(0,i.jsx)(t.p,{children:"The output of U-Net is a segmentation mask or a probability map that indicates the presence or absence of different classes or regions in the input image. The initial output will obviously be messed up."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"U-Net output",src:n(97824).Z+"",width:"1124",height:"293"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://catchzeng.medium.com/the-easiest-way-to-train-a-u-net-image-segmentation-model-using-tensorflow-and-labelme-fe130de45a19",children:"https://catchzeng.medium.com/the-easiest-way-to-train-a-u-net-image-segmentation-model-using-tensorflow-and-labelme-fe130de45a19"})]}),"\n",(0,i.jsx)(t.p,{children:"The loss is calculated by comparing the output of U-Net with the ground truth segmentation masks. This mean we need labeled segmentation masks for each input we have. The loss will then backpropagated through the network and the gradients with respect to network's parameters will be adjusted."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},26e3:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/u-net-architecture-53f7db64426e1c6028985f6d2905ef78.png"},97824:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/u-net-output-41243821876b691ef9a0a6427d66235f.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);