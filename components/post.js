import Link from "next/link";
import Moment from "react-moment";

import { Card, CardTitle, CardSubtitle } from "reactstrap";
import styled from "styled-components";

const Post = ({ post }) => {
  const CardLink = styled.a`
    color: #00000080;
    padding: 0.3rem;
    font-size: 1.5rem;

    &:hover {
      text-decoration: none;
      cursor: pointer;
      color: #rgba(0, 0, 0, 0.5);
    }
  `;

  return (
    <Card className="w-50 text-center my-4 mx-auto">
      <CardTitle>
        <Link href={{ pathname: "post", query: { id: post.id } }} passHref>
          <CardLink>{post.Title}</CardLink>
        </Link>
      </CardTitle>
      <CardSubtitle className="pb-2">
        <Moment format="MMMM Do, YYYY">{post.Published}</Moment>
      </CardSubtitle>
    </Card>
  );
};

export default Post;
