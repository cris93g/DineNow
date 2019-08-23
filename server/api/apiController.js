const axios = require("axios");
const { API } = process.env;

let getRestaurantsByLocation = async (req, res) => {
   
    let { loc } = req.body;
  
	let results = await axios.get(
		`https://developers.zomato.com/api/v2.1/locations?query=${loc}`,
		{
			headers: {
				"user-key": API
			}
		}
	);

	let cityId = results.data.location_suggestions[0].entity_id;
	let cityType = results.data.location_suggestions[0].entity_type;

	let res2 = await axios.get(
		`https://developers.zomato.com/api/v2.1/location_details?entity_id=${cityId}&entity_type=${cityType}`,
		{
			headers: {
				"user-key": API
			}
		}
	);
	let info = res2.data;

	if (info) {
		res.status(200).json(info);
	}
};

let getRestaurantsNearMe = async (req,res) =>{
    let {la} = req.body;
    let {lo} = req.body;
  
    let results = await axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${la}&lon=${lo}`,
    {
        headers: {
            "user-key": API
        }
    })
    let info = results.data.nearby_restaurants;

	if (info) {
		res.status(200).json(info);
	}
}

let getRestaurant = async (req,res) =>{
	
	let {id} = req.body;

	let results = await axios.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
	{
		headers: {
            "user-key": API
        }
	})
	let info = results.data;

	if (info) {
		res.status(200).json(info);
	}
}

let getCuisines = async (req,res) =>{
	let {loc}=req.body
	let results = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${loc}`,
	{
		headers:{
			"user-key":API
		}
	})

	let info = results.data;

	if (info) {
		res.status(200).json(info);
	}
}
let getSearchSpecific = async (req,res) =>{
	let {cityId} = req.body;
	let {input} = req.body;
	console.log(req.body.cityId)
	console.log(req.body.input)

	let results = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${input}&sort=rating&order=desc`,{
		headers:{
			"user-key":API
		}	
	})
	let info = results.data;
	console.log(info)
if (info) {
	res.status(200).json(info);
}
}
module.exports = {
    getRestaurantsByLocation,
	getRestaurantsNearMe,
	getRestaurant,
	getCuisines,
	getSearchSpecific
};
