import Post from "./post-card";
import { Container } from "reactstrap";

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post, i) => {
        return <Post post={post} key={`post_${post.id}`} />;
      })}
    </Container>
  );
};

export default Posts;
