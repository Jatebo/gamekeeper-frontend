import { useParams } from "react-router-dom";
import "../styles/Comments.css";
import useComments from "../hooks/useComments";
import PageButtons from "./PageButtons";
import { useState } from "react";

const Comments = ({ commentCount }) => {
  const { review_id } = useParams();
  const { comments, isLoading, setPage, page } = useComments(review_id);
  const [showComments, setShowComments] = useState(true);

  console.log(showComments);

  const toggleComments = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  };

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="CommentsComponent">
      <h4>Comments ({commentCount})</h4>
      {commentCount > 0 ? (
        <>
          {showComments ? (
            <>
              <button className="toggle__comments" onClick={toggleComments}>
                collapse comments
              </button>
              <ul className="comments__list">
                {comments.map((comment) => {
                  return (
                    <li key={comment.comment_id}>
                      <p className="comment__author">{comment.author}: </p>
                      <p className="comment_body">{comment.body}</p>
                    </li>
                  );
                })}
              </ul>
              {commentCount > 10 ? (
                <PageButtons
                  list={comments}
                  setPage={setPage}
                  page={page}
                ></PageButtons>
              ) : null}
            </>
          ) : (
            <>
              <button className="toggle__comments" onClick={toggleComments}>
                expand comments
              </button>
            </>
          )}
        </>
      ) : (
        <p className="review__noComment"> Be the first to comment!</p>
      )}
    </div>
  );
};

export default Comments;
