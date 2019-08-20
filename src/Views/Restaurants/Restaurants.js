import React,{Component} from "react"
import axios from "axios"
import "./Restaurant.css"
class Restaurants extends Component {
    constructor(props){
        super(props)
        this.state ={
            rest:[]
        }
    }
    componentDidMount(){
        axios.post(`/api/food`
        , {
            loc : this.props.match.params.cityName
        }
        ).then(response => {
            this.setState({ rest: response.data.best_rated_restaurant });
        });
    }
    render(){
        console.log(this.props.match.params.cityName)
        console.log(this.state.rest)
       const {rest}= this.state
       console.log(rest.restaurant)
        return(
            <div>
                <div>
                    { rest ? (
                        rest.map(places =>{
                            return(
                                <div>
                                    <p>{places.restaurant.name}</p>
                                    <p>{places.restaurant.cuisines}</p>
                                    <p>{places.restaurant.location.address}</p>
                                    <p>{places.restaurant.phone_numbers}</p>
                                    <p>average cost for two${places.restaurant.average_cost_for_two}</p>
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
                    ):"could not dine anything"}
                </div>
            </div>
        )
    }
}

export default Restaurants;