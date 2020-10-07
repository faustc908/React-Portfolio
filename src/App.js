import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Body/Body"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/project" component={Projects} />
        <Body />
        <Contact />
      </Switch>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
