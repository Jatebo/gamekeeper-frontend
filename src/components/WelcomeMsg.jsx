import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Redirect, useLocation } from "react-router-dom";
import "../styles/WelcomeMsg.css";

const WelcomeMsg = () => {
  const { user, setUser } = useContext(UserContext);
  const [signedOut, setSignedOut] = useState(false);
  const [pushedWriteReview, setPushedWriteReview] = useState(false);

  const path = useLocation();

  useEffect(() => {
    setSignedOut(false);
    setPushedWriteReview(false);
  }, [user, pushedWriteReview]);

  const handleSignOut = (e) => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    setSignedOut(true);
  };

  if (signedOut) {
    return <Redirect push to={{ pathname: "/" }} />;
  }

  if (pushedWriteReview) {
    return <Redirect push to={{ pathname: "/write-review" }} />;
  }

  return (
    <div className="welcome__msg">
      {user ? (
        <div>
          <p>Welcome, {user}</p>
          <button
            onClick={() => {
              setPushedWriteReview(true);
            }}
            className={
              path.pathname === "/write-review" ? "button__hide" : null
            }
          >
            {" "}
            Write review
          </button>
          <button onClick={() => handleSignOut()}> sign out</button>
        </div>
      ) : (
        <p>Welcome, guest</p>
      )}
    </div>
  );
};

export default WelcomeMsg;
