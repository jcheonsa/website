import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  const imageDetails = {
    width: 524,
    height: 650,
  };

  // const imageDetails = {
  //   width: 500,
  //   height: 500,
  // };

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
                <Route
                  exact
                  path='/'
                  render={() => <Home imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/abt'
                  render={() => <AboutMe imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/exp'
                  render={() => <Experience imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/prt'
                  render={() => <Portfolio imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/cnt'
                  render={() => <ContactMe imageDetails={imageDetails} />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
