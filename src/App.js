import React from "react";
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Experience from "./pages/experience";
import ContactMe from "./pages/contactme";
import AboutMe from "./pages/aboutme";

/********** COMPONENTS ************/
import Header from "./components/header";
import Landing from "./components/landing";
// import Sidebar from "./components/sidebar";
import Contact from './components/contact';
//Styles
import "./App.scss";

function App() {

  return (
    <Router>
      <div className="body-frame">
        <Landing />
        <Header />
        <Contact />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={true} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path='/' exact component={Home} />
                <Route path='/abt' exact component={AboutMe} />
                <Route path='/prt' exact component={Portfolio} />
                <Route path='/cnt' exact component={ContactMe} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
