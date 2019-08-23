import React,{Component} from "react"
import axios from "axios"
import "./Restaurant.css"
import {  MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
    import {Link} from "react-router-dom"
class Restaurants extends Component {
    constructor(props){
        super(props)
        this.state ={
            rest:[],
            id:[],
     
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

        axios.post(`/api/cuisines`,{
            loc : this.props.match.params.cityName
        }).then(response =>{
            this.setState({id: response.data.location_suggestions[0].entity_id})
        })

    }
    render(){
        console.log(this.props.match.params.cityName)
        console.log(this.state)
       const {rest}= this.state
       console.log(rest.restaurant)
        return(
            <div>
                 <div>
                     {/* { this.state.cuisines ? (
                         this.state.cuisines.map(types =>{
                             return(
                                 <div> <select className="browser-default custom-select">
          <option value="1">{this.state.cuisines.establishment.name}</option>
        </select></div>
                             )
                         }

                         )
                     ):""} */}
                
      </div>
                <h5>{`Restaurants in ${this.props.match.params.cityName}`}</h5>
                <div className="welp">
                    { rest ? (
                        rest.map(places =>{
                            return(
                                <div className="cardContainer">
                                    <MDBCard className="mb-2" style={{ marginBottom:"0px", }}>
                                    <MDBCardImage className="img-fluid" src={places.restaurant.photos[0].photo.url} />
                                    <MDBCardBody className="cardBod"> 
                                    <MDBCardTitle className="titleWrapper">{places.restaurant.name}</MDBCardTitle>   
                                    <MDBCardText style={{ marginBottom:"0px", }}>   
                                   
                                    {places.restaurant.cuisines}</MDBCardText>
                                    {/* {places.restaurant.photos? (
places.restaurant.photos.map(images =>{
    return(
        <div className="picContainer">
        <img  className="restpicture" src={images.photo.url}/>
        </div>
    )
})
                                    ):""
                             
                                    } */}
                                   
                                   <Link to ={`/restaurant/${places.restaurant.R.res_id}`}> <MDBBtn color="primary" className="cardButton" >Yum!</MDBBtn></Link>
                                    </MDBCardBody></MDBCard>
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