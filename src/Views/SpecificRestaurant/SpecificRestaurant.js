import React,{Component} from "react"
import axios from "axios";

class SpecificRestaurant extends Component {
    constructor(props){
        super(props)
        this.state={
            rest:[]
        }
    }
    componentDidMount(){
        axios.post(`/api/restaurant`
        ,{
            resId: this.props.match.params.cityId
        }).then(response =>{
            this.setState({ rest: response.data})
        })
    }
    render(){
        console.log(this.state)
        console.log(this.props.match.params.cityId)
        return(
            <div>
dad
            </div>
        )
    }
}

export default SpecificRestaurant;