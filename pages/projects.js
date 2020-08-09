import Projects from "../components/projects";
import Query from "../components/query";
import PROJECT_QUERY from "../apollo/queries/project/projects";
import { Container } from "reactstrap";

const Project = () => {
  return (
    <Container>
      <h1 className="text-center">Projects</h1>
      <Query query={PROJECT_QUERY}>
        {({ data: { projects } }) => {
          return <Projects projects={projects} />;
        }}
      </Query>
    </Container>
  );
};

export default Project;
