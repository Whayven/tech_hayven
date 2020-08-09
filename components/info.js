import Query from "../components/query";
import INFO_QUERY from "../apollo/queries/info/info";
import Markdown from "react-markdown";
import { Container, Col, Row, Card, CardImg } from "reactstrap";
import styled from "styled-components";

const Info = () => {
  const Image = styled.img`
    height: 280px;
    width: 320px;
    border: 1px solid grey;
    border-radius: 50%;
    margin-top: 5px;
  `;

  const cardStyle = styled.p`
    font-size: 1.2rem;
    width: 80%;
    margin: 1rem auto;
  `;
  return (
    <div>
      <Query query={INFO_QUERY}>
        {({ data: { info } }) => {
          const imageUrl = process.env.API_URL + info.Image.url;
          return (
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
                  return <Col key={i} className="text-center">{skill.Name}</Col>;
                })}
              </Row>
            </Container>
          );
        }}
      </Query>
    </div>
  );
};

export default Info;
