import Projects from "../components/projects";
import Query from "../components/query";
import PROJECT_QUERY from "../apollo/queries/project/projects";

const Project = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Query query={PROJECT_QUERY}>
        {({ data: { projects } }) => {
          return <Projects projects={projects} />;
        }}
      </Query>
    </div>
  );
};

export default Project;
