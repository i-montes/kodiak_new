import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import ContentHome from './components/home/home';
import WorkContent from './components/work/work';
// import logo from './logo.svg';
import './App.css';


const Home = () => (<div className="home"> <NavBar/> <ContentHome/> </div>)

const Work = () => ( <div className="work"> <NavBar /> <WorkContent /> </div> )


class App extends Component {

  render() {

    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Portafolio" exact component={Work} />
          </Switch>
      </Router>
    )
  }
}



export default App;
