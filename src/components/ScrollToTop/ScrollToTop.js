import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = ({ click }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <i className="bi bi-arrow-up-circle" onClick={click}></i>
    </div>
  ) : null;
};

export default ScrollToTop;
