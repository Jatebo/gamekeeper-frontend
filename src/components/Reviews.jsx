import { Link, useParams } from "react-router-dom";
import "../styles/Reviews.css";
import useReviews from "../hooks/useReviews";
import PageButtons from "./PageButtons";

const Reviews = () => {
  const { reviews, isLoading, setPage, page } = useReviews();

  const params = useParams();

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {params.category ? (
        <h3>{params.category} reviews</h3>
      ) : (
        <h3>all reviews</h3>
      )}
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
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
      <PageButtons list={reviews} setPage={setPage} page={page}></PageButtons>
    </>
  );
};

export default Reviews;
