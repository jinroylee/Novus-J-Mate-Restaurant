import React from 'react';
import '../src/Front-End/scss/App.scss';

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import NavBar from "./Front-End/pages/00_nav_bar";
import LogInView from "./Front-End/pages/01_log_in";
import SignUpView from "./Front-End/pages/02_sign_up";
import UserProfile from "./Front-End/pages/03_user_profile";
import Dashboard from "./Front-End/pages/04_dashboard";
import MainSearchCriterias from "./Front-End/pages/05_main_search_criterias";
import RestaurantResults from "./Front-End/pages/06_restaurant_results";
import RestaurantDetails from "./Front-End/pages/07_restaurant_details";
import FindFriends from "./Front-End/pages/08_find_friends";
import ProfileOfFriends from "./Front-End/pages/09_profile_of_friends";
import Analytics from "./Front-End/pages/10_analytics";
import FrontPage from './Front-End/pages/11_front_page';



function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar />

                <Routes>
                    <Route path={"/"} element={<FrontPage></FrontPage>}></Route>
                    <Route path={"/log-in"} element={<LogInView></LogInView>}></Route>
                    <Route path={"/sign-up"} element={<SignUpView></SignUpView>}></Route>
                    <Route path={"/user-profile"} element={<UserProfile></UserProfile>}></Route>
                    <Route path={"/dashboard"} element={<Dashboard></Dashboard>}></Route>
                    <Route path={"/main-search-criteria"} element={<MainSearchCriterias></MainSearchCriterias>}></Route>
                    <Route path={"/restaurant-results"} element={<RestaurantResults></RestaurantResults>}></Route>
                    <Route path={"/restaurant-results/1"} element={<RestaurantDetails></RestaurantDetails>}></Route>
                    <Route path={"/restaurant-results/2"} element={<RestaurantDetails></RestaurantDetails>}></Route>
                    <Route path={"/restaurant-results/3"} element={<RestaurantDetails></RestaurantDetails>}></Route>
                    <Route path={"/restaurant-details"} element={<RestaurantDetails></RestaurantDetails>}></Route>
                    <Route path={"/find-friends"} element={<FindFriends></FindFriends>}></Route>
                    <Route path={"/profile-of-friends"} element={<ProfileOfFriends></ProfileOfFriends>}></Route>
                    <Route path={"/analytics"} element={<Analytics></Analytics>}></Route>

                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
