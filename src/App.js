import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import Navbar from "../src/components/Navbar/Navbar"
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
      {routes}
			</div>
		</Router>
	);
}

export default App;
