import { useState } from "react";

import { postComment } from "../utils/api";

const WriteComment = () => {
  const [comment, setComment] = useState("");
  console.log(comment);
  const handlePostComment = (e) => {
    e.preventDefault();
    postComment(comment);
  };

  return (
    <form>
      {" "}
      <label htmlFor="addComment"> add comment: </label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></input>
      <button>add comment</button>{" "}
      <button
        onClick={(e) => {
          setComment("");
        }}
      >
        cancel
      </button>
    </form>
  );
};

export default WriteComment;
