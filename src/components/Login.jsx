import "../styles/Login.css";
import { UserContext } from "../contexts/UserContext";
import { useState, useContext } from "react";
import { fetchUserInfo } from "../utils/api";
import { Redirect } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(UserContext);

  //state to monitor the input from the login form
  const [usernameInput, setUsernameInput] = useState("");

  //error handling state, to show message if invalid user input is submitted
  const [isInvalidUser, setIsInvalidUser] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInvalidUser(false);
    fetchUserInfo(usernameInput)
      .then((user) => {
        setUser(user.username);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setIsInvalidUser(true);
        console.log("invalid username");
        console.dir(err);
      });
  };

  if (submitted) {
    return <Redirect push to={{ pathname: "/" }} />;
  }

  return (
    <>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-form">Username: </label>
        <input
          type="text"
          name="username"
          required
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <input type="submit" value="Submit" />
        {isInvalidUser ? <p> invalid username </p> : null}
      </form>
    </>
  );
};

export default Login;
