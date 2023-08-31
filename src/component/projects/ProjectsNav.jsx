import { Link } from 'react-router-dom';
import './index.css';

function ProjectsNavBar() {
  const array = ['Health'];

  return (
    <div className="ProjectNav--container">
      {array.map((projectLink) => {
        return (
          <Link
            to={`/projects/${projectLink}`}
            className="ProjectLinks"
            key={projectLink}
          >
            {projectLink}
          </Link>
        );
      })}
    </div>
  );
}

export default ProjectsNavBar;
