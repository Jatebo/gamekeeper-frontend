import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { useParams } from "react-router-dom";

const useComments = (review_id) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchComments(review_id, page)
      .then((reviewData) => {
        setIsLoading(false);
        setComments(reviewData);
        if (reviewData.length === 0 && page > 1)
          setPage((currPage) => currPage - 1);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [review_id, page]);

  return { comments, isLoading, setPage, page };
};

export default useComments;
