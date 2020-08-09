import Posts from "../components/posts";
import Query from "../components/query";
import POST_QUERY from "../apollo/queries/post/posts";
import { Container } from "reactstrap";

const Post = () => {
    return (
        <Container>
            <h1 className="text-center">Blog</h1>
            <Query query={POST_QUERY}>
                {({ data: { posts } }) => {
                    return <Posts posts={posts} />;
                }}
            </Query>
        </Container>
    )
};

export default Post;