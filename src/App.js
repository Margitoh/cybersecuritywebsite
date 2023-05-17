import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

//pages
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/pricing" exact component={PricingPage} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
