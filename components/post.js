import Link from "next/link";

const Post = ({ post }) => {
  return (
    <Link href={{ pathname: "post", query: { id: post.id } }}>
      <a>
        <div>
          <h2>{post.Title}</h2>
          <dd>{post.Published}</dd>
        </div>
      </a>
    </Link>
  );
};

export default Post;
