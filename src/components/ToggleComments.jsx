import { useState } from "react";

const ToggleComments = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleComments = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <button onClick={toggleComments}>
        {isOpen ? "hide comments" : "show comments"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ToggleComments;
