import { styled } from "@mui/material/styles";
import { FC, useEffect } from "react";
import { store, useDispatch } from "store";
import { selectAllPosts } from "store/selectors/posts";
import { getAllPosts } from "store/thunks/posts/posts";
import Post from "./Post";

const Posts: FC = () => {
  const dispatch = useDispatch();
  //state
  const state = store.getState();
  const posts = selectAllPosts(state);

  console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <RootStyles>
      {posts.length && posts.map((post, i) => <Post key={post.id} {...post} />)}
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
