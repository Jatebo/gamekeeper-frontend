import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Reviews />
        </Route>
        <Route exact path="/category/:category">
          <Navbar></Navbar>
          <Reviews />
        </Route>
        <Route exact path="/reviews/:review_id">
          <SingleReview />
        </Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
