import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";

//get post comments
const getComments = createAsyncThunk(
  "Comments/getComments",
  async ({ postId }: getCommentParams) => {
    try {
      const { data } = await api.get(`/posts/${postId}/comments`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

type getCommentParams = {
  postId: number;
};

export { getComments };
