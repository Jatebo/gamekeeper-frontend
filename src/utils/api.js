const axios = require("axios");

const Gamekeeper = axios.create({
  baseURL: "https://project-gamekeeper.herokuapp.com/api",
});

export const fetchReviews = async ({ category }) => {
  let queryStr = `/reviews`;
  if (category) {
    queryStr = `/reviews?category=${category}`;
  }
  const res = await Gamekeeper.get(queryStr);
  return res.data.reviews;
};

export const fetchCategories = async () => {
  const res = await Gamekeeper.get("/categories");
  return res.data.categories;
};

export const fetchSingleReview = async (review_id) => {
  const res = await Gamekeeper.get(`/reviews/${review_id}`);
  return res.data.review;
};
