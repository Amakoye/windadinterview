import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectPostsState = (state: State) => state.postsReducer;

const selectAllPosts = createDraftSafeSelector(
  selectPostsState,
  (state) => state.posts
);

const postsLoading = createDraftSafeSelector(
  selectPostsState,
  (state) => state.loading
);

export { selectAllPosts, postsLoading };
