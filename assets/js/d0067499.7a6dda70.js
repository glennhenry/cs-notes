"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6476],{63950:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(85893),o=i(11151);const s={slug:"/deep-learning/cnn",id:"cnn",title:"CNN",description:"CNN"},r=void 0,a={id:"deep-learning/cnn/cnn",title:"CNN",description:"CNN",source:"@site/docs/deep-learning/04-cnn/cnn.md",sourceDirName:"deep-learning/04-cnn",slug:"/deep-learning/cnn",permalink:"/cs-notes/deep-learning/cnn",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/deep-learning/04-cnn/cnn.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1695899023,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{slug:"/deep-learning/cnn",id:"cnn",title:"CNN",description:"CNN"},sidebar:"sidebar",previous:{title:"Neural Network",permalink:"/cs-notes/deep-learning/neural-network"},next:{title:"ResNet",permalink:"/cs-notes/deep-learning/resnet"}},l={},c=[{value:"Convolution",id:"convolution",level:3},{value:"Stride",id:"stride",level:4},{value:"Padding",id:"padding",level:4},{value:"Pooling",id:"pooling",level:4},{value:"CNN",id:"cnn",level:3},{value:"Convolution",id:"convolution-1",level:4},{value:"Pooling",id:"pooling-1",level:4},{value:"Prediction",id:"prediction",level:4},{value:"Dropout",id:"dropout",level:4}];function d(e){const n={a:"a",br:"br",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/htiNBPxcXgo?si=qlgBDGouIRZRMArx",children:"Deep learning lesson 8 - fast.ai"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/YRhxdVk_sIs?si=Y3nwjS7h7hPpLCKa",children:"Convolutional Neural Networks (CNNs) explained - deeplizard"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/py5byOOHZM8?si=vOrMlnIPxELIyORA",children:"CNN: Convolutional Neural Networks Explained - Computerphile"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Convolutional Neural Network(CNN)"})," is a type of ",(0,t.jsx)(n.a,{href:"/deep-learning/neural-network",children:"neural network"})," that is specifically designed for processing grid-like data such as images."]}),"\n",(0,t.jsx)(n.h3,{id:"convolution",children:"Convolution"}),"\n",(0,t.jsx)(n.p,{children:"Convolution is the process of combining two function to produce a third function. In the context of image processing, a mathematical function will be applied to an image and it will produce another image."}),"\n",(0,t.jsxs)(n.p,{children:["The function applied to image is called ",(0,t.jsx)(n.strong,{children:"kernel"})," or ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/computer-graphics/signal-processing#image-filters",children:"filters"})}),". The function is a small square matrix with some numerical values. Convolution operation is when the kernel is applied to image by sliding it and performing a multiplication (dot product) between the number in matrix and the pixel value in the image. The resulting product wil be summed up and it will result in another image."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"GIF of convolution process",src:i(97953).Z+"",width:"535",height:"299"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://towardsdatascience.com/computer-vision-convolution-basics-2d0ae3b79346",children:"https://towardsdatascience.com/computer-vision-convolution-basics-2d0ae3b79346"})]}),"\n",(0,t.jsx)(n.p,{children:"Following the nature of dot product, the choice of values in matrix will determine the result of convolution process. For example, the sharpen filters has high value in the central pixel and negative values in the neighbouring pixels. This enhances the difference between central pixel and its neighbours, making it receive higher emphasis leading to a sharpened appearance."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Kernel example",src:i(52285).Z+"",width:"557",height:"675"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Kernel_(image_processing)",children:"https://en.wikipedia.org/wiki/Kernel_(image_processing)"})]}),"\n",(0,t.jsx)(n.h4,{id:"stride",children:"Stride"}),"\n",(0,t.jsxs)(n.p,{children:["While doing convolution, we can adjust how the process is done. ",(0,t.jsx)(n.strong,{children:"Stride"})," is the hyperparameter used to determine the movement of the kernel while doing the convolution operation, it can be thought as the step size."]}),"\n",(0,t.jsx)(n.p,{children:"Like the image below, stride is used to skip some pixel value, this will make the resulting image size different."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Stride",src:i(51764).Z+"",width:"700",height:"224"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://www.codingninjas.com/studio/library/convolution-layer-padding-stride-and-pooling-in-cnn",children:"https://www.codingninjas.com/studio/library/convolution-layer-padding-stride-and-pooling-in-cnn"})]}),"\n",(0,t.jsx)(n.h4,{id:"padding",children:"Padding"}),"\n",(0,t.jsx)(n.p,{children:"Another hyperparamter of convolution is padding. Padding is additional pixel added around the image. The pixels at border have less neighbour than other pixels in the center, this can make the resulting image biased towards the central pixels. By adding padding, pixels in the border can be more balance."}),"\n",(0,t.jsx)(n.p,{children:"Another purpose is to reduce information loss, while applying kernel to the image, the border pixels can't be on the center of the kernel, this can result in information loss at the borders."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Padding of zeros",src:i(14637).Z+"",width:"552",height:"324"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://www.numpyninja.com/post/how-padding-helps-in-cnn",children:"https://www.numpyninja.com/post/how-padding-helps-in-cnn"})," (with modification)"]}),"\n",(0,t.jsx)(n.h4,{id:"pooling",children:"Pooling"}),"\n",(0,t.jsx)(n.p,{children:"Pooling is the process of downsampling or reducing the dimension of features. Color of image is considered as features, as it provide information about image. In the case of CNN, pooling is done to reduce the image size, this is done by taking the representation of image. Example of pooling technique is the max-pooling, which takes the largest values in a region."}),"\n",(0,t.jsx)(n.p,{children:"Reducing the features is useful in CNN to help it focuses on some patterns and relationship between features."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Max pooling",src:i(66377).Z+"",width:"589",height:"215"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://www.geeksforgeeks.org/cnn-introduction-to-pooling-layer/",children:"https://www.geeksforgeeks.org/cnn-introduction-to-pooling-layer/"})]}),"\n",(0,t.jsx)(n.h3,{id:"cnn",children:"CNN"}),"\n",(0,t.jsx)(n.p,{children:"CNN is specialized type of neural network used for image analysis, CNN typically consists of 4 different layer. Same as traditional neural network, these layer are connected together and will pass its result to next layer."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input Layer"})," : Input of CNN is an image in the form of number which is the representation of the image color. Input layer typically expect : [batch_size, channels, width, height], where width and height is the size of image, channels represent how many color channel in the image (e.g. RGB image means 3 channel), and batch_size is the number of image processed together in a single forward and backward pass."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Convolutional Layer"})," : Which is the layer that performs convolution operation explained above. So instead of multiplying input data by weights as we did in traditional neural network, CNN does convolution process to the input data which is the image in numerical representation then pass it onto the next layer that does convolution again. The convolution layer may also include an ",(0,t.jsx)(n.a,{href:"/deep-learning/deep-learning-foundation#activation-function",children:"activation function"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pooling Layer"})," : Pooling layer that does the pooling process to reduce the image dimension. The pooling layer reduce image size but it also take the representation of the overall image. Each neuron in pooling layer will capture different representation of image depending on the input."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Fully Connected Layer"})," : The fully connected layers are the same layers as the traditional neural network. After extracting the information from image from convolution and pooling layer, this layer is responsible for making prediction."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"CNN Layers",src:i(62882).Z+"",width:"673",height:"260"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://developersbreach.com/convolution-neural-network-deep-learning/",children:"https://developersbreach.com/convolution-neural-network-deep-learning/"})]}),"\n",(0,t.jsx)(n.h4,{id:"convolution-1",children:"Convolution"}),"\n",(0,t.jsx)(n.p,{children:"The input data will be an image in the form of its pixel colors. Convolution process will be done into the input data, however, the filter used here is a matrix that consist of random numbers. The convolution process is the same as above explanation, this will produce another image."}),"\n",(0,t.jsx)(n.p,{children:"These filter allows us to detect low-level patterns. The first convolution process may won't be able to capture important patterns or features. However, these numbers will be adjusted later to improve the detection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Convolution of a number 7 image",src:i(43296).Z+"",width:"643",height:"214"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://youtu.be/YRhxdVk_sIs?si=ZLAexy3x4VYMjQ0E&t=347",children:"https://youtu.be/YRhxdVk_sIs?si=ZLAexy3x4VYMjQ0E&t=347"})]}),"\n",(0,t.jsx)(n.p,{children:"Some of the filters in the convolution maybe are supposed to detect edges, other may supposed to detect curve, and etc."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Overall layer of abstraction",src:i(21246).Z+"",width:"518",height:"711"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://www.analyticsvidhya.com/blog/2022/03/basic-introduction-to-convolutional-neural-network-in-deep-learning/",children:"https://www.analyticsvidhya.com/blog/2022/03/basic-introduction-to-convolutional-neural-network-in-deep-learning/"})]}),"\n",(0,t.jsxs)(n.p,{children:["The number of output image depends on the number of filter use. When we say 32 filter, this mean we have 32 distinct matrix with its own numbers. Each filter will be applied to the image, therefore producing 32 different image, the result is called ",(0,t.jsx)(n.strong,{children:"feature maps"})," as it is actually not a separate image, just a different form of image. (note: each conv layer can have different number of filter)"]}),"\n",(0,t.jsx)(n.p,{children:"When we connect the layer together, we may have than 1 input image or feature maps. In this case, the convolution process works by applying a single filter in the next layer to all the feature maps from the previous layer, and the results are summed to generate a single feature map. This process is repeated for each filter in the second layer."}),"\n",(0,t.jsx)(n.p,{children:"The notation for convolution layer is (numberOfFilter x imageWidth x imageHeight). The input image image is typically separated by its color channel, so red, green, and blue color of the image is processed separately."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Convolution with 6 filter",src:i(9649).Z+"",width:"637",height:"222"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://youtu.be/pj9-rr1wDhM?si=-7Fnrb2DpTa71Jo8&t=450",children:"https://youtu.be/pj9-rr1wDhM?si=-7Fnrb2DpTa71Jo8&t=450"})]}),"\n",(0,t.jsx)(n.h4,{id:"pooling-1",children:"Pooling"}),"\n",(0,t.jsxs)(n.p,{children:["Pooling is done to reduce the image dimension, which also reduces the features of the image. It can be thought as summarizing the whole image in a smaller dimension that consist of pixel that represent the overall image or called ",(0,t.jsx)(n.strong,{children:"feature extraction"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This layer doesn't have adjustable parameters, it is a fixed process."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Pooling layer",src:i(74051).Z+"",width:"685",height:"385"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://youtu.be/pj9-rr1wDhM?si=-7Fnrb2DpTa71Jo8&t=450",children:"https://youtu.be/pj9-rr1wDhM?si=-7Fnrb2DpTa71Jo8&t=450"})]}),"\n",(0,t.jsx)(n.h4,{id:"prediction",children:"Prediction"}),"\n",(0,t.jsx)(n.p,{children:"After receiving result from the last layer convolution or pooling layer, the fully connected layer will make prediction. The result from previous layer will first be flattened into one-dimensional vector. This will combine the result from all the filter that does different detection."}),"\n",(0,t.jsxs)(n.p,{children:["From now on, how will the network works is same as traditional neural network, it consist of weight, bias, and activation function. After reaching the last layers, it can now make prediction. In this step, ",(0,t.jsx)(n.a,{href:"/deep-learning/deep-learning-foundation#loss-function",children:"loss function"})," will be calculated, the specific function depends on the task."]}),"\n",(0,t.jsx)(n.p,{children:"After calculating the loss, it's time for the model to learn with backpropagation technique. Gradient of the loss function will be calculated with respect to each parameters, including fully connected layer weights and the coefficient in the filter matrix. Gradients with respect to the filters are calculated and used to update the filter weights."}),"\n",(0,t.jsx)(n.p,{children:"The input in the fully connected layer is based on the previous layer, the previous layer is also based on the previous layer, backward pass will be done adjusting all adjustable parameter."}),"\n",(0,t.jsx)(n.h4,{id:"dropout",children:"Dropout"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dropout"})," is a data augmentation techinique to reduce overfitting in neural network by deactivating some neuron in the layer. Dropout can be thought as discarding some random color in an image. The idea of dropout is, we human, still able to recognize corrupted image. Computer should also know how to recognize these."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Dropout deactivting neurons",src:i(97298).Z+"",width:"534",height:"277"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://www.researchgate.net/figure/9-An-illustration-of-the-dropout-mechanism-within-the-proposed-CNN-a-Shows-a_fig23_317277576",children:"https://www.researchgate.net/figure/9-An-illustration-of-the-dropout-mechanism-within-the-proposed-CNN-a-Shows-a_fig23_317277576"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9649:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/6-convolution-filter-a67781b2cf970bde2a86db40aaae1d01.png"},62882:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cnn-layer-f1ef1f8a21ce9dc9f41b8afc58e9e866.png"},43296:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/convolution-layer-72e8624e6b8efdfd5e3657a64e792362.png"},97953:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/convolution-66c6bb6fe67d91be117f81b75840dd65.gif"},97298:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/dropout-271b2db2b4464507ee27fcedc40a3657.png"},52285:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/kernel-example-77b7d160aee9f38ad3434fa23f1150ac.png"},21246:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/overall-layer-2258b5febd8c07dd29a8ecdaa34534c4.png"},14637:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/padding-b283a409e9c4dbca630bb490cdb62579.png"},74051:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pooling-layer-c3758162cfd3d19da630e1185384c073.png"},66377:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pooling-171c1b5a2c107b675df2c8f54df06b6b.png"},51764:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/stride-9d826ff97f607604af5cf0a5910bb792.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);