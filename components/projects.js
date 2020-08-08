import Project from "./project";

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project, i) => {
        return <Project project={project} key={`project_${project.id}`} />;
      })}
    </div>
  );
};

export default Projects;
