const axios = require("axios");

const Gamekeeper = axios.create({
  baseURL: "https://project-gamekeeper.herokuapp.com/api",
});

export const fetchReviews = async (path, page) => {
  const limit = 10;
  const { category } = path;

  const res = await Gamekeeper.get("/reviews", {
    params: { category, limit, p: page },
  });
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
