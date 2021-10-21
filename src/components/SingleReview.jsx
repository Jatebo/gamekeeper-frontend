import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import "../styles/SingleReview.css";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import Voter from "./Voter";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  console.log(review_id);

  useEffect(() => {
    fetchSingleReview(review_id)
      .then((result) => {
        setReview(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id]);
  return (
    <>
      <h3 className="review__title">{review.title}</h3>
      <h5 className="review__designer">Designed by: {review.designer}</h5>
      <Voter
        item_id={review.review_id}
        votes={review.votes}
        voterType="review"
      />
      <a href={review.review_img_url}>
        <img
          className="review__img"
          src={review.review_img_url}
          alt={review.title}
        />
      </a>
      <h5 className="review__author">Reviewer: {review.owner}</h5>
      <p className="review__text">{review.review_body}</p>
      <Comments commentCount={review.comment_count} />
      <WriteComment />
    </>
  );
};

export default SingleReview;
