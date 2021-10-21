import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import "../styles/SingleReview.css";
import Comments from "./Comments";
import Voter from "./Voter";

const SingleReview = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);

  useEffect(() => {
    fetchSingleReview(review_id)
      .then((result) => {
        setSingleReview(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id]);
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
      <h5 className="review__author">Reviewer: {singleReview.owner}</h5>
      <p className="review__text">{singleReview.review_body}</p>
      <Comments commentCount={singleReview.comment_count} />
    </>
  );
};

export default SingleReview;
