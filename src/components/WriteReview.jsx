import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { postReview } from "../utils/api";

const WriteReview = () => {
  const { user } = useContext(UserContext);
  const { categories } = useContext(CategoriesContext);
  const [newReview, setNewReview] = useState(null);
  const [title, setTitle] = useState("");
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [isError, setIsError] = useState(false);
  const [posted, setPosted] = useState(false);

  console.log(newReview);

  const handlePostComment = (e) => {
    setPosted(false);
    setIsError(false);
    e.preventDefault();
    postReview(newReview)
      .then((postedReview) => {
        setNewReview(null);
        setPosted(postedReview);
      })
      .catch((err) => {
        console.dir(err);
        setIsError(true);
      });
  };

  if (!user) {
    return <Redirect push to={{ pathname: "/" }} />;
  }

  if (posted) {
    return <Redirect push to={{ pathname: `/reviews/${posted.review_id}` }} />;
  }

  return (
    <div className="write__review_container">
      <h1>Write new review:</h1>
      <form onSubmit={handlePostComment}>
        <ul>
          <li>
            <label htmlFor="title">title </label>
            <input
              type="text"
              name="title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </li>
          <li>
            <label htmlFor="designer">designer </label>
            <input
              type="text"
              name="designer"
              required
              onChange={(e) => {
                setDesigner(e.target.value);
              }}
            ></input>
          </li>
          <li>
            <label htmlFor="category">category </label>
            <select
              className="category__dropdown"
              id="category__dropdown"
              name="category__dropdown"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option key="blank" value="">
                ---select an option from the menu--
              </option>
              {categories.map((cat) => {
                return (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.slug}
                  </option>
                );
              })}
            </select>
          </li>
          <li>
            <label htmlFor="body">review body: </label>
            <input
              type="text"
              name="body"
              required
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></input>
          </li>
        </ul>
        <input
          type="submit"
          onClick={(e) => {
            setNewReview({
              owner: user,
              title,
              review_body: body,
              designer,
              category,
            });
          }}
        ></input>
      </form>
      {isError ? <p>Review could not be posted - try again later</p> : null}
    </div>
  );
};

export default WriteReview;
