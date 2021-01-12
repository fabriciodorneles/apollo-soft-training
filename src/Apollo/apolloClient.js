import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import {token,url} from './token'

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        lotacao: 1,
        authorization: token
    }
}));

const httpLink = createHttpLink({
    uri: url
})

const cache = new InMemoryCache({
    addTypename: false
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
})

export default apolloClient;
