import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isFetching: false,
  userInfo: undefined,
  error: undefined,
  listUserPageSearch: undefined,
};

export const { reducer: nguoiDungReducer, actions: nguoiDungActions } =
  createSlice({
    name: "nguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        //getUser
        .addCase(getUser.pending, (state) => {
          state.isFetching = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
          state.userInfo = action.payload;
          console.log(action.payload);
          state.isFetching = false;
        })
        .addCase(getUser.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        })
        //putUser
        .addCase(putUserInfo.pending, (state, acton) => {
          state.isFetching = true;
        })
        .addCase(putUserInfo.fulfilled, (state, action) => {
          state.isFetching = false;
          state.userInfo = action.payload;
        })
        .addCase(putUserInfo.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        })
        //postUploadAvatar
        .addCase(postUploadAvatar.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(postUploadAvatar.fulfilled, (state, action) => {
          state.isFetching = false;
          console.log(" action.payload: ", action.payload);
        })
        .addCase(postUploadAvatar.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
          console.log("action.payload reject: ", action.payload);
        })

        //getUserPageSearch
        .addCase(getUserPageSearch.pending, (state, action) => {
          state.isFetching = false;
        })
        .addCase(getUserPageSearch.fulfilled, (state, action) => {
          state.isFetching = true;
          state.listUserPageSearch = action.payload;
          console.log("action.payload: ", action.payload);
        })
        .addCase(getUserPageSearch.rejected, (state, action) => {
          state.isFetching = true;
          state.error = action.payload;
        });
    },
  });

export const getUser = createAsyncThunk(
  "nguoiDung/getUser",
  async (userId, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/users/${userId}`,
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      console.log("result.data.content: ", result.data.content);
      return result.data.content;
    } catch (err) {
      console.log("error", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const putUserInfo = createAsyncThunk(
  "nguoiDung/putUserProfile",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/users/${data.id}`,
        method: "PUT",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      console.log("dat", data);
      console.log("result.data.content: ", result.data.content);
      return result.data.content;
    } catch (err) {
      console.log("error", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const postUploadAvatar = createAsyncThunk(
  "nguoiDung/postUploadAvatar",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/users/upload-avatar",
        method: "POST",
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MjgiLCJlbWFpbCI6ImhoMUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTY2OTIyMjkxMSwiZXhwIjoxNjY5ODI3NzExfQ.AAyTIENVr6y3t2ig_jpZU54OEUtSPr4c-IFfK5w92WY",
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      return result.data.content;
    } catch (err) {
      console.log("error", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserPageSearch = createAsyncThunk(
  "nguoiDung/getUserPageSearch",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/users/phan-trang-tim-kiem?pageIndex=1&pageSize=100",
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
