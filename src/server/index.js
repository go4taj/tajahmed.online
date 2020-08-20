import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://db.tajahmed.online/v1/graphql',
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