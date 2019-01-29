# Full stack GraphQl training

### http://localhost:3000/graphql

##### Get all users: 

{
  users {
    id,
    email
  }
}

##### Get specific user:

{
  user(id: "1") {
    email,
    name
  }
}

##### Add user:

mutation {
  addUser(email: "jambon@fefe.com") {
    id,
    email,
    name
  }
}