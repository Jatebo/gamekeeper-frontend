import { useParams, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import "../styles/SingleReview.css";
import Comments from "./Comments";
import Voter from "./Voter";
import ReviewDeleter from "./ReviewDeleter";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const SingleReview = () => {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [errorType, setErrorType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setErrorType(0);
    fetchSingleReview(review_id)
      .then((result) => {
        setSingleReview(result);
        setCommentCount(result.comment_count);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErrorType(404);
          setIsLoading(false);
        }
        console.dir(err, "<---- err in single review");
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading review</p>;
  }

  if (errorType === 404) {
    return <Redirect push to={{ pathname: "/404-not-found" }} />;
  }

  return (
    <>
      <h3 className="review__title">{singleReview.title}</h3>
      <h5 className="review__designer">Designed by: {singleReview.designer}</h5>
      <Voter
        item_id={singleReview.review_id}
        votes={singleReview.votes}
        voterType="review"
      />
      <a href={singleReview.review_img_url}>
        <img
          className="review__img"
          src={singleReview.review_img_url}
          alt={singleReview.title}
        />
      </a>
      <h5 className="review__author">
        Reviewer: {singleReview.owner}
        <span>
          {user === singleReview.owner ? (
            <ReviewDeleter review_id={review_id} />
          ) : null}
        </span>
      </h5>
      <p className="review__text">{singleReview.review_body}</p>
      <Comments commentCount={commentCount} setCommentCount={setCommentCount} />
    </>
  );
};

export default SingleReview;
