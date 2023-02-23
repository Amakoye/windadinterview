import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../thunks/posts/posts";

const initialState: InitialState = {
  loading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export default postsSlice.reducer;

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type InitialState = {
  loading: boolean;
  posts: post[] | [];
};
