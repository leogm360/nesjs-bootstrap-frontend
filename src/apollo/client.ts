import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.BROWSER_GRAPHQL_API,
  cache: new InMemoryCache(),
  name: "MAIN_GRAPHQL_API",
});
