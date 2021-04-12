import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";

import './App.css';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      data: null
    };

  }

  componentDidMount(){}

  componentWillUnmount(){}

  render(){

    return (
    <div className="container-fluid">
      
        <Header />
        <Switch>        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>

    </div>
    )



  }

}

export default App;