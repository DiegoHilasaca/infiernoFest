import React, { Component } from "react";
import "./styles/App.css";
import image from "./image/fondo4.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";

import Footer from "./Components/Footer";
import Nosotros from "./Components/Nosotros";
import Metal from "./Components/Metal";
import Groups from "./Components/Groups";
import Inicio from "./Components/Inicio";
import Video from "./Components/Video";

class App extends Component {
  

  render() {
    return (
      
      <div className="App text text-white ">
        <div className="container ">
          <Router>
            
            <nav className="btn-group navbar-expand-lg bg-dark" id="navbarNavDropdown">
            <div class="container">
              <a class="navbar-brand text-white" href="/">
                <img className="img-fluid logo mr-3" src={image}  alt="Guin" />
                INFIERNO EN LOS ANDES
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              </div>
              <div className="collapse navbar-collapse mr-3 " id="navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                  <Link to="/" className="link btn btn-dark">
                    Inicio
                  </Link>   
                  </li>   
                  <li className="nav-item">
                  <NavLink
                  to="/Nosotros"
                  activeClassName="active"
                  className="btn btn-dark link" 
                >
                  Nosotros
                </NavLink> 
                  </li>        
                <li className="nav-item">
                <Link to="/groups" className="link btn btn-dark">
                  Grupos
                </Link> 
                </li>
                <li className="nav-item">
                  <NavLink
                  to="/metal"
                  activeClassName="active"
                  className="btn btn-danger btn-lg link"
                >
                  Metal
                </NavLink> 
                  </li>
                  
                </ul>  
              </div>        
            </nav>
            <Switch>
            <Route
                path="/metal/:id"
                render={() => {
                  return (
                    <div>
                      videooooo
                      <Video/>
                    </div>
                  );
                }}
              ></Route>     
            <Route
                path="/metal"
                render={() => {
                  return (
                    <div>
                      <Metal/>
                    </div>
                  );
                }}
              ></Route> 
              
              <Route
                path="/nosotros"
                render={() => {
                  return (
                    <div>
                      <Nosotros />
                    </div>
                  );
                }}
              ></Route>         
              <Route
                path="/groups"
                render={() => {
                  return (
                    <div>
                      <Groups />
                    </div>
                  );
                }}
              ></Route>
              <Route
                path="/"
                render={() => {
                  return (
                    <div>
                      <Inicio />
                    </div>
                  );
                }}
              ></Route>
            </Switch>
          </Router>
          <hr/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
