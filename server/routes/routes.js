const { getRestaurantsByLocation,getRestaurantsNearMe,getRestaurant,getCuisines } = require("../api/apiController");

module.exports = app => {
    app.post(`/api/food`, getRestaurantsByLocation);
    app.post(`/api/foodclosetome`, getRestaurantsNearMe);
    app.post(`/api/specrestaurant`, getRestaurant);
    app.post(`/api/cuisines`, getCuisines);
};
