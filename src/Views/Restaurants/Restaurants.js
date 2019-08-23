import React,{Component} from "react"
import axios from "axios"
import "./Restaurant.css"
import {  MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn,MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
    import {Link} from "react-router-dom"

    import SpecificSearch from "../../components/SpecificSearch/SpecificSearch"
class Restaurants extends Component {
    constructor(props){
        super(props)
        this.state ={
            rest:[],
            id:[],
            inp:""
     
        }
        this.searchInputHandler = this.searchInputHandler.bind(this)
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
    searchInputHandler(e){
        this.setState({inp:e.target.value})
    }
    render(){
        const {inp}= this.state;
       const {rest}= this.state
     
        return(
            <div>
              
         <MDBCol md="11">
    <MDBFormInline className="md-form">
   
        	<input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="name of restaurant" aria-label="Search"
									className="searchb"
									className="inputName"
									onChange={e => this.searchInputHandler(e)}
			/>  <Link to={`/food/${inp}/${this.state.id}`}><MDBIcon icon="search" /></Link> </MDBFormInline>
            </MDBCol>
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
                                 
                                    <div>{
                                places.restaurant.thumb ? (
                                  <MDBCardImage style={{ height:"27vh", }} className="img-fluid" src={places.restaurant.thumb}/>  
                                ):
                               <MDBCardImage className="noimg" src={require("../../images/NO-IMAGE.png")} /> 
                            }
                     
</div>
                                    <MDBCardBody className="cardBod"> 
                                    <MDBCardTitle style={{ height:"7vh"}} className="titleWrapper">{places.restaurant.name}</MDBCardTitle>   
                                    <MDBCardText   style={{ marginBottom:"1px",height:"6vh" }}>   
                                   
                                    {places.restaurant.cuisines}</MDBCardText>
                                  
                             
                              
                                   
                                   <Link to ={`/restaurant/${places.restaurant.R.res_id}`}> <MDBBtn color="primary" className="cardButton" style={{ height:"8vh", }} >Yum!</MDBBtn></Link>
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