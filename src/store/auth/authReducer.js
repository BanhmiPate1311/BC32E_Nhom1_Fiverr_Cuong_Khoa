import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let user = undefined;
if (localStorage.getItem("USER_LOGIN")) {
  user = JSON.parse(localStorage.getItem("USER_LOGIN"));
}

const initialState = {
  isFetching: false,
  userLogIn: user,
  error: undefined,
};

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //đăng nhập
      .addCase(signUp.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log("action", action.payload);
        state.isFetching = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
      })
      //đăng ký
      .addCase(signIn.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userLogIn = action.payload;
        state.isFetching = false;
        localStorage.setItem("TOKEN", action.payload.token);
        localStorage.setItem("USER_LOGIN", JSON.stringify(action.payload));
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
      });
  },
});

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/auth/signup",
        method: "POST",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      console.log("message", result.data.content);
      return result.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/auth/signin",
        method: "POST",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      console.log("response", result.data.statusCode);
      return result.data.content;
    } catch (error) {
      console.log("error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
