import { useRouter } from "next/router";
import Query from "../components/query";
import POST_QUERY from "../apollo/queries/post/post";

import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import Markdown from "react-markdown";
import Moment from "react-moment";

const Post = () => {
  const router = useRouter();
  const Heading = styled.h1`
    padding: 0.3rem;
  `;
  const Image = styled.img`
    position: relative;
    padding: 2rem;
    width: 100%;
    object-fit: contain;
  `;
  const Paragraph = styled.p`
 font-size: 1.1rem;
 color: color: #212529;
 width: 80%
 margin: 0 auto;
`;
  return (
    <Query query={POST_QUERY} id={router.query.id}>
      {({ data: { post } }) => {
        return (
          <Container>
            <Row>
              <Col>
                <h1 className="text-center mt-2">{post.Title}</h1>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto">
                <Markdown
                  source={post.Content}
                  renderers={{
                    image: Image,
                    heading: Heading,
                    paragraph: Paragraph,
                  }}
                />
              </Col>
            </Row>
            <Row className="pb-2">
              <Col>
                <Moment format="MMM Do YYYY">{post.Published}</Moment>
                <hr />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>Tags:</Col>
              {post.tags.map((tag, i) => {
                return (
                  <Col key={i} className="text-center">
                    {tag.Name}
                  </Col>
                );
              })}
            </Row>
          </Container>
        );
      }}
    </Query>
  );
};

export default Post;
