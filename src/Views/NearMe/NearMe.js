import React,{Component} from "react"

class NearMe extends Component{
    constructor(props){
        super(props)
        this.state ={
            rest:[]
        }
    }
    componentDidMount(){
        // axios.post(`/api/foodclosetome`
        // , {
        //     lat : this.props.match.params.cityName
        // }
        // ).then(response => {
        //     this.setState({ rest: response.data });
        // });
    }
    render(){
       
        return(
            <div>
dads
            </div>
        )
    }
}

export default NearMe