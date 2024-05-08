import uniqid from "uniqid";
import "./ProjectContainer.css";
import { Link } from "react-router-dom";

const ProjectContainer = ({ project }) => {
  return (
    <>
      <div className="project">
        <h3>{project.name}</h3>

        <p className="project__description">{project.description}</p>
        {project.stack && (
          <ul className="project__stack">
            {project.stack.map((item) => (
              <li key={uniqid()} className="project__stack-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <Link
            to={`project/${project.id}`}
            aria-label="source code"
            className="readMore"
          >
            <i className="bi bi-box-arrow-up-right"></i>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProjectContainer;
