import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectPostsState = (state: State) => state.postsReducer;

const selectAllPosts = createDraftSafeSelector(
  selectPostsState,
  (state) => state.posts
);

export { selectAllPosts };
