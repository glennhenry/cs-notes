"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8706],{62565:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(85893),s=i(11151);const a={slug:"/machine-learning/gradient-boosting-machine",id:"gradient-boosting-machine",title:"Gradient Boosting Machine",description:"Gradient Boosting Machine"},r=void 0,o={id:"machine-learning/gradient-boosting-machine/gradient-boosting-machine",title:"Gradient Boosting Machine",description:"Gradient Boosting Machine",source:"@site/docs/machine-learning/07-gradient-boosting-machine/gradient-boosting-machine.md",sourceDirName:"machine-learning/07-gradient-boosting-machine",slug:"/machine-learning/gradient-boosting-machine",permalink:"/cs-notes/machine-learning/gradient-boosting-machine",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/machine-learning/07-gradient-boosting-machine/gradient-boosting-machine.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1707298369,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{slug:"/machine-learning/gradient-boosting-machine",id:"gradient-boosting-machine",title:"Gradient Boosting Machine",description:"Gradient Boosting Machine"},sidebar:"sidebar",previous:{title:"Random Forest",permalink:"/cs-notes/machine-learning/random-forest"},next:{title:"Support Vector Machine",permalink:"/cs-notes/machine-learning/support-vector-machine"}},l={},d=[{value:"Gradient Boosting Process",id:"gradient-boosting-process",level:3},{value:"XGBoost",id:"xgboost",level:3}];function c(e){const n={a:"a",br:"br",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://vitalflux.com/gradient-boosting-algorithm-concepts-example/",children:"Gradient Boosting Algorithm: Concepts, Example - vitalflux.com"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/TyvYZ26alZs?si=0dVrDvNP66xYICb-",children:"Visual Guide to Gradient Boosted Trees (xgboost) - Econoscent"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.simplilearn.com/what-is-xgboost-algorithm-in-machine-learning-article",children:"What is XGBoost? - Simplilearn"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Gradient Boosting Machine (GBM)"})," is a technique that combines simpler and smaller model to produce an accurate prediction better than an individual model. When we combine multiple model to create a more powerful and accurate predictive model, this is called ",(0,t.jsx)(n.strong,{children:"ensemble learning"}),", an ensemble is a combination of models."]}),"\n",(0,t.jsx)(n.p,{children:"Weak model individually have limited predictive power, but by combining them, the ensemble can capture a wider range of patterns and relationships in the data."}),"\n",(0,t.jsx)(n.p,{children:'It is called "gradient boosting" because it uses an iterative process to gradually improve the model\'s performance. It examines the difference between the predicted and actual values (the residuals) and builds a new model that tries to reduce these residuals. This new model is added to the ensemble, and the process repeats.'}),"\n",(0,t.jsxs)(n.p,{children:["Each new weak learner is trained to specifically target the errors or residuals that the ensemble has not yet captured accurately. So, we make sure a mistake we made before are corrected, this is called ",(0,t.jsx)(n.strong,{children:"sequential correction"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Iteration of gradient boosting",src:i(41778).Z+"",width:"300",height:"228"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://vitalflux.com/gradient-boosting-algorithm-concepts-example/",children:"https://vitalflux.com/gradient-boosting-algorithm-concepts-example/"})]}),"\n",(0,t.jsx)(n.h3,{id:"gradient-boosting-process",children:"Gradient Boosting Process"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Initialize the ensemble"})," : Start by initializing the ensemble model with a simple weak learner. A weak learner is a model or algorithm that performs only slightly better than random guessing on a given task. Weak learner is simply a simpler and smaller model, they are characterized by their limited predictive power and simplicity. This could be a decision tree with a small depth or a linear regression model."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compute initial predictions"})," : Use the current ensemble model to make predictions on the training data."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compute residuals"})," : Calculate the residuals, which are the differences between the predicted and actual values of the target variable. These residuals represent the errors made by the current ensemble model. These residuals are calculated by loss function, which is a measure of how well the models perform at one training. Example are MSE, MAE, and cross entropy."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Fit a weak learner to the residuals"})," : We will try to minimize error or correct mistake made by previous model by training new weak learner on the residuals. The goal is to find a model that can predict the residuals more accurately than the previous model. We can also use ",(0,t.jsx)(n.a,{href:"/machine-learning/linear-regression#gradient-descent",children:"gradient descent"})," for this."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update the ensemble"})," : Add the new weak learner to the ensemble. The weak learner will have a paramater called shrinkage parameter or learning rate. The shrinkage parameter controls the contribution of each weak learner. The parameter also used for deciding the learning rate used in gradient descent."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update predictions"})," : Update the predictions of the ensemble by combining the predictions of all the weak learners, including the newly added one."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Iterate"})," : Repeat steps 3-6 for a specified number of iterations or until a stopping criterion is met. In each iteration, the new weak learner focuses on the residuals left by the previous models, gradually improving the ensemble's predictive performance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Finalize the ensemble"})," : Once the desired number of iterations is reached, the final ensemble model is obtained by combining the predictions of all the weak learners in the ensemble."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Prediction"})," : After training, we can then use the final ensemble model to make predictions on new unseen data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Gradient boosting process",src:i(60467).Z+"",width:"802",height:"445"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://datascience.eu/machine-learning/gradient-boosting-what-you-need-to-know/",children:"https://datascience.eu/machine-learning/gradient-boosting-what-you-need-to-know/"})]}),"\n",(0,t.jsx)(n.h3,{id:"xgboost",children:"XGBoost"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extreme Gradient Boosting (XGBoost)"})," is a library that implement of gradient boosting machine that is highly optimized with some extra features (not feature in data). Here are some example :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Regularized Learning"})," : XGBoost includes regularization techniques such as L1 and L2 regularization. In simple term, regularization is a technique to make model prediction simpler by forcing some feature coefficients to be 0. In other word, we exclude some feature consideration for our prediction. The features we are excluding are the one that has low influence toward the overall prediction. This way we can focus on the more important and influential features."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Computation Capabilites"})," : XGBoost supports parallel processing, it optimizes the computation by parallelizing the construction of individual trees and parallelizing the evaluation of split candidates during tree building."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Handling Missing Values"})," : XGBoost has built-in capabilities to handle missing values in the dataset. It automatically learns how to handle missing values in a decision tree by assigning missing values based on available data."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},41778:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/gradient-boosting-iteration-afecd4c2a1cd37036c22560f3fdbdcda.png"},60467:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/gradient-boosting-process-d2a1a4d008404e8af5698d0d9e352cf3.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(67294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);