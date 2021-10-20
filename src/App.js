import "./styles/App.css";
import { Switch, Route, } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const userObj = JSON.parse(localStorage.getItem("loggedInUser"));

  console.log(userObj);

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");
    if (prevLoggedInUser) {
      const userObj = JSON.parse(localStorage.getItem("loggedInUser"));
      console.log(userObj);
      setUser(userObj.username);
    }
  }, []);

  const signOut = (e) => {
    console.log("Pressed Sign Out");
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header userImg={user ? user.avatar_url : "null"} />
        <div className="welcome__msg">
          {user ? (
            <div>
              <p>Welcome, {user}</p>
              <button onClick={() => signOut()}> sign out</button>
            </div>
          ) : (
            <p>Welcome, guest</p>
          )}
        </div>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Reviews />
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
