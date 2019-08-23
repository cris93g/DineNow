import React,{Component} from "react"
import Navbar from "../../components/Navbar/Navbar"
import axios from "axios";
import "./Home.css"
import Search from "../../components/Search/Search"
import Carousel from "../../components/Carousel/Carousel"
import {  MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
    import {Link} from "react-router-dom"
    import Loader from "../../components/Loader/Loader"
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
       
        
        return(
            <div>
<Search/>
<Carousel/>
<br/>
<h5>Restaurants Near you</h5>
<div className="welp">
            {
                rest ? (
                rest.map(places =>{
                    return(
                        <div className="cardContainer">
                        <MDBCard className="mb-2">
                            <div>{
                                places.restaurant.thumb ? (
                                  <MDBCardImage className="img-fluid" src={places.restaurant.thumb} style={{ height:"27vh", }}/>  
                                ):
                               <MDBCardImage className="noimg" src={require("../../images/NO-IMAGE.png")} style={{ maxheigth:"10%"}}/> 
                            }
                     
</div>

            <MDBCardBody className="cardBod">    
           <MDBCardTitle    style={{ height:"7vh"}} className="titleWrapper">{places.restaurant.name}</MDBCardTitle>
           <MDBCardText style={{ marginBottom:"1px",height:"6vh" }}>              {places.restaurant.cuisines} 
            </MDBCardText>
       

                           <Link to ={`/restaurant/${places.restaurant.R.res_id}`}>
                            <MDBBtn color="primary" className="cardButton"style={{ height:"8vh", }} >Yum!</MDBBtn></Link>
                           
                         </MDBCardBody> 
                      </MDBCard></div>
                    )
                })
                ):
           <Loader/>
            }
            </div></div>
        )
    }
}

export default Home


