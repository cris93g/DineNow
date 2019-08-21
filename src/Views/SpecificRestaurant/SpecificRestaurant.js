import React,{Component} from "react"
import axios from "axios";
import styled from "styled-components"
import "./SpecificRestaurant.css"
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon} from "mdbreact";
class SpecificRestaurant extends Component {
    constructor(props){
        super(props)
        this.state={
            restaurant:[]
        }
    }
    componentDidMount(){
        axios.post(`/api/specrestaurant`
        ,{
            id: this.props.match.params.cityId
        }).then(response =>{
            this.setState({ restaurant: response.data})
        })
    }
    render(){
        
        console.log(this.props.match.params.cityId)
       console.log(this.state.restaurant) 
       const {restaurant}= this.state
       return(
            <div>
                {restaurant ? (
                <div>
                    {/* {console.log(restaurant.photos["0"].photo)} */}
                   <img className="banner" src={restaurant.featured_image}/>
                   <div className="combined">
                   <div className="leftSide">
                       <h4>{restaurant.name}</h4>
                       <p>{`Average cost for 2 people $${restaurant.average_cost_for_two}`}</p>
                       <a href='tel:${restaurant.phone_numbers}'> <p>{`Number:${restaurant.phone_numbers}`}</p></a>
                      {restaurant.user_rating ? (
                          <div>Rating: {restaurant.user_rating.aggregate_rating}/5</div>
                      ):""}
                       <p>{restaurant.timings}</p>
               <a href={restaurant.menu_url}> <p>Menu</p></a>
               {/* <p>{restaurant.location['address']}</p> */}
               { restaurant.location ? (
                 <a href={`https://maps.google.com/?q=${restaurant.location.address}`}>  <p>Adress: {restaurant.location.address}</p></a>
               ):""}
               {console.log(restaurant.location)}
                   </div>
                   <div className="rightSide">
                       {restaurant.highlights ? (
                           restaurant.highlights.map( rest =>{
                               return(
                                   <div >
                                       <p style={{ margin:"0", }}>&#10004;{` ${rest}`}</p>
                                   </div>
                               )
                           }
                             
                           )
                       ):"no amenitys"}
                   </div>
                   </div>
                </div>
                ):""}
                <div>
                    <h4 style={{ marginLeft:"20vw", }}>Reviews</h4>
                    {restaurant.all_reviews ? (
restaurant.all_reviews.reviews.map( rev =>{
    return(
        <div>
          {/* <img src={rev.review.user.profile_image}/>
            <p >{rev.review.review_text}</p> */}
            <MDBCard
        className="my-5 px-5 pt-4"
        style={{ fontWeight: 300, maxWidth: 600 ,fontSize:"0.8em" }}
      ><MDBCardBody className="py-0" style={{ marginBottom:"0" }}>
           <MDBRow >
                   <img
                    src={rev.review.user.profile_image}
                    alt=""
                    className="rounded-circle z-depth-1-half"
                    style={{ maxWidth:"50px" }}
                  />
                  <div>
                  <p className="name" style={{ marginLeft:"100px" }}>
                     {rev.review.user.name}
                    </p> 
                    <div className="date">{rev.review.user.rating_text}</div>
                  </div>
                  <div className="added-text">
                   {rev.review.review_text}
                  </div>
                  </MDBRow>
          </MDBCardBody></MDBCard> 
        </div>
    )
})
                    ):"no reviews"}
                </div>
                {/* <MDBCard
        className="my-5 px-5 pt-4"
        style={{ fontWeight: 300, maxWidth: 600 }}
      ><MDBCardBody className="py-0">
           <MDBRow>
                   <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                  />
                  <div>
                  <a href="#!" className="name">
                      Lili Rose
                    </a> posted on her page
                    <div className="date">2 days ago</div>
                  </div>
                  <div className="added-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero inventore, iste quas libero eius? Vitae sint neque
                    animi alias sunt dolor, accusantium ducimus, non placeat
                    voluptate.
                  </div>
                  </MDBRow>
          </MDBCardBody></MDBCard> */}
            </div>
        )
    }
}

export default SpecificRestaurant;