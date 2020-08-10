import POST_QUERY from "../apollo/queries/post/posts";
import { useQuery } from "@apollo/react-hooks"; 

export function getAllPostIds() {
  const { data, error } = useQuery(POST_QUERY);
  if (error) return console.log(JSON.stringify(error));
  const { posts } = data;

  return posts.map(post => {
      return {
          params: {
              id: post.id
          }
      }
  })
}
