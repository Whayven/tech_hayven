import Project from "./project-card";
// import { Container } from "reactstrap";
import styled from "styled-components";

const Projects = ({ projects }) => {
  const Container = styled.div`
    width: 65%;
    margin: 0 auto;
  `;
  return (
    <Container>
      {projects.map((project, i) => {
        return <Project project={project} key={`project_${project.id}`} />;
      })}
    </Container>
  );
};

export default Projects;
