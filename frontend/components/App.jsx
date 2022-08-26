import React from "react";
import { Link, Switch, Route} from "react-router-dom";
import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './splash/footer';
import SplashContainer from './splash/splash_container';
import ExploreContainer from './explore/explore_container';
import TrailOneContainer from "./trails/trail_one_container";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal/>
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route path='/trails/:trailId' component={TrailOneContainer}/>
            <Route path='/explore' component={ExploreContainer} />
            <Route path='/trails' component={ExploreContainer} />
            <Route path='/' component={SplashContainer} />
        </Switch>
        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;