const { getRestaurantsByLocation,getRestaurantsNearMe,getRestaurant } = require("../api/apiController");

module.exports = app => {
    app.post(`/api/food`, getRestaurantsByLocation);
    app.post(`/api/foodclosetome`, getRestaurantsNearMe);
    app.post(`/api/specrestaurant`, getRestaurant);
};
