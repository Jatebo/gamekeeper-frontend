import { useState } from "react";
import { deleteReview } from "../utils/api";
import { Redirect } from "react-router-dom";

const ReviewDeleter = ({ review_id }) => {
  const [deletedReview, setDeletedReview] = useState(false);

  const [isError, setIsError] = useState(false);

  const deleteHandler = () => {
    setDeletedReview(false);
    setIsError(false);
    deleteReview(review_id)
      .then(() => {
        setDeletedReview(true);
      })

      .catch((err) => {
        console.dir(err);
        setIsError(true);
      });
  };

  if (deletedReview) {
    return <Redirect push to={{ pathname: "/" }} />;
  }

  return (
    <>
      <button onClick={deleteHandler}>delete review</button>
      {isError ? <p>Unable to delete, please try again later</p> : null}
    </>
  );
};

export default ReviewDeleter;
