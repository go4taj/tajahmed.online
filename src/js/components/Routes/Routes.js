import { Switch, Route } from 'react-router-dom';
import {Home} from "@components"

const PageNotFound = ()=>{
  return (<div>
    <h1>Looks like you are lost. ARE YOU?</h1>
  </div>)
}

let Routes = ()=>{
  return (<Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/home">
      <Home/>
    </Route>
    {/* <PrivateRoute path="/example-docgen" component={ExampleDocGen} /> */}
    <Route component={PageNotFound} />
    </Switch>)
}

export default Routes;