const { GraphQLSchema,GraphQLString, GraphQLObjectType } = require("graphql");

const typse=new GraphQLObjectType({
    name:"type",
    fields:()=>({
        name:{type:GraphQLString}
    })
})

const rootquery=new GraphQLObjectType({
    name:"querytype",
    fields:{
        getuser:{
            type:typse,
            resolve(){
                return {name:"hro"}
            }
        }
    }
})
module.exports= new GraphQLSchema({
    query:rootquery
})