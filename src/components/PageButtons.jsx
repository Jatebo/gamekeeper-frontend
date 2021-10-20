const PageButtons = ({ page, setPage, list }) => {
  return (
    <section className="comments_buttons">
      <button
        className="comment__pg__button"
        onClick={() => setPage((currPage) => currPage - 1)}
        disabled={page <= 1}
      >
        previous page
      </button>
      <span className="comment__pg_text"> page {page} </span>
      <button
        className="comment__pg__button"
        onClick={() => setPage((currPage) => currPage + 1)}
        disabled={list.length < 10}
      >
        next page
      </button>
    </section>
  );
};

export default PageButtons;
