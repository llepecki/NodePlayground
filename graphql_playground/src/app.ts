import { buildSchema } from "graphql";
import express from "express";
import { graphqlHTTP } from "express-graphql";

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => {
        return "Hello GraphQL!";
    },
};

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }),
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
