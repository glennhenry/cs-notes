"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4656],{84888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(85893),n=a(11151);const i={slug:"/database-system/relational-data",id:"relational-data",title:"Relational Data",description:"Relational Data"},r=void 0,o={id:"database-system/relational-data/relational-data",title:"Relational Data",description:"Relational Data",source:"@site/docs/database-system/01-relational-data/relational-data.md",sourceDirName:"database-system/01-relational-data",slug:"/database-system/relational-data",permalink:"/cs-notes/database-system/relational-data",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/database-system/01-relational-data/relational-data.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/database-system/relational-data",id:"relational-data",title:"Relational Data",description:"Relational Data"},sidebar:"sidebar",previous:{title:"Database System",permalink:"/cs-notes/database-system"},next:{title:"Query Language",permalink:"/cs-notes/database-system/query-language"}},l={},d=[{value:"Tables, Column, Row",id:"tables-column-row",level:3},{value:"Data Types",id:"data-types",level:3},{value:"Primary &amp; Foreign Key",id:"primary--foreign-key",level:3},{value:"Example",id:"example",level:4},{value:"Relationship",id:"relationship",level:4},{value:"Other Keys",id:"other-keys",level:4},{value:"Schema",id:"schema",level:3},{value:"Query",id:"query",level:3},{value:"View",id:"view",level:4},{value:"Operation",id:"operation",level:4}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Relational_database",children:"Relational database - Wikipedia"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Relational_model",children:"Relational model - Wikipedia"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-business-intelligence/mbi/analyze/warehouse-manager/table-relationships.html",children:"Understand and Evaluate Table Relationships - Adobe"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Relational data organizes data according to the principles of the relational model in a relational database management system (RDBMS)."}),"\n",(0,s.jsx)(t.h3,{id:"tables-column-row",children:"Tables, Column, Row"}),"\n",(0,s.jsxs)(t.p,{children:["In a relational database, data is organized into ",(0,s.jsx)(t.strong,{children:"tables"}),". A table is a collection of related data, it contains ",(0,s.jsx)(t.strong,{children:"column"})," (or attributes) and ",(0,s.jsx)(t.strong,{children:"row"})," (or tuple, record)."]}),"\n",(0,s.jsxs)(t.p,{children:["A column has a particular ",(0,s.jsx)(t.strong,{children:"data type"})," (or domain) associated with it. The column represents what kind of data or the specific attribute of the data, such as a person's name, age, or address, in the case of a person table. The columns are given names or label to be identified."]}),"\n",(0,s.jsx)(t.p,{children:"A row entry represent individual instances of data within the table. Each row contains the actual data values for each attribute. For example, in a table representing employees, each row would represent a specific employee, and the columns would contain attributes such as employee ID, name, age, and so on."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Customer table",src:a(9057).Z+"",width:"485",height:"291"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"A customer table containing column CustomerId, FirstName, LastName, and DateCreated."}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://database.guide/what-is-a-table/",children:"https://database.guide/what-is-a-table/"})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Table is also called ",(0,s.jsx)(t.strong,{children:"relations"}),", which consist of rows or formally a set of ",(0,s.jsx)(t.strong,{children:"tuples"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"data-types",children:"Data Types"}),"\n",(0,s.jsx)(t.p,{children:"There are many types of data that can be assigned to specific column, some common data types are :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Integer"})," : Used to store whole numbers without decimal places, such as 1, 10, -5, etc."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Floating-point"})," : Used to store numbers with decimal places, such as 3.14, 10.5, -0.75, etc. The precision and scale of decimal numbers can often be specified."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Character/String"})," : Used to store alphanumeric text, such as names, addresses, or descriptions. The length of the string may be limited or unlimited, typically known as VARCHAR or TEXT data types, respectively."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Date/Time"})," : Used to store dates, times, or both. This includes data types like DATE, TIME, DATETIME, TIMESTAMP, etc., which can represent specific points in time or intervals."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Boolean"})," : Used to store true/false or binary values, representing logical conditions. Some RDBMS doesn't offer boolean data types, we may use Integer (1) to represent true value and Integer (2) to represent false value."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Binary"})," : Used to store binary data, such as images, files, or serialized objects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enumerated Types"})," : Some systems offer the ability to define custom data types with a limited set of predefined values."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"primary--foreign-key",children:"Primary & Foreign Key"}),"\n",(0,s.jsxs)(t.p,{children:["To be able to distinguish between record in a table, each record is associated with a unique identifier called ",(0,s.jsx)(t.strong,{children:"primary key"}),". A primary key can be a simple integer type, or other kind of data types. The point is, we must ensure its uniqueness. A name is probably not a good choice of primary key, because sometimes people can have the same name."]}),"\n",(0,s.jsx)(t.p,{children:"In a relational database, data is organized into table. A database may contain multiple table, each representing a specific entity within the database. Multiple table can be connected to together, this mean we are establishing a relationship between particular data across multiple tables."}),"\n",(0,s.jsxs)(t.p,{children:["The most common way to connect tables is by using primary key and ",(0,s.jsx)(t.strong,{children:"foreign key"})," relationships. A primary key in one table serves as a unique identifier for each record, and a foreign key in another table references that primary key to establish a relationship between the two tables."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["For example, let's consider two tables : ",(0,s.jsx)(t.code,{children:"Customers"})," and ",(0,s.jsx)(t.code,{children:"Orders"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"Customers"})," table maintains a collection of customers, it has a primary key column called ",(0,s.jsx)(t.code,{children:"CustomerID"})," and another column containing the customer's name."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"Orders"})," table contains order data, it has primary key column called ",(0,s.jsx)(t.code,{children:"OrderID"})," and another column ",(0,s.jsx)(t.code,{children:"Item ordered"}),", which specify particular item that was ordered."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Customer order table 1",src:a(42675).Z+"",width:"211",height:"240"})}),"\n",(0,s.jsx)(t.p,{children:"An order is obviously ordered by a customer, it make sense to also store which customer placed the order. Let's modify the table."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Customer order table 2",src:a(48312).Z+"",width:"498",height:"242"})}),"\n",(0,s.jsxs)(t.p,{children:["Now the order table has an information about which customer ordered the item. However, we need to include more information into the ",(0,s.jsx)(t.code,{children:"Orders"})," table, and this information is from the ",(0,s.jsx)(t.code,{children:"Customers"})," table. This lead to ",(0,s.jsx)(t.strong,{children:"data redundancy"})," in the ",(0,s.jsx)(t.code,{children:"Orders"})," table."]}),"\n",(0,s.jsxs)(t.p,{children:["Instead of storing customer information directly in the ",(0,s.jsx)(t.code,{children:"Orders"})," table, we can use a foreign key column in the ",(0,s.jsx)(t.code,{children:"Orders"})," table to refer to some customer in the ",(0,s.jsx)(t.code,{children:"Customers"})," table. This way, we will know which customer is associated with specific order without needing to duplicate the customer data in the ",(0,s.jsx)(t.code,{children:"Orders"})," table. So, let's modify the table again."]}),"\n",(0,s.jsxs)(t.p,{children:["We removed the column ",(0,s.jsx)(t.code,{children:"Ordered by Customer (name)"})," and only preserve the ",(0,s.jsx)(t.code,{children:"Ordered by Customer (id)"})," column. This table is much more efficient than the previous table. When we process the table and we want to know who ordered an item, we will look at the foreign key column. The foreign key will guide us to the primary key of the ",(0,s.jsx)(t.code,{children:"Customers"})," table."]}),"\n",(0,s.jsx)(t.p,{children:"In some case, when the primary key is a simple data such as integer ID, we will also save more space. This is because an integer data is smaller than storing the name of customer, which is a string data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Customer order table 3",src:a(52495).Z+"",width:"577",height:"241"})}),"\n",(0,s.jsxs)(t.p,{children:["Furthermore, as the row and column of a table increase, the use of foreign key becomes even more useful to reduce duplicate data. Also, maintaining multiple table with the same data can increase the chance of ",(0,s.jsx)(t.strong,{children:"data inconsistency"}),", in which multiple instance of same data in a database or system do not match or are contradictory. If we modify data on the ",(0,s.jsx)(t.code,{children:"Customers"})," table, we must also modify the ",(0,s.jsx)(t.code,{children:"Orders"})," table as well. However, this introduces overhead when we modify data, imagine having to modify 10 tables just to modify a single entry of a table."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Another example of table with foreign key",src:a(69532).Z+"",width:"572",height:"367"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Another example of table with foreign key"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://www.thecrazyprogrammer.com/2019/04/difference-between-primary-key-and-foreign-key.html",children:"https://www.thecrazyprogrammer.com/2019/04/difference-between-primary-key-and-foreign-key.html"})]}),"\n",(0,s.jsx)(t.h4,{id:"relationship",children:"Relationship"}),"\n",(0,s.jsx)(t.p,{children:"Through the use of primary and foreign keys, there are different types of relationship that may be achieved :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"One-to-One (1:1)"})," : Each record in one table is associated with exactly one record in another table, and vice versa."]}),"\n",(0,s.jsx)(t.p,{children:"A person can have only one driver\u2019s license number, and a driver\u2019s license number belongs to only person."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["One-to-Many (1",":N",")"]})," : Each record in one table can be associated with multiple records in another table, while each record in the other table is associated with only one record in the first table."]}),"\n",(0,s.jsx)(t.p,{children:"An order can contain many items, but an item belongs to a single order. In this case, the orders table is the one side and the items table is the many sides."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["Many-to-Many (N",":M",")"]})," : Multiple records in one table can be associated with multiple records in another table. This type of relationship is typically implemented using an intermediary table that holds the associations between the two tables."]}),"\n",(0,s.jsx)(t.p,{children:"A product can belong to many categories, and a category can contain many products."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Table relationship",src:a(89579).Z+"",width:"659",height:"666"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-business-intelligence/mbi/analyze/warehouse-manager/table-relationships.html",children:"https://experienceleague.adobe.com/docs/commerce-business-intelligence/mbi/analyze/warehouse-manager/table-relationships.html"})]}),"\n",(0,s.jsx)(t.h4,{id:"other-keys",children:"Other Keys"}),"\n",(0,s.jsx)(t.p,{children:"There are other keys in relational model :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Composite Key"})," : A composite key is a key that consists of two or more columns in a table. It is used when there are no single attributes that can uniquely identify a record, but the combination of multiple attributes can."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Compound Key"})," : A composite key, where one of the column is a foreign key."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Candidate Key"})," : A candidate key represent a column that can be used as primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"schema",children:"Schema"}),"\n",(0,s.jsx)(t.p,{children:"A database schema is a logical blueprint or structure that defines the organization, relationships of the database in an RDBMS. It specifies the tables, columns, data types, and relationships between tables."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Customers, employees, products, and orders schema",src:a(50124).Z+"",width:"533",height:"410"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://planetscale.com/blog/schema-design-101-relational-databases",children:"https://planetscale.com/blog/schema-design-101-relational-databases"})]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if we were to make a ",(0,s.jsx)(t.code,{children:"Customers"})," table, it should consist of column ",(0,s.jsx)(t.code,{children:"customerID"})," with ",(0,s.jsx)(t.code,{children:"Int"})," data types, ",(0,s.jsx)(t.code,{children:"firstName"})," with ",(0,s.jsx)(t.code,{children:"String"})," data types, and so on. The ",(0,s.jsx)(t.code,{children:"customerID"})," should be the foreign key of the ",(0,s.jsx)(t.code,{children:"Orders"})," table, creating a one-to-one relationship."]}),"\n",(0,s.jsx)(t.h3,{id:"query",children:"Query"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Query"})," is a request or command made to retrieve or manipulate data stored in a database. It is a structured statement or set of instructions written in a ",(0,s.jsx)(t.a,{href:"/database-system/query-language",children:"database query language"}),", used to communicate with an RDBMS."]}),"\n",(0,s.jsx)(t.p,{children:"While querying, we can retrieve data based on specific criteria. For example, a query can be used to retrieve all customers who have made a purchase in the last month."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Example of query",src:a(15628).Z+"",width:"542",height:"455"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://manifold.net/doc/mfd9/queries.htm",children:"https://manifold.net/doc/mfd9/queries.htm"})]}),"\n",(0,s.jsxs)(t.p,{children:["In the image above, we are trying to retrieve data from the ",(0,s.jsx)(t.code,{children:"Employees"})," table. The command used is ",(0,s.jsx)(t.code,{children:"SELECT * FROM [Employees]"}),". In short, the ",(0,s.jsx)(t.code,{children:"SELECT"})," statement indicates we are going to retrieve data, the ",(0,s.jsx)(t.code,{children:"*"})," is a shorthand that represent all the available row in the table, and the ",(0,s.jsx)(t.code,{children:"FROM [Employees]"})," means we are retrieving the data from the ",(0,s.jsx)(t.code,{children:"Employees"}),' table. Combining them all together, using that command is the equivalent of saying "Retrieve all the row from Employees table". The database engine will then return the requested data, which includes all the rows and columns present in the ',(0,s.jsx)(t.code,{children:"Employees"})," table."]}),"\n",(0,s.jsx)(t.h4,{id:"view",children:"View"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"View"})," is a virtual table that is derived from querying one or more existing tables or other views. It does not store any data itself but instead provides a way to present data from underlying tables in a customized or simplified manner. A view can be seen as a saved query that can be used like a table in subsequent queries, but it does not contain its own data. Database view can be thought as the summary of a series of table in a database, providing a way for us to see the overall data."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Database view",src:a(17322).Z+"",width:"551",height:"374"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://aristeksystems.com/blog/database-views-what-you-need-to-know/",children:"https://aristeksystems.com/blog/database-views-what-you-need-to-know/"})]}),"\n",(0,s.jsx)(t.h4,{id:"operation",children:"Operation"}),"\n",(0,s.jsx)(t.p,{children:"We can perform various operation on our query, some examples are :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Projection"})," : Specifies the columns to be included in the query result."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Selection"})," : Specifies the conditions or criteria to filter the rows to be included in the query result."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sorting"})," : Specifies the order in which the query results should be arranged. It can be ascending (smallest to largest) or descending (largest to smallest) based on one or more columns."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Aggregation"})," : Performs calculations on a set of values, such as calculating the sum, average, count, minimum, or maximum values from a column or group of rows."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Union"})," : Combines the results of two or more queries into a single result set, removing duplicate rows."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Intersection"})," : Retrieves only the common rows between two or more queries, keeping only the rows that appear in all result sets."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["More about ",(0,s.jsx)(t.a,{href:"/database-system/query-language#operation",children:"operation"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},69532:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/another-example-f860db302d3923d7790185610f9babc2.png"},42675:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},48312:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/customer-order-table-2-ed1858774225fcb791eac5d5e54907d4.png"},52495:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/customer-order-table-3-6a5109d9a607a6f73d4bb2a5a662612e.png"},9057:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/customer-table-eb7f62dcacae8446bbd4ab5c65969598.png"},17322:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/database-view-ee23459487f7c418dfc31179a983c21d.png"},15628:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/query-example-8f301376dedb278fe5cc52130eb65be4.png"},50124:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/schema-8a40fda75bf18746ccdf3018a3609917.png"},89579:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/table-relationship-7b0a30e218be5adfc5c8f319de0186c1.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var s=a(67294);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);