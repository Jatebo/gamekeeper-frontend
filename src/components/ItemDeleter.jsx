import { useState } from "react";
import { deleteComment, deleteReview } from "../utils/api";
import { Redirect } from "react-router-dom";

const ItemDeleter = ({
  item_id,
  type,
  itemState,
  setItemState,
  setCommentCount,
}) => {
  const [deletedReview, setDeletedReview] = useState(false);

  const [isError, setIsError] = useState(false);
  console.log(item_id);
  const deleteHandler = (e) => {
    setDeletedReview(false);
    setIsError(false);
    type === "review"
      ? deleteReview(item_id).then((res) => {
          setDeletedReview(true);
        })
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
            setCommentCount(filteredComments.length);
          })
          .catch((err) => {
            setIsError(true);
          });
  };

  if (deletedReview) {
    return <Redirect push to={{ pathname: "/" }} />;
  }

  return (
    <>
      <button onClick={deleteHandler}>delete {type}</button>
      {isError ? <p>Unable to delete {type}, please try again later</p> : null}
    </>
  );
};

export default ItemDeleter;
