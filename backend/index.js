// Packages
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
// Modules
import { isConnected } from './db/index.js';
import graphqlSchema from './graphql';



// Run the server
const start = async () => {
    try {
        const app = express();

        const gqlServer = new ApolloServer({
            schema: graphqlSchema
        })

        gqlServer.applyMiddleware({ app })
        await isConnected
        app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000/graphql`))
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

// Let's go!
start()