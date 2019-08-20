// import React,{Component} from "react"
// import {Link} from "react-router-dom"

// class SearchByLat extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             lat:"",
//             lon:""
//         }
//         this.getLocation = this.getLocation.bind(this)
//         this.showPosition = this.showPosition.bind(this)
//     }

//     getLocation() {
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(this.showPosition);
//           } else {
//            console.log("Geolocation is not supported by this browser.")
//           }
//         }
// showPosition(position) {
//        this.setState({
//            lat:position.coords.latitude,
//            lon:position.coords.longitude
//        })
//         //     console.log( [position.coords.latitude, 
//         //       position.coords.longitude])
//         //    }
//     }


//     render(){
   
// //    console.log(navigator.geolocation.getCurrentPosition(showPosition))
//         this.getLocation()
//         const {lat,lon}=this.state
//         console.log(lat)
//       console.log(this.state)
//         return(
//             <div>
//                  {/* <Link to={`/near/${lat}/${lon}`}>
// 									<button className="inp">Search</button>
// 								</Link> */}
//             </div>
//         )
//     }
// }

// export default SearchByLat