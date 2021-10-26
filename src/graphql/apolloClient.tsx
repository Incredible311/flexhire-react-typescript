import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache({ freezeResults: false });
const token = "2a3ashhf4o6dos4w";
const apolloClient = new ApolloClient({
  cache,
  uri: "https://api.flexhire.com/api/v1",
  request: (operation) => {
    if (token) {
      operation.setContext({
        headers: {
            'FLEXHIRE-API-KEY': token
        }
      });
    }
  }
});

export default apolloClient;
