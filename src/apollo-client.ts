import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://constellation-eks-qa.ssense.com/graphql",
    cache: new InMemoryCache(),
});

export default client;