import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCategories } from "../utils/api";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetchCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <nav className="Navbar">
      {categories.map((category) => {
        return (
          <Link
            to={`category/${category.slug}`}
            id={category.slug}
            className="nav__link"
          >
            {category.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
