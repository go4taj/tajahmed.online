import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
  useQuery
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://db.tajahmed.online/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret':process.env.HASURA_ADMIN_SECRET,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

let QUERIES = {
  GET_ARTICLES:gql`
    query GetBlogs($type:String) {
      articles(where:{type:{_eq:$type}}){
        type,
        content
      }
    }
  `
}

export let getBlogs = ()=>{
  return useQuery(QUERIES.GET_ARTICLES,{variables:{type:"blog"}});
}

export default client;