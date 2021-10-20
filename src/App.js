import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");
    if (prevLoggedInUser) {
      setUser(prevLoggedInUser);
    }
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {user ? <p>Welcome, {user}</p> : <p>Welcome, guest</p>}
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
