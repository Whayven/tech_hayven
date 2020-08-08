import Posts from "../components/posts";
import Query from "../components/query";
import POST_QUERY from "../apollo/queries/post/posts"

const Post = () => {
    return (
        <div>
            <h1>Blog</h1>
            <Query query={POST_QUERY}>
                {({ data: { posts } }) => {
                    return <Posts posts={posts} />;
                }}
            </Query>
        </div>
    )
};

export default Post;