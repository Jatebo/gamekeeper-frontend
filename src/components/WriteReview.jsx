import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

const WriteReview = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect push to={{ pathname: "/" }} />;
  }

  return <p>WriteReview COMPONENT UNDER CONSTRUCTION</p>;
};

export default WriteReview;
