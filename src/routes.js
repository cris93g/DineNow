import React from "react";
import { Switch, Route } from "react-router-dom"
import Restaurants from "./Views/Restaurants/Restaurants"
import Search from "./components/Search/Search"
// import SearchByLat from "./components/SearchByLat/SearchByLat"
import NearMe from "./Views/NearMe/NearMe"
import Home from "./Views/Home/Home"
import SpecificRestaurant from "./Views/SpecificRestaurant/SpecificRestaurant"
import Loader from "../src/components/Loader/Loader"
export default (
    <Switch>
         <Route component={Home} exact path="/" />
        <Route component={Search} path="/search" />
        {/* <Route component={SearchByLat} path="/searchlat" /> */}
        <Route component={Restaurants} path="/city/:cityName" />
        <Route component={NearMe} path="/near/:lat/:lon" />
        <Route component={SpecificRestaurant} path="/restaurant/:cityId" />
        <Route component={Loader} path="/loader" />
    </Switch>);