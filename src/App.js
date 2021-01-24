import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";
import Login from "./pages/login";

function App() {
  return (
    <div>
    <Router>
    <div className="App">
    <Nav />
    <Switch>

               <Route exact path="/" component={Homepage} />
               <Route exact path="/login" component={Login} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
      </Switch>
    </div>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
