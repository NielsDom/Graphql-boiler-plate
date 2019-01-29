# Express-graphql boiler

### http://localhost:3000/graphql

##### Get all users: 

```
{
  users {
    id,
    email
  }
}
```

##### Get specific user:

```
{
  user(id: "1") {
    email,
    name
  }
}
```
Or

```
query getUser($id: ID!) {
  user(id: $id){
    email
    name
  }
}
```
Variable ->
```
{
  "id": "2"
}
```

##### Add user:

```
mutation {
  addUser(email: "jambon@fefe.com") {
    id,
    email,
    name
  }
}
```

##### Get specific user crossed queries:

{
  users {
    email
    messages {
      body
    }
  }
}
