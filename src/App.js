import { hot } from 'react-hot-loader/root';
import { NavigationBar } from '@components'
import '@carbon-components';
import './css/lib.css'

const App = () => {
  return (
    <div>
    <h1>Hello world!!</h1>
    <NavigationBar/>
  </div>
  );
};

export default hot(App);
