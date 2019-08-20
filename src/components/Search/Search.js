import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
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
console.log(cityName)
return(
    <div>
        	<input
									className="searchb"
									className="inputName"
									onChange={e => this.searchCityHandler(e)}
			/>
                                <Link to={`/city/${cityName}`}>
									<button className="inp">Search</button>
								</Link>
    </div>
)
}
    }
   
    export default Search