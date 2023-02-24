import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../thunks/users";

const initialState: InitialState = {
  loading: false,
  users: [],
};

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setCurreuntUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
  },
});

type InitialState = {
  loading: boolean;
  users: User[] | [];
  user?: User;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export const { setCurreuntUser } = usersSlice.actions;

export default usersSlice.reducer;
