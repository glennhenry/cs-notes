"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4299],{57713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const a={slug:"/computer-and-programming-fundamentals/object-oriented-programming",id:"object-oriented-programming",title:"Object-Oriented Programming",description:"Object-Oriented Programming"},r=void 0,c={id:"computer-and-programming-fundamentals/object-oriented-programming/object-oriented-programming",title:"Object-Oriented Programming",description:"Object-Oriented Programming",source:"@site/docs/computer-and-programming-fundamentals/11-object-oriented-programming/object-oriented-programming.md",sourceDirName:"computer-and-programming-fundamentals/11-object-oriented-programming",slug:"/computer-and-programming-fundamentals/object-oriented-programming",permalink:"/cs-notes/computer-and-programming-fundamentals/object-oriented-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-and-programming-fundamentals/11-object-oriented-programming/object-oriented-programming.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1713177207,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{slug:"/computer-and-programming-fundamentals/object-oriented-programming",id:"object-oriented-programming",title:"Object-Oriented Programming",description:"Object-Oriented Programming"},sidebar:"sidebar",previous:{title:"Imperative & Procedural Programming",permalink:"/cs-notes/computer-and-programming-fundamentals/imperative-procedural-programming"},next:{title:"Declarative & Functional Programming",permalink:"/cs-notes/computer-and-programming-fundamentals/declarative-functional-programming"}},o={},l=[{value:"Class &amp; Object",id:"class--object",level:3},{value:"Object",id:"object",level:4},{value:"Class",id:"class",level:4},{value:"Class vs Object",id:"class-vs-object",level:5},{value:"Concepts",id:"concepts",level:3},{value:"Abstraction",id:"abstraction",level:4},{value:"Interface",id:"interface",level:5},{value:"Abstract Classes",id:"abstract-classes",level:5},{value:"Encapsulation",id:"encapsulation",level:4},{value:"Visibility Modifier",id:"visibility-modifier",level:5},{value:"Inheritance",id:"inheritance",level:4},{value:"Polymorphism",id:"polymorphism",level:4}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Object-oriented_programming",children:"Object-oriented programming - Wikipedia"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",children:"Object Oriented Programming (OOPs) Concept in Java - GeeksForGeeks"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Object-Oriented Programming (OOP)"})," is a programming paradigm revolving around writing code that focuses on organizing it around ",(0,s.jsx)(n.strong,{children:"objects"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"class--object",children:"Class & Object"}),"\n",(0,s.jsx)(n.h4,{id:"object",children:"Object"}),"\n",(0,s.jsxs)(n.p,{children:["Objects are the building block of OOP, object is a representation of an entity which has its own characteristics and behavior. The characteristics of an object is called ",(0,s.jsx)(n.strong,{children:"attributes"}),", ",(0,s.jsx)(n.strong,{children:"fields"}),", or ",(0,s.jsx)(n.strong,{children:"properties"})," and the behavior or the action it can perform is called ",(0,s.jsx)(n.strong,{children:"methods"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In OOP, we model an object based on real-world entities, consider making a ",(0,s.jsx)(n.code,{children:"Bird"})," object."]}),"\n",(0,s.jsx)(n.p,{children:"A bird can have attributes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Species"}),' : The species attribute represents the specific type of the bird, such as "sparrow," "eagle," or "parrot."']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Color"}),' : The color attribute represents the color of the bird, such as "red," "blue," or "green."']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Weight"})," : The weight attribute represents the mass of the bird. It provides information about the bird's size and physical condition."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Attributes provide a way to store data and represent the state of an object."}),"\n",(0,s.jsx)(n.p,{children:"A bird can have methods :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fly"})," : A bird can fly, a fly method simulates the bird's ability to fly."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sing"})," : The sing method represents the bird's ability to produce sounds or songs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Eat"})," : The eat method simulates the bird's feeding behavior."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Methods are the procedures or functions associated with an object. They define the behavior or actions that an object can perform."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Example of a Pikachu object in Pok\xe9mon",src:t(99441).Z+"",width:"604",height:"267"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://blog.glugmvit.com/oops/",children:"https://blog.glugmvit.com/oops/"})," (cropped)"]}),"\n",(0,s.jsx)(n.h4,{id:"class",children:"Class"}),"\n",(0,s.jsxs)(n.p,{children:["In OOP, a ",(0,s.jsx)(n.strong,{children:"class"})," defines a set of attributes and methods an object can have. A class can be thought as the blueprint or template to make an object. An object needs to created from a class, the using a process called ",(0,s.jsx)(n.strong,{children:"instantiation"}),". When an object is instantiated from a class, it is referred to as an instance or an object of that class. Class provide a generalized description of what objects of that class should look like."]}),"\n",(0,s.jsx)(n.h5,{id:"class-vs-object",children:"Class vs Object"}),"\n",(0,s.jsxs)(n.p,{children:["Consider a class ",(0,s.jsx)(n.code,{children:"Car"}),", it is a blueprint to create a car object. Car class might have attributes such as model and year, which represent the specific model and manufacturing year of a car. It could also have methods like ",(0,s.jsx)(n.code,{children:"start_engine()"}),", ",(0,s.jsx)(n.code,{children:"accelerate()"}),", and ",(0,s.jsx)(n.code,{children:"brake()"})," to represent the actions a car can perform."]}),"\n",(0,s.jsxs)(n.p,{children:["Whereas, an object is the actual content of a class, we should define the actual data and behavior it has. For example, we can make object called ",(0,s.jsx)(n.code,{children:"MyCar"}),", which is the instance of ",(0,s.jsx)(n.code,{children:"Car"})," class. It is created based on the ",(0,s.jsx)(n.code,{children:"Car"})," class blueprint. For instance, the ",(0,s.jsx)(n.code,{children:"MyCar"})," object could have attribute values like ",(0,s.jsx)(n.code,{children:'model="Camry"'}),", and ",(0,s.jsx)(n.code,{children:"year=2022"}),", indicating that it is a Toyota Camry manufactured in 2022. The object will have method defined in the ",(0,s.jsx)(n.code,{children:"Car"})," class, such as ",(0,s.jsx)(n.code,{children:"start_engine()"})," to start the car's engine, ",(0,s.jsx)(n.code,{children:"accelerate()"})," to increase its speed, or ",(0,s.jsx)(n.code,{children:"brake()"})," to apply the brakes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"A person class with object associated with it",src:t(51458).Z+"",width:"782",height:"412"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://techvidvan.com/tutorials/java-class/",children:"https://techvidvan.com/tutorials/java-class/"})," (with modification)"]}),"\n",(0,s.jsx)(n.h3,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsx)(n.p,{children:'The principles and concepts of OOP are designed to mimic real-world objects and their interactions. For example, in a banking system, you can have classes like "Customer," "Account," and "Transaction."'}),"\n",(0,s.jsx)(n.p,{children:"In customer class we might define attributes and methods such as :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Attributes : name, address, contact information, unique customer ID"}),"\n",(0,s.jsxs)(n.li,{children:["Behaviors : ",(0,s.jsx)(n.code,{children:"getCustomerID()"}),", ",(0,s.jsx)(n.code,{children:"getName()"}),", ",(0,s.jsx)(n.code,{children:"getAddress()"}),", ",(0,s.jsx)(n.code,{children:"getContactInfo()"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By organizing code using OOP, we can achieve a natural and intuitive way to structure and manage software systems."}),"\n",(0,s.jsx)(n.p,{children:"OOP doesn't only revolve around classes and objects, there are more concepts in OOP."}),"\n",(0,s.jsx)(n.h4,{id:"abstraction",children:"Abstraction"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Abstraction"})," is the process of hiding the internal details of a system and instead presenting a simplified and high-level view. This allows users (developers) to focus less on the internal workings and rely on what is presented. Not only does it simplify things, but it also reduces the possibility of mistakes made by users, as everything is handled behind the scenes and they only need to interact with the abstraction."]}),"\n",(0,s.jsx)(n.p,{children:"In OOP, abstraction is achieved through many things."}),"\n",(0,s.jsx)(n.h5,{id:"interface",children:"Interface"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Interface"})," is a set of contract that defines a set of attributes and methods that a class must implement. It defines what are the attributes and methods a class should have. An interface doesn't provide concrete example of how a class should look like, it simply provides rules that a class should follow."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, an interface ",(0,s.jsx)(n.code,{children:"Vehicle"})," is a set of contracts that defines the attributes and methods that a class considered as a vehicle should implement. Class such as ",(0,s.jsx)(n.code,{children:"Car"})," or ",(0,s.jsx)(n.code,{children:"Bike"})," is considered as a vehicle. A ",(0,s.jsx)(n.code,{children:"Vehicle"})," interface may have a ",(0,s.jsx)(n.code,{children:"accelerate()"})," method, which is used to increase the speed of the vehicle. However, each vehicle may have different behavior on how to accelerate, for instance, car accelerates by adjusting engine power, while a bike accelerate by increasing the pedaling force."]}),"\n",(0,s.jsx)(n.p,{children:"An interface, which doesn't provide any concrete example of a class can't be instantiated directly, an interface must be implemented by a class."}),"\n",(0,s.jsx)(n.p,{children:"In abstraction, an interface provide a way to focus on the characteristics of a class. We don't care how a car or a bike differs in terms of accelerating, what we care is they must be able to accelerate."}),"\n",(0,s.jsx)(n.h5,{id:"abstract-classes",children:"Abstract Classes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Abstract Classes"})," is similar to interface with some distinctions and additional features compared to interfaces. An interface, can't have any default implementation at all, it can only declare what a class should look like. On the other hand, an abstract class can have default or partial implementation of a class."]}),"\n",(0,s.jsx)(n.p,{children:"Abstract class can't be instantiated directly and is meant to serve as a base for concrete classes. The ability to declare default implementation makes abstract classes have several advantages over an interface. An abstract class can define common behavior and characteristics that are shared across its subclasses."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Abstraction",src:t(25544).Z+"",width:"767",height:"374"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://www.scaler.com/topics/abstraction-in-oop/",children:"https://www.scaler.com/topics/abstraction-in-oop/"})]}),"\n",(0,s.jsx)(n.h4,{id:"encapsulation",children:"Encapsulation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Encapsulation"})," is the process of encapsulating attributes or methods of an object. It promotes the concept of ",(0,s.jsx)(n.strong,{children:"visibility modifier"}),". The main idea of encapsulation is to hide an object's state or behavior from external code."]}),"\n",(0,s.jsx)(n.h5,{id:"visibility-modifier",children:"Visibility Modifier"}),"\n",(0,s.jsx)(n.p,{children:"Visibility modifier is a keyword that determines the accessibility and visibility of class members. A class member refers to the components of a class, including its attributes and methods."}),"\n",(0,s.jsx)(n.p,{children:"There are typically three visibility modifiers used in OOP :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Public"})," : A public keyword is used to make class members accessible from anywhere. External code can interact and modify the detail of an object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Private"})," : A private keyword is used to make class members accessible only within the class in which it is declared. It cannot be accessed or modified from outside the class."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By using private modifier, we can prevent external code from making unauthorized changes or accessing sensitive information. For example, in the image below, we make an object attributes to be private and instead define methods to make them accessible to external code. Inside the method, we can define how should the external code interact with it."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Encapsulation",src:t(80393).Z+"",width:"757",height:"357"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://www.crio.do/blog/encapsulation-in-java/",children:"https://www.crio.do/blog/encapsulation-in-java/"})]}),"\n",(0,s.jsxs)(n.p,{children:["With this concept, it is possible that we have class as high-level as ",(0,s.jsx)(n.code,{children:"BankAccount"}),". We will only present the ",(0,s.jsx)(n.code,{children:"deposit"}),", ",(0,s.jsx)(n.code,{children:"withdraw"}),", ",(0,s.jsx)(n.code,{children:"seeBalance"})," method. All the complexity of handling the system is made private. Programmers won't be able to see or use the internal method (unless checking source code directly)."]}),"\n",(0,s.jsx)(n.h4,{id:"inheritance",children:"Inheritance"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Inheritance"})," is a concept in OOP that allows a class to inherit the properties and behaviors of another class. The inherited class is called the ",(0,s.jsx)(n.strong,{children:"superclass"})," (also called a ",(0,s.jsx)(n.strong,{children:"base or parent class"}),") and the class that inherits is called a ",(0,s.jsx)(n.strong,{children:"subclass"})," (also called a ",(0,s.jsx)(n.strong,{children:"derived class or child class"}),")."]}),"\n",(0,s.jsx)(n.p,{children:'The difference between interface and inheritance lies in their respective functionalities. Inheritance enables the acquisition or "copying" of attributes and methods from a class, while interfaces serve as contracts for classes and are particularly suited for scenarios where classes have distinct characteristics. In situations where a class shares the exact implementation of another class but with additional features, inheritance promotes code reuse and the organization of related classes into a hierarchical structure.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Example of a class hierarchy",src:t(22220).Z+"",width:"615",height:"339"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://towardsdatascience.com/how-to-code-inheritance-in-java-beginners-tutorial-in-oop-d0fc0a71be98",children:"https://towardsdatascience.com/how-to-code-inheritance-in-java-beginners-tutorial-in-oop-d0fc0a71be98"})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, in the image below, a ",(0,s.jsx)(n.code,{children:"Dog"})," class may have similar method with the general ",(0,s.jsx)(n.code,{children:"Animal"})," class. The ",(0,s.jsx)(n.code,{children:"Dog"})," class can inherit the ",(0,s.jsx)(n.code,{children:"Animal"})," class, with another method addition, which is the ",(0,s.jsx)(n.code,{children:"bark()"})," method."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Inheritance of an animal and a dog",src:t(75923).Z+"",width:"341",height:"376"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://www.programiz.com/cpp-programming/inheritance",children:"https://www.programiz.com/cpp-programming/inheritance"})]}),"\n",(0,s.jsxs)(n.p,{children:["With the addition of inheritance and interface concept, we can introduce another ",(0,s.jsx)(n.a,{href:"/computer-and-programming-fundamentals/object-oriented-programming#visibility-modifier",children:"visibility modifier"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Protected"})," : A protected keyword is used to make class members accessible within the class where it is declared, as well as in its subclasses (derived classes). In other word, it is a public modifier which is exclusive to a class hierarchy."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"polymorphism",children:"Polymorphism"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Polymorphism"})," is a concept that allows us to treat a single object in different ways. It allows us to have interface with many implementations. Polymorphism is related to the ",(0,s.jsx)(n.a,{href:"/computer-and-programming-fundamentals/object-oriented-programming#interface",children:"interface"})," and ",(0,s.jsx)(n.a,{href:"/computer-and-programming-fundamentals/object-oriented-programming#inheritance",children:"inheritance"})," concept."]}),"\n",(0,s.jsxs)(n.p,{children:["We can define a method that will be implemented by its subclasses. For example, a base class called ",(0,s.jsx)(n.code,{children:"Shape"})," and two derived classes called ",(0,s.jsx)(n.code,{children:"Circle"})," and ",(0,s.jsx)(n.code,{children:"Rectangle"}),". Each derived class has its own implementation of a method called ",(0,s.jsx)(n.code,{children:"calculateArea()"}),". Polymorphism concepts enable us to write a single piece of code that can invoke a function responsible for calculating the area of a shape, regardless of whether the shape is a circle or a rectangle. The specific implementation of ",(0,s.jsx)(n.code,{children:"calculateArea()"})," that will be used for our calculation will be determined dynamically at runtime based on the type of the object being used."]}),"\n",(0,s.jsx)(n.p,{children:"There are two types of polymorphism :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compile-time Polymorphism (Static Polymorphism)"})," : This polymorphism is resolved in compile-time, one of the example is ",(0,s.jsx)(n.strong,{children:"method overloading"}),". It is a phenomenon that occurs when multiple methods with the same name, but different parameters are defined in a class. The appropriate method to be executed is determined at the compile-time based on the number, type, and order of the arguments passed."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, a ",(0,s.jsx)(n.code,{children:"Calculator"})," class that has method to add number, there may be two separate method, where each method differ in how many parameters or how many numbers it can take. Here is an example of code in Kotlin programming language :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"class Calculator {\n    fun add(num1: Int, num2: Int): Int {\n        return num1 + num2\n    }\n    fun add(num1: Int, num2: Int, num3: Int): Int {\n        return num1 + num2 + num3\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Calculator"})," class, we have two method with the same exact name, when we call the ",(0,s.jsx)(n.code,{children:"add()"})," function, depending on the argument we passed in, the appropriate ",(0,s.jsx)(n.code,{children:"add()"})," function which will be called will be determined at compile-time."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Compile-time is period in which code is being translated into machine language that computer can understand."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Runtime Polymorphism (Dynamic Polymorphism)"})," : This polymorphism is resolved in runtime, one of the example is ",(0,s.jsx)(n.strong,{children:"method overriding"}),", which occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The decision of which method implementation will be executed determined at runtime (at the program execution) based on the actual type of the object being referenced."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'// open indicates a class, attributes, or methods is inheritable\nopen class Shape {\n    open fun draw() {\n        println("Drawing a shape.")\n    }\n}\n\n// The ": Shape()" indicates it is inheriting the Shape class\nclass Circle : Shape() {\n    // "override" indicates it is replacing the superclass or the Shape class methods\n    override fun draw() {\n        println("Drawing a circle.")\n    }\n}\n\nclass Rectangle : Shape() {\n    override fun draw() {\n        println("Drawing a rectangle.")\n    }\n}\n\nfun main() {\n    // Instantiating a class is similar to calling a function\n    val shape1: Shape = Circle()\n    val shape2: Shape = Rectangle()\n\n    shape1.draw()   // Calls the draw() method of the Circle class\n    shape2.draw()   // Calls the draw() method of the Rectangle class\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we have a ",(0,s.jsx)(n.code,{children:"Shape"})," superclass with ",(0,s.jsx)(n.code,{children:"Circle"})," and ",(0,s.jsx)(n.code,{children:"Rectangle"})," subclasses. Both classes inherit to ",(0,s.jsx)(n.code,{children:"Shape"})," and implement their own method using the ",(0,s.jsx)(n.code,{children:"override"})," keyword. The ",(0,s.jsx)(n.code,{children:"main()"})," function is the entry point of a Kotlin program, it is where the program starts being executed."]}),"\n",(0,s.jsxs)(n.p,{children:["In the main function, we created two variables which has the type of ",(0,s.jsx)(n.code,{children:"Shape"})," with their own respective implementation, which is the ",(0,s.jsx)(n.code,{children:"Circle"})," and ",(0,s.jsx)(n.code,{children:"Rectangle"})," class for ",(0,s.jsx)(n.code,{children:"shape1"})," and ",(0,s.jsx)(n.code,{children:"shape2"}),", respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"draw()"})," method has three different implementation, the first in the original ",(0,s.jsx)(n.code,{children:"Shape"})," class, the second in the ",(0,s.jsx)(n.code,{children:"Circle"}),", and the third in the ",(0,s.jsx)(n.code,{children:"Rectangle"})," class. The specific implementation which will be used is determined at runtime based on the actual type of the object. For example, ",(0,s.jsx)(n.code,{children:"shape1"})," has the type of ",(0,s.jsx)(n.code,{children:"Shape"}),", but it actually has the value of the ",(0,s.jsx)(n.code,{children:"Circle"})," class. When ",(0,s.jsx)(n.code,{children:"shape1.draw()"})," is called, it will invoke the ",(0,s.jsx)(n.code,{children:"draw()"})," method of the ",(0,s.jsx)(n.code,{children:"Circle"})," class rather than the one in the ",(0,s.jsx)(n.code,{children:"Shape"})," or ",(0,s.jsx)(n.code,{children:"Rectangle"})," class."]}),"\n",(0,s.jsx)(n.p,{children:"Under the hood, the program stores information about the actual type of object at runtime. This information is used to determine the appropriate method to call."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25544:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/abstraction-1be92efa8209c7d148d1fba0e5699e8a.png"},22220:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/class-hierarchy-a6eb7d8bc399c3ad1636e429501cf236.png"},51458:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/class-vs-object-6c355f11514df4284f88b8ccae5a8a38.png"},80393:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/encapsulation-e9834005a21f1956fccee390c56a7023.png"},75923:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/inheritance-c297c16624a40b904bf0406aaf67152a.png"},99441:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/object-example-b09e3c8924f67008d4b1110cbde552ee.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);