const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const crypto = require('crypto')

const db = {
  users: [
    {
      id: '1',
      email: 'email@gmail.com',
      name: 'momo'
    },
    {
      id: '2',
      email: 'email@gmail.com',
      name: 'momo2'
    }
  ]
}

const schema = buildSchema(`
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addUser(email: String!, name: String): User
  }

  type User {
    id: ID!
    email: String!
    name: String
    avatar: String
  }
`)

const rootValue = {
  users: ()=> db.users,
  user: args => db.users.find(user => user.id === args.id),
  addUser: ({ email, name }) => {
    const user = {
      id: crypto.randomBytes(10).toString('hex'),
      email,
      name
    }

    db.users.push(user)
    return user

  }
}

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

app.listen(3000, ()=>console.log('listen port 3000'))