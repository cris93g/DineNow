const { getRestaurantsByLocation,getRestaurantsNearMe } = require("../api/apiController");

module.exports = app => {
    app.post(`/api/food`, getRestaurantsByLocation);
    app.post(`/api/foodclosetome`, getRestaurantsNearMe);
};
