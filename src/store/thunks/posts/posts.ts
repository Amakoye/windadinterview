import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../";

// get all posts
export const getAllPosts = createAsyncThunk("Posts/getAllPosts", async () => {
  try {
    const { data } = await api.get("/posts/");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
