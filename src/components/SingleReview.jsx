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
      <h5>Designed by: {review.designer}</h5>
      <img
        className="review__img"
        src={review.review_img_url}
        alt={review.title}
      />
      <h5>Reviewer: {review.owner}</h5>
      <p>{review.review_body}</p>

      <p>
        Count of comments will go here <button>expand/collapse comments</button>
      </p>
      <ul>
        Comments count: <button>expand/collapse comments</button>{" "}
      </ul>
      <li>sample comment</li>

      <section>write comment form</section>
      <button>Post comment button</button>
    </>
  );
};

export default SingleReview;
