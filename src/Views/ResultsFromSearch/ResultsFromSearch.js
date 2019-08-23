import React,{Component} from "react"
import axios from "axios";
import {  MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn,MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
    import {Link} from "react-router-dom"
class ResultsFromSearch extends Component {
    constructor(props){
        super(props)
        this.state={
            res:[]
        }
    }
    componentDidMount(){
        axios.post(`/api/search`,{
            cityId:this.props.match.params.city,
            input:this.props.match.params.inp
        }).then(results =>{
            this.setState({res:results.data.restaurants})
        })
    }
    render(){
       const {res}= this.state
  
        return(
            <div className="welp">
                { res ? (
                    res.map(place =>{
                        return(
                            <div className="cardContainer">
                                <MDBCard className="mb-2" style={{ marginBottom:"0px", }}>
                                    <div>
                                        {}
                                        <div>{
                                place.restaurant.thumb ? (
                                  <MDBCardImage style={{ height:"27vh", }} className="img-fluid" src={place.restaurant.thumb} />  
                                ):
                               <MDBCardImage className="noimg" src={require("../../images/NO-IMAGE.png")} /> 
                            }
                     
</div>
                                </div>
                                <MDBCardBody className="cardBod"> 
                            <MDBCardTitle  style={{ height:"7vh"}} className="titleWrapper">{place.restaurant.name}</MDBCardTitle> 
                            <MDBCardText  style={{ marginBottom:"1px",height:"6vh" }}>   

{place.restaurant.cuisines}</MDBCardText>
<Link to ={`/restaurant/${place.restaurant.R.res_id}`}> <MDBBtn color="primary" className="cardButton" style={{ height:"8vh", }} >Yum!</MDBBtn></Link>
                            </MDBCardBody>
                            </MDBCard>
                            </div>
                        )
                    })
                ):""}
            </div>
        )
    }
}
export default ResultsFromSearch

