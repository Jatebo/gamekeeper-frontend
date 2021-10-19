import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import "../styles/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category = useParams();
  console.log(reviews);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(category)
      .then((res) => {
        setIsLoading(false);
        setReviews(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [category]);

  if (isLoading) return <p>loading...</p>;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        return (
          <li id={review.review_id}>
            <Link to={`/reviews/${review.review_id}`}>
              <img
                className="reviews__img"
                src={review.review_img_url}
                alt={review.title}
              />
              <h4 className="reviews_title">{review.title}</h4>
            </Link>
            <p className="reviews__author">By: {review.owner}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
