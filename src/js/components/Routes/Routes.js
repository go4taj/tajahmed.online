import { Switch, Route } from 'react-router-dom';
import {Home} from "@components"
import {AdminLogin} from "@pages"

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
    <Route path="/admin">
      <AdminLogin/>
    </Route>
    {/* <PrivateRoute path="/example-docgen" component={ExampleDocGen} /> */}
    <Route component={PageNotFound} />
    </Switch>)
}

export default Routes;