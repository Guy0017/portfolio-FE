import { useParams } from 'react-router-dom';
import ProjectsNavBar from './ProjectsNav';
import Health from './mini-projects/Health';
import './index.css';

function Projects() {
  const selectedProject = useParams();

  const intro =
    'Navigate through the mini-projects with the menu above. You can find my other projects on my gitHub.';

  return (
    <>
      <ProjectsNavBar />
      <div className="projects--container">
        <h2 className="projects--title">PROJECTS</h2>
        <p className="intro">{intro}</p>
      </div>
      <div className="projects--container">
        {selectedProject.id === 'Health' ? <Health /> : null}
      </div>
    </>
  );
}

export default Projects;
