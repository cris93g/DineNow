import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

class SpecificSearch extends Component {
    constructor(props){
        super(props)
        this.state ={
            input:"",

        } 
        this.searchInputHandler = this.searchInputHandler.bind(this)
}

searchInputHandler(e){
    this.setState({input:e.target.value})
}
render(){
const {input}= this.state;
return(
    <div>
        
         <MDBCol md="11">
    <MDBFormInline className="md-form">
   
        	<input style={{ width:"100"}} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="restaurant or food" aria-label="Search" 
									className="searchb"
									className="inputName"
									onChange={e => this.searchInputHandler(e)}
			/>  <Link to={`/search/${input}/${this.state.id}`}><MDBIcon icon="search" /></Link> </MDBFormInline>
            </MDBCol>
                           
    </div>
)
}
    }
   
    export default SpecificSearch