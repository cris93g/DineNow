import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import "./Search.css"
class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            cityName:""
        } 
        this.searchCityHandler = this.searchCityHandler.bind(this)
}

searchCityHandler(e){
    this.setState({cityName:e.target.value})
}
render(){
const {cityName}= this.state;

return(
    <div> <MDBCol md="11">
    <MDBFormInline className="md-form">
   
        	<input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="City or State" aria-label="Search"
									className="searchb"
									className="inputName"
									onChange={e => this.searchCityHandler(e)}
			/> <Link to={`/city/${cityName}`}>   <MDBIcon icon="search" /></Link> </MDBFormInline>
            </MDBCol>
                           
    </div>
)
}
    }
   
    export default Search