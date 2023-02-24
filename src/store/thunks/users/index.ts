import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";

// get all users
const getUsers = createAsyncThunk("Users/getUsers", async () => {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    throw error;
  }
});

export { getUsers };
