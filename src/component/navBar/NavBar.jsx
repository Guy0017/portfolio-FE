import "./index.css";
import { Link } from "react-router-dom";

function NavBar() {
  const contentList = ["Profile", "Projects", "Contact"];

  return (
    <>
      <div className="NavBar--container">
        {contentList.map((content) => {
          return (
            <Link
              to={`/${content[0].toLowerCase().concat(content.slice(1))}`}
              className="NavLinks"
              key={content}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default NavBar;
