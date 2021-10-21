import { useEffect, useState } from "react";
import * as api from "../utils/api";

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

  return { comments, setComments, isLoading, setPage, page };
};

export default useComments;
