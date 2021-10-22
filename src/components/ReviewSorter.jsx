const ReviewSorter = ({ setSort }) => {



  const selectSort = (e) => {
    e.preventDefault();
    setSort(JSON.parse(e.target.value));

    localStorage.setItem("sort", e.target[e.target.selectedIndex].text);
  };
  return (
    <form action="" className="sort__form">
      <label htmlFor="sortButton">sort: </label>
      <select id="sort__dropdown" name="sort-dropdown" onChange={selectSort}>
        <option key="default" label="choose a sort option" value="" />
        <option
          key="newOld"
          value={JSON.stringify({ sort_by: "created_at", order: "DESC" })}
        >
          Newest to oldest
        </option>
        <option
          key="oldNew"
          value={JSON.stringify({ sort_by: "created_at", order: "ASC" })}
        >
          Oldest to newest
        </option>
        <option
          key="owner-desc"
          value={JSON.stringify({ sort_by: "owner", order: "ASC" })}
        >
          Author A-Z
        </option>
        <option
          key="owner-asc"
          value={JSON.stringify({ sort_by: "owner", order: "DESC" })}
        >
          Author Z-A
        </option>
        <option
          key="title-desc"
          label="Title desc"
          value={JSON.stringify({ sort_by: "title", order: "ASC" })}
        >
          Title A-Z
        </option>
        <option
          key="title-asc"
          value={JSON.stringify({ sort_by: "title", order: "DESC" })}
        >
          Title Z-A
        </option>
        <option
          key="designer-desc"
          value={JSON.stringify({ sort_by: "designer", order: "ASC" })}
        >
          Designer A-Z
        </option>
        <option
          key="designer-asc"
          label="Designer asc"
          value={JSON.stringify({ sort_by: "designer", order: "DESC" })}
        >
          Designer Z-A
        </option>
        <option
          key="votes-desc"
          value={JSON.stringify({ sort_by: "votes", order: "DESC" })}
        >
          Votes Hi-Lo
        </option>
        <option
          key="votes-asc"
          value={JSON.stringify({ sort_by: "votes", order: "ASC" })}
        >
          Votes Lo-Hi
        </option>
        <option
          key="comments-desc"
          value={JSON.stringify({ sort_by: "comment_count", order: "DESC" })}
        >
          Comments Hi-Lo
        </option>
        <option
          key="comments-asc"
          value={JSON.stringify({ sort_by: "comment_count", order: "ASC" })}
        >
          Comments Lo-Hi
        </option>
      </select>
    </form>
  );
};

export default ReviewSorter;
