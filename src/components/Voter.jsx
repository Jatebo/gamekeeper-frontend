import { useState } from "react";
import { patchReviewVotes, patchCommentVotes } from "../utils/api";

const Voter = ({ item_id, votes, voterType }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [isError, setIsError] = useState(false);

  const upvoteHandler = () => {
    setIsError(false);
    setVoteChange((currentVoteChange) => currentVoteChange + 1);
    (voterType === "review"
      ? patchReviewVotes(item_id, 1)
      : patchCommentVotes(item_id, 1)
    ).catch((err) => {
      setIsError(true);
      setVoteChange((currentKudosChange) => currentKudosChange);
    });
  };
  const downvoteHandler = () => {
    setIsError(false);
    setVoteChange((currentVoteChange) => currentVoteChange - 1);

    (voterType === "review"
      ? patchReviewVotes(item_id, -1)
      : patchCommentVotes(item_id, -1)
    ).catch(() => {
      setIsError(true);
      setVoteChange((currentKudosChange) => currentKudosChange);
    });
  };
  return (
    <>
      <p>Votes :{votes + voteChange}</p>
      <button className="upvote__btn" onClick={upvoteHandler}>
        +1
      </button>
      <button className="downvote__btn" onClick={downvoteHandler}>
        -1
      </button>
      {isError ? <p>Unable to register vote, please try again later</p> : null}
    </>
  );
};

export default Voter;
