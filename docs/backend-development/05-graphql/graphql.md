---
slug: /backend-development/graphql
id: graphql
title: GraphQL
description: GraphQL
---

**Main Source :**

- **[GraphQL Explained in 100 Seconds - Fireship](https://youtu.be/eIQh02xuVw4?si=NZATScKXA3s8jYv9)**
- **[What is GraphQL? GraphQL introduction - Apollo Blog](https://www.apollographql.com/blog/graphql/basics/what-is-graphql-introduction/)**

**GraphQL** is a query language specifically designed for querying APIs data, GraphQL accesses resource on server in a similar way we query a database. Compared to [REST API](/backend-development/rest-api) that accesses resource in a fixed way (e.g. GET /books endpoint), GraphQL allows clients to request specific data from the server in a flexible way by defining the structure of the response they need.

GraphQL typically uses [HTTP](/computer-networking/http-https#http) as the transport layer, same as [SOAP](/backend-development/soap), the request is encapsulated in HTTP POST method. GraphQL respond with HTTP response followed by a [JSON](/frontend-web-development/json) data object that contains the data requested by client.

### Schema

We need to define schema, it serves as contract for the client and the server for querying and manipulating data.

Here is an example of schema in GraphQL :

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  post(id: ID!): Post
}

type Mutation {
  createUser(name: String!, email: String!): User
  createPost(title: String!, content: String!, authorId: ID!): Post
}
```

A data type is defined using `type` keyword followed with its name. In this example, a type `User` contains fields `id`, `name`, `email`, and `posts`, each has its own type as well. The exclamation sign indicate the field is non-null or required. The square bracket indicate a relationship between data types (e.g. the `User` has relation with `Post`).

The `Query` (not reserved word) is the actual query we are defining, to define a query, we include field (e.g. `user` and `post`) with argument and we specify the type we are returning. The argument can be used to filter or to query specific data.

The `Mutation` (also not reserved word) is the mutation we are defining. Mutation is an operation to modify data on server including create, update, or delete data. We define the `createUser` to take name and email.

The type name and its field has no actual meaning, they are just random word. The way of how the server decides when to query and when to mutate data is included in the request.

### GraphQL Request

GraphQL consist of the following structure :

1. **Operation Type** : GraphQL has 2 type of operation :

   - **Query** : Request data from a server (read operation)
   - **Mutation** : Modify data on the server such as create, update, or delete (write operation)

2. **Operation Name (optional)** : Text specified to describe the action.

3. **Variables (optional)** : We can include our variable and it will be defined with `$`

4. **Query Fields** : The main part of a GraphQL request, these fields represent the data that the client wants to retrieve from the server. The client can specify the fields it needs, including nested fields and relationships which mean the data are related.

5. **Arguments (optional)** : Arguments are used to filter or provide additional information to the server to customize the response. Arguments are passed using the variable we defined before.

6. **Directive (optional)** : Directives enable clients to modify the execution behavior of a GraphQL query. They provide additional instructions to the server about how to handle certain parts of the query. Directive can only modify functionality of an operation compared to argument that capable of modifying the data received.

Here is an example of a GraphQL query (different from the schema above) :

```graphql
query ($userId: ID!, $withPosts: Boolean!) {
  user(id: $userId) {
    name
    email @include(if: $withPosts)
  }
}
```

We defined the variable `userId` with types of `ID!`. The query fields is based on the server schema, we also specify argument id that uses the `userId` variable defined before. `user` field includes name and email nested on it. The email field uses directive `@include` which specify the response should include something, in this case it should include posts.

By making the request flexible, GraphQL help to address REST API issues, sometimes the client may receive some data they don't need in a GET request, this is called **overfetch**. Another the client may not receive enough data in a single GET request, therefore making him need to make another network request which can waste resource, this is called **underfetch**.
