

const app=require('express')()
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const users=[
    {id:123123,name:"hro"},
    {id:0987423,name:"aram"},
    {id:23407392,name:"ais"},
]
const schema=buildSchema(`
type User {
    id:Int
    name: String
  },
type Query{
    hello:[User]
}
input user{
    id:Int
}
type Mutation{
    createuser(id:user):[User]
}
`)
const root={
    hello:function(){
        return users
    },
    createuser:function({id}){
      
            users.push({id:id.id,name:"hrant"})
            return users
    }
}
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true,
    rootValue:root
}))

app.listen(4000,()=>{
    console.log("server startet on port 4000")
})