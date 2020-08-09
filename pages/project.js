import { useRouter } from "next/router";
import Query from "../components/query";
import PROJECT_QUERY from "../apollo/queries/project/project";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";

const Project = () => {
  const router = useRouter();

  const Image = styled.img`
    padding: 2rem;
    height: 40rem;
  `;

  const Button = styled.button`
    width: 7rem;
    font-size: 1.1rem;
    font-weight: bold;
    border: 3px solid grey;
    border-radius: 5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background: white;

    &:hover {
      border-color: black;
    }
  `;

  const ButtonLink = styled.a`
    color: #212529;
    &:hover {
      text-decoration: none;
      color: #212529;
    }
  `;

  const Paragraph = styled.p`
    font-size: 1.1rem;
    color: color: #212529;
    width: 80%
  `;

  return (
    <Query query={PROJECT_QUERY} id={router.query.id}>
      {({ data: { project } }) => {
        const imageUrl = process.env.API_URL + project.Image.url;
        return (
          <Container>
            <Row>
              <Col>
                <h1 className="text-center">{project.Title}</h1>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Image
                  src={imageUrl}
                  className="img-fluid w-75"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
                <Paragraph className="text-center mx-auto">{project.Description}</Paragraph>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <Button>
                  <ButtonLink href={project.Url} target="_blank">
                    View Site
                  </ButtonLink>
                </Button>
              </Col>
              <Col>
              <Button>
                  <ButtonLink href={project.Url} target="_blank">
                    View Repo
                  </ButtonLink>
                </Button>
              </Col>
            </Row>
          </Container>
        );
      }}
    </Query>
  );
};

export default Project;
