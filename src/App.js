import { hot } from 'react-hot-loader/root';
// import { Router } from 'react-router-dom';
// import './lib.scss';
// import Routes from './Routes';
// import StyleWrapper from './StyleWrapper';
// import { Loading } from './components/Atoms';
// import GlobalNavProvider from './contexts/globalNavContext/globalNavContext';
// import {
//   AuthorizedApolloProvider,
//   useAuth0,
//   history,
//   syncAuth0Users
// } from './components/utils';

const App = () => {
  // const { loading, user } = useAuth0();

  // if (process.env.NODE_ENV === 'development') {
  //   syncAuth0Users(user);
  // }

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div>
    <h1>Hello world!!</h1>
  </div>
  );
};

export default hot(App);
