import React from "react";
// import Api from "./Api";
import { getData, DeleteID, postNewId } from "./lib/Api";
import List from "./components/List";

import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">      
      <List></List>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

getData()

export default App;
