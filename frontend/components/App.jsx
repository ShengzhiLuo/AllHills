import React from "react";
import { Link, Switch, Route} from "react-router-dom";
import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './splash/footer';
import Splash from './splash/splash';

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route path='/' component={Splash} />
        </Switch>
        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;