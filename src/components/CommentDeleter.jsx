import { useState } from "react";
import { deleteComment } from "../utils/api";

const CommentDeleter = ({
  comment_id,
  comments,
  setComments,
  setCommentCount,
}) => {
  const [isError, setIsError] = useState(false);
  const deleteHandler = (e) => {
    setIsError(false);
    deleteComment(comment_id)
      .then((res) => {
        const commentsCopy = comments.map((item) => {
          const newComment = { ...item };
          return newComment;
        });
        const filteredComments = commentsCopy.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setComments(filteredComments);
        setCommentCount(filteredComments.length);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return (
    <>
      <button onClick={deleteHandler}>delete comment</button>
      {isError ? <p>Unable to delete comment, please try again later</p> : null}
    </>
  );
};

export default CommentDeleter;
