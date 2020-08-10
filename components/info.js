import { useQuery } from "@apollo/react-hooks";
import INFO_QUERY from "../apollo/queries/info/info";
import Markdown from "react-markdown";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";

const Info = () => {
  const { data, loading, error } = useQuery(
    INFO_QUERY
  );
  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {JSON.stringify(error)}</p>; 

  const { info } = data;

  const Image = styled.img`
    height: 360px;
    width: 360px;
    border: 1px solid grey;
    border-radius: 50%;
    margin-top: 5px;
  `;

  const cardStyle = styled.p`
    font-size: 1.2rem;
    width: 80%;
    margin: 1rem auto;
  `;
  const imageUrl = process.env.API_URL + info.Image.url;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-2">{`${info.Firstname} ${info.Lastname}`}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-center">{info.Title}</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Image src={imageUrl} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Markdown
              source={info.Bio}
              renderers={{
                paragraph: cardStyle,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-center">Skills:</h4>
          </Col>
        </Row>
        <Row>
          {info.skills.map((skill, i) => {
            return (
              <Col key={i} className="text-center">
                {skill.Name}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Info;
