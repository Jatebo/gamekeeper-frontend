import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import useComments from "../hooks/useComments";
import "../styles/WriteComment.css";
import { postComment } from "../utils/api";

const WriteComment = ({ review_id, comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handlePostComment = (e) => {
    e.preventDefault();
    postComment(review_id, comment, user)
      .then((res) => {
        setComment("");
        setComments((currComments) => {
          const commentsCopy = currComments.map((currComment) => {
            const newComment = { ...currComment };
            return newComment;
          });
          commentsCopy.push(res.comment);
          return commentsCopy;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form autoComplete="off" onSubmit={handlePostComment}>
      {" "}
      <label htmlFor="addComment"> add comment: </label>
      <input
        className="comment__box"
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        name="addComment"
      ></input>
      <p className={!comment ? "hide__buttons" : null}>
        <input
          className="comment__btn"
          type="submit"
          value="add comment"
          disabled={!user}
        ></input>
        <button
          className="cancel__btn"
          onClick={(e) => {
            setComment("");
          }}
        >
          cancel
        </button>
      </p>
    </form>
  );
};

export default WriteComment;
