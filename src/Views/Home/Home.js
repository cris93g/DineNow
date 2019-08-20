import React,{Component} from "react"
import Nav from "../../components/Nav/Nav"
import axios from "axios";
import "./Home.css"

class Home extends Component {
    constructor(props){
                super(props)
                this.state={
                    lat:"",
                    lon:"",
                    rest:[]
                }
                this.getLocation = this.getLocation.bind(this)
                this.showPosition = this.showPosition.bind(this)
                // this.display = this.display.bind(this)
            }
getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
          } else {
           console.log("Geolocation is not supported by this browser.")
          }
        }
showPosition(position) {
    //    this.setState({
    //        lat:position.coords.latitude,
    //        lon:position.coords.longitude
    //    })
    if(this.state.rest.length===0){
    axios.post(`/api/foodclosetome`,{
        la: position.coords.latitude,
        lo: position.coords.longitude
    }).then(response =>{
       this.setState({rest :response.data})

})}
    }



    render() {
        
        const {rest,lat,lon}=this.state
        
        this.getLocation()
        console.log(rest)
        
        return(
            <div>
              {/* <Nav/> */}
            {rest ? (
                rest.map(places =>{
                    return(
                        <div className="cardWrapper">
                            <p>{places.restaurant.name}</p>
                            <p>{places.restaurant.cuisines}</p>
                            <p>{places.restaurant.location.address}</p>
                            <p>{places.restaurant.phone_numbers}</p>
                            <p>average cost for two${places.restaurant.average_cost_for_two}</p>
                            <p>rating {places.restaurant.user_rating.aggregate_rating}/5</p>
                            {places.restaurant.photos? (
places.restaurant.photos.map(images =>{
return(
<div className="picContainer">
<img  className="restpicture" src={images.photo.url}/>
</div>
)
})
                            ):""
                     
                            }
                           
                            <p>{places.restaurant.timings}</p>
                            <hr/>
                        </div>
                    )
                })
                ):
            ""}
            </div>
        )
    }
}

export default Home