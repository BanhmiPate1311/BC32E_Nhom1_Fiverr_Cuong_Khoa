import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  allWork: [],
  isFetching: false,
};

export const { reducer: congViecReducer, actions: congViecActions } =
  createSlice({
    name: "congViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        //getWork
        .addCase(getAllWork.pending, (state, action) => {
          state.isFetching = false;
        })
        .addCase(getAllWork.fulfilled, (state, action) => {
          state.isFetching = true;
          state.allWork = action.payload;
        })
        .addCase(getAllWork.rejected, (state, action) => {
          state.isFetching = true;
          state.error = action.payload;
        })
        //deleteWork
        .addCase(deleteWork.pending, (state, action) => {
          state.isFetching = false;
        })
        .addCase(deleteWork.fulfilled, (state, action) => {
          state.isFetching = true;
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        })
        .addCase(deleteWork.rejected, (state, action) => {
          state.isFetching = true;
          state.error = action.payload;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    },
  });

export const getAllWork = createAsyncThunk(
  "congViec/getAllWork",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/cong-viec",
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

export const deleteWork = createAsyncThunk(
  "congViec/deleteWork",
  async (workId, { dispatch, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/${workId}`,
        method: "DELETE",
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NDgiLCJlbWFpbCI6ImhoMkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE2Njk0NzI4MDAsImV4cCI6MTY3MDA3NzYwMH0.rWEJHUkalkNp5LlKUjqaDldHr1tyJ-3Wuj-43NYl_kc",
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      dispatch(getAllWork());
      return result.data.content;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);
