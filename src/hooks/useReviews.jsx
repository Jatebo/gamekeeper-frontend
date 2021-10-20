import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { useParams, Link } from "react-router-dom";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const path = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchReviews(path, page)
      .then((reviewData) => {
        setIsLoading(false);
        setReviews(reviewData);
        console.log(reviewData, "<--- review data");
        if (reviewData.length === 0 && page > 1)
          setPage((currPage) => currPage - 1);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [path, page]);

  return { reviews, isLoading, setPage, page };
};

export default useReviews;
