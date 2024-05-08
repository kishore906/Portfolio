import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = ({ click, showNavList, refProp }) => {
  const { homepage, title } = header;

  return (
    <header className="header center" ref={refProp}>
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar click={click} showNavList={showNavList} />
    </header>
  );
};

export default Header;
