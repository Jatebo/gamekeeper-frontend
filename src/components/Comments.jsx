import { useParams } from "react-router-dom";
import "../styles/Comments.css";
import useComments from "../hooks/useComments";
import PageButtons from "./PageButtons";
import Voter from "./Voter";
import ToggleComments from "./ToggleComments";
import WriteComment from "./WriteComment";
import CommentDeleter from "./CommentDeleter";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Comments = ({ commentCount, setCommentCount }) => {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();
  const { comments, setComments, isLoading, setPage, page } =
    useComments(review_id);

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="CommentsComponent">
      <h4>Comments ({commentCount})</h4>
      {commentCount > 0 ? (
        <ToggleComments>
          <ul className="comments__list">
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <Voter
                    className="comment_deleter"
                    item_id={comment.comment_id}
                    votes={comment.votes}
                    voterType="comment"
                  />
                  <p className="comment__author">{comment.author}: </p>
                  <p className="comment_body">{comment.body}</p>
                  {user === comment.author ? (
                    <CommentDeleter
                      comment_id={comment.comment_id}
                      comments={comments}
                      setComments={setComments}
                      setCommentCount={setCommentCount}
                    />
                  ) : null}
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
        </ToggleComments>
      ) : (
        <p className="review__noComment"> Be the first to comment!</p>
      )}
      <WriteComment
        review_id={review_id}
        comments={comments}
        setComments={setComments}
        setCommentCount={setCommentCount}
      ></WriteComment>
    </div>
  );
};

export default Comments;
