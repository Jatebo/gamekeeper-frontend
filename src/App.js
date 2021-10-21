import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import Login from "./components/Login";
import WelcomeMsg from "./components/WelcomeMsg";
import WriteReview from "./components/WriteReview";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");
    if (prevLoggedInUser) {
      const userObj = JSON.parse(localStorage.getItem("loggedInUser"));
      console.log(userObj);
      setUser(userObj.username);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header userImg={user ? user.avatar_url : "null"} />
        <WelcomeMsg></WelcomeMsg>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Reviews />
          </Route>
          <Route exact path="/write-review">
            <Navbar />
            <WriteReview />
          </Route>
          <Route exact path="/category/:category">
            <Navbar />
            <Reviews />
          </Route>
          <Route exact path="/reviews/:review_id">
            <SingleReview />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route>
            <p>404: Page not found :( </p>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
};

export default App;
