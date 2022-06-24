import { ApolloClient, InMemoryCache } from "@apollo/client";

const viteEnv = import.meta.env
export const client = new ApolloClient({
    uri: viteEnv.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${viteEnv.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()
})