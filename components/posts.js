import Post from "./post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, i) => {
        return <Post post={post} key={`post_${post.id}`} />;
      })}
    </div>
  );
};

export default Posts;
