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

export const postComment = async (review_id, comment, username) => {
  const res = await Gamekeeper.post(`reviews/${review_id}/comments`, {
    username,
    body: comment,
  });
  return res.data;
};

export const fetchUsers = async () => {
  const res = await Gamekeeper.get("/users");
  return res.data.users;
};

export const fetchUserInfo = async (username) => {
  const res = await Gamekeeper.get(`/users/${username}`);
  return res.data.user;
};

export const fetchComments = async (review_id, page) => {
  const limit = 10;

  const res = await Gamekeeper.get(`/reviews/${review_id}/comments`, {
    params: { limit, p: page },
  });
  return res.data.comments;
};

export const patchReviewVotes = async (review_id, votes) => {
  const res = await Gamekeeper.patch(`/reviews/${review_id}`, {
    inc_votes: votes,
  });
  return res.data;
};

export const patchCommentVotes = async (comment_id, votes) => {
  const res = await Gamekeeper.patch(`/comments/${comment_id}`, {
    inc_votes: votes,
  });
  return res.data;
};

export const postReview = async (review) => {
  const res = await Gamekeeper.post(`reviews/`, review);
  return res.data.review;
};

export const deleteReview = async (review_id) => {
  const res = await Gamekeeper.delete(`/reviews/${review_id}`);
  return res;
};

export const deleteComment = async (comment_id) => {
  const res = await Gamekeeper.delete(`/comments/${comment_id}`);
  return res;
};
