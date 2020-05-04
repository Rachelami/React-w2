import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserPage from './components/UserPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">Main</Link>
          <Link to="/about" style={{ marginInlineStart: '8px' }}>
            About
          </Link>
          <Link to="/products" style={{ marginInlineStart: '8px' }}>
          products 
          </Link>
          <Link to="/user/3" style={{ marginInlineStart: '8px' }}>
            User 3
          </Link>
          <Link to="/user/4" style={{ marginInlineStart: '8px' }}>
            User 4
          </Link>
          <Switch>
            <Route path="/user/:userId">
              <UserPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <FirstPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


// import React from "react";
// import { getData, DeleteID, postNewId } from "./lib/Api";
// import List from "./components/List";
// import AddToList from "./components/AddToList";
// import "./App.css";

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			list: [],
//     };
//     // this.handelAddToList= this.handelAddToList.bind(this)
//     // this.props.loadData = 
// 	}

// 	handelAddToList(text) {
// 		this.setState({ list: [text, ...this.state.list] });
//     // I need to call the function loadData() that is inside <List> component
    
// 	}

// 	makeAList(data) {
// 		this.setState({ list: data });
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<AddToList
// 					handelAddToList={(text) => this.handelAddToList(text)}
// 				></AddToList>
// 				<List makeAList={(data, loadData) => this.makeAList(data)}></List>

// 				{/* <List  makeAList={data => this.makeAList(data).then(() => { this.props.loadData()})}></List> */}

// 				{/* <List List={this.state.list}></List> */}
// 			</div>
// 		);
// 	}
// }

// export default App;
