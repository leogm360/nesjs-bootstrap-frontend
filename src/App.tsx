import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { ListUsers, CreateUserForm } from "./components";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ListUsers />
      <CreateUserForm />
    </ApolloProvider>
  );
};
