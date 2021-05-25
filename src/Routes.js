import React from "react";
import { Route, Switch } from "react-router-dom";
import userSignup from "./views/authSreens/userSignup";
import emailVerification from "./views/authSreens/emailVerification";
import userLogin from "./views/authSreens/userLogin";
import createPin from "./views/authSreens/createPin";
import forgotPassword from "./views/authSreens/forgotPassword"
import resetPassword from './views/authSreens/resetPassword'
import resetWaiting from './views/authSreens/resetWaiting'
import Dashboard from "./components/Dashboard";
import TableComponent from "./components/Table/TableComponent";
import ResetWord from './components/ResetWord'
import Sidebar from './components/Sidebar'


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={userSignup} />
      <Route exact path="/otp" component={emailVerification} />
      <Route exact path="/login" component={userLogin} />
      <Route exact path="/createPin" component={createPin} />
      <Route exact path="/reset" component={resetWaiting} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/table" component={TableComponent} />
      <Route exact path='/forgot' component={forgotPassword}/>
      <Route exact path='/password' component={ResetWord}/>
      <Route exact path='/resetForm' component={resetPassword}/>
      <Route exact path='/sidebar' component={Sidebar}/>
    </Switch>
  );
}

export default Routes;
