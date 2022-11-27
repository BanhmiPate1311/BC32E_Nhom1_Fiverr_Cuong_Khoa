import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  listHiredWork: [],
  isFetching: false,
  error: undefined,
  listServicesSearch: [],
};

export const { reducer: thueCongViecReducer, actions: thueCongViecActions } =
  createSlice({
    name: "thueCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        //getListHiredWork
        .addCase(getListHiredWork.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getListHiredWork.fulfilled, (state, action) => {
          state.isFetching = false;
          state.listHiredWork = action.payload;
        })
        .addCase(getListHiredWork.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        })
        //delHiredWork
        .addCase(delHiredWork.pending, (state, action) => {
          state.isFetching = false;
        })
        .addCase(delHiredWork.fulfilled, (state, action) => {
          state.isFetching = true;
          state.listHiredWork = action.payload;
          console.log(" action.payload: ", action.payload);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        })
        .addCase(delHiredWork.rejected, (state, action) => {
          state.isFetching = true;
          state.error = action.payload;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        })
        //getListServicesSearch
        .addCase(getServicesSearch.pending, (state, action) => {
          state.isFetching = false;
        })
        .addCase(getServicesSearch.fulfilled, (state, action) => {
          state.isFetching = true;
          state.listServicesSearch = action.payload;
        })
        .addCase(getServicesSearch.rejected, (state, action) => {
          state.isFetching = true;
          state.error = action.payload;
        });
    },
  });

export const getListHiredWork = createAsyncThunk(
  "thueCongViec/getHiredWork",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec/lay-danh-sach-da-thue",
        method: "GET",
        headers: {
          token: localStorage.getItem("TOKEN"),
          TokenCyberSoft:
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

export const delHiredWork = createAsyncThunk(
  "thueCongViec/delHiredWork",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec/${id}`,
        method: "DELETE",
        headers: {
          token: localStorage.getItem("TOKEN"),
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      console.log("result.data.content: ", result.data.content);
      dispatch(getServicesSearch());
      return result.data.content;
    } catch (err) {
      console.log("error", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getServicesSearch = createAsyncThunk(
  "thueCongViec/getServicesSearch",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=2000",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
