import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import ContentHome from './components/home/home';
import WorkContent from './components/work/work';
import BlogContent from './components/blog/blog';
import AboutContent from './components/about/about';
import ContactContent from './components/contact/contact';
import KieroWorkContent from './components/work/kiero/kiero';
// import logo from './logo.svg';
import './App.css';


const Home = () => (<div className="home"> <NavBar/> <ContentHome/> </div>)
const Work = () => ( <div className="work"> <NavBar /> <WorkContent /> </div> )
const Blog = () => ( <div className="work"> <NavBar /> <BlogContent /> </div> )
const About = () => ( <div className="work"> <NavBar /> <AboutContent /> </div> )
const Contact = () => ( <div className="work"> <NavBar /> <ContactContent /> </div> )
const Kiero = () => ( <div className="work"> <NavBar /> <KieroWorkContent /> </div> )



class App extends Component {

  render() {

    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Portfolio" exact component={Work} />
            <Route path="/Blog" exact component={Blog} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/kiero" exact component={Kiero} />
          </Switch>
      </Router>
    )
  }
}



export default App;
