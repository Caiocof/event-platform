import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pf5dtw1ovd01xte8lg0c7z/master',cache: new InMemoryCache()
})