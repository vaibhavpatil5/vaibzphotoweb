import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './ReactMenu/Nevbar';
import About from './ReactMenu/About';
import Contact from './ReactMenu/Contact';
import Home from './ReactMenu/Home';
import Gallery from "./ReactMenu/Gallery";
import Service from './ReactMenu/Service';
import Footer from './ReactMenu/Footer';
import Error from './ReactMenu/Error';






const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact  path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/gallery" component={Gallery}/>
            <Route  path="/service" component={Service}/>
            <Route  path="/contact" component={Contact}/>
            <Route component={Error}/>
            <Redirect to='/'/>
        </Switch>
        <Footer></Footer>
        </>
    )
}

export default App;
