import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "../styles/Header.css";
import { UserContext } from "../contexts/UserContext";

const Header = ({ userImg }) => {
  const { user } = useContext(UserContext);
  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    if (user) {
      const userObj = JSON.parse(localStorage.getItem("loggedInUser"));
      setAvatarURL(userObj.avatar_url);
    }
  }, [user]);
  return (
    <header className="Header">
      <Link
        className="header__link"
        to="/"
        onClick={() => {
          localStorage.removeItem("sort");
        }}
      >
        <h1 className="header__main">GAMEKEEPER</h1>
      </Link>
      <>
        {user ? (
          <img
            className="login__img"
            src={avatarURL ? avatarURL : null}
            alt="logged in user"
          />
        ) : (
          <Link
            to="/login"
            onClick={() => {
              localStorage.removeItem("sort");
            }}
          >
            <button className="signIn__btn"> Sign in</button>
          </Link>
        )}
      </>
    </header>
  );
};

export default Header;

//"data:image/png;base64,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"
