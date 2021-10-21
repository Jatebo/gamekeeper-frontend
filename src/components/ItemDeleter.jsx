import { useState } from "react";
import { deleteComment, deleteReview } from "../utils/api";

const ItemDeleter = ({ item_id, type, itemState, setItemState }) => {
  const [isError, setIsError] = useState(false);

  const deleteHandler = (e) => {
    setIsError(false);
    type === "review"
      ? deleteReview(item_id)
      : deleteComment(item_id)
          .then((res) => {
            const commentsCopy = itemState.map((item) => {
              const newComment = { ...item };
              return newComment;
            });
            const filteredComments = commentsCopy.filter(
              (comment) => comment.comment_id !== item_id
            );
            setItemState(filteredComments);
          })
          .catch((err) => {
            setIsError(true);
          });
  };

  return (
    <>
      <button onClick={deleteHandler}>delete {type}</button>
      {isError ? <p>Unable to delete {type}, please try again later</p> : null}
    </>
  );
};

export default ItemDeleter;
