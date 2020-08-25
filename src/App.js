import { hot } from 'react-hot-loader/root';
import { History } from '@components'
import '@carbon-components';
import './css/lib.css'
import { ApolloProvider } from '@apollo/react-hooks';
import client from './server'
import { Router } from 'react-router-dom';
import {Routes} from "@components";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={History}>
        <Routes/>
      </Router>
    </ApolloProvider>
  );
};

export default hot(App);
