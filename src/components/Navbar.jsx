import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { fetchCategories } from "../utils/api";
import "../styles/Navbar.css";
import { CategoriesContext } from "../contexts/CategoriesContext";

const Navbar = () => {
  const { categories, setCategories } = useContext(CategoriesContext);
  useEffect(() => {
    let isMounted = true;
    fetchCategories().then((result) => {
      if (isMounted) {
        setCategories(result);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [setCategories]);

  return (
    <nav className="Navbar">
      {categories.map((category) => {
        return (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            id={category.slug}
            className="nav__link"
            onClick={() => {
              localStorage.removeItem("sort");
            }}
          >
            {category.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
