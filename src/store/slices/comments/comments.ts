import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../thunks/comments/comments";

const initialState: State = {
  loading: false,
  comments: [],
};

const commentsSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
  },
});

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type State = {
  loading: boolean;
  comments: Comment[] | [];
};

export default commentsSlice.reducer;
