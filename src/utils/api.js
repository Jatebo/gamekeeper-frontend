const axios = require("axios");

const Gamekeeper = axios.create({
  baseURL: "https://project-gamekeeper.herokuapp.com/api",
});

export const fetchReviews = async () => {
  const res = await Gamekeeper.get("/reviews");
  console.log(res.data);
};

export const fetchCategories = async () => {
  const res = await Gamekeeper.get("/categories");
  return res.data.categories;
};
