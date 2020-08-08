import { useRouter } from "next/router";
import Query from "../components/query";
import POST_QUERY from "../apollo/queries/post/post";
import Markdown from "react-markdown";
// import Moment from "react-moment";

const Post = () => {
  const router = useRouter();
  return (
    <Query query={POST_QUERY} id={router.query.id}>
      {({ data: { post } }) => {
        return (
          <div>
            <h1>{post.Title}</h1>
            <br />
            <Markdown source={post.Content} />
            <br />
            <p>
              {/* <Moment format="MMM Do YYYY">{post.Published}</Moment> */}
              <br/>
              {
                  post.tags.map((tag, i) => {
                    return <span key={i}>{tag.Name}&nbsp;</span>
                  })
              }
            </p>
          </div>
        );
      }}
    </Query>
  );
};

export default Post;
