import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCategories } from "../utils/api";
import "../styles/Navbar.css";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
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
            key={category.slug}
            to={`/category/${category.slug}`}
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
