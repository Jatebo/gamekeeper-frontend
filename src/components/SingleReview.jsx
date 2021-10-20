import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import "../styles/SingleReview.css";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchSingleReview(review_id)
      .then((result) => {
        setReview(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id]);
  return (
    <>
      <h3 className="review__title">{review.title}</h3>
      <h5 className="review__designer">Designed by: {review.designer}</h5>
      <img
        className="review__img"
        src={review.review_img_url}
        alt={review.title}
      />
      <h5 className="review__author">Reviewer: {review.owner}</h5>
      <p className="review__text">{review.review_body}</p>

      <ul>
        Comments count: <button>expand/collapse comments</button>{" "}
      </ul>
      <li>sample comment</li>

      <form>
        add comment
        <input></input>
        <button>comment</button>
      </form>
    </>
  );
};

export default SingleReview;
