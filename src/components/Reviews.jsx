import { Link, useParams } from "react-router-dom";
import "../styles/Reviews.css";
import useReviews from "../hooks/useReviews";
import PageButtons from "./PageButtons";
import Voter from "./Voter";
import ReviewSorter from "./ReviewSorter";
import { useState } from "react";

const Reviews = () => {
  const [sort, setSort] = useState({});
  const { reviews, isLoading, setPage, page } = useReviews(sort);
  const params = useParams();

  const storedSort = localStorage.getItem("sort");

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {params.category ? (
        <h3>{params.category} reviews</h3>
      ) : (
        <h3>all reviews</h3>
      )}
      {storedSort ? (
        <p>show reviews by: {storedSort} </p>
      ) : (
        <p>show reviews by: {"Newest to oldest"}</p>
      )}
      <ReviewSorter sort={sort} setSort={setSort}></ReviewSorter>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Voter
                item_id={review.review_id}
                votes={review.votes}
                voterType="review"
                className="reviews__voter"
              />
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
