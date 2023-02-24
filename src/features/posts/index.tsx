import { styled } from "@mui/material/styles";
import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "store";
import { getAllPosts } from "store/thunks/posts/posts";
import Post from "./Post";

const Posts: FC = () => {
  const dispatch = useDispatch();
  //state

  const { loading, posts } = useSelector((store) => store.postsReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, posts.length]);

  return (
    <RootStyles>
      {loading && <p>Loading...</p>}
      {posts.map((post, i) => (
        <Post key={post.id} {...post} />
      ))}
    </RootStyles>
  );
};

const RootStyles = styled(
  "section",
  {}
)<{}>(({}) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2em ",
  marginTop: "1em",
}));

export default Posts;
