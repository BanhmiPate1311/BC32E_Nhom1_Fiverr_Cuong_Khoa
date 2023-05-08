import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  isFetching: false,
  workType: [],
  error: undefined,
  workTypeById: undefined,
};

export const { reducer: loaiCongViecReducer, actions: loaiCongViecActions } =
  createSlice({
    name: "loaiCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        //getWorkType
        .addCase(getWorkType.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getWorkType.fulfilled, (state, action) => {
          state.isFetching = false;
          state.workType = action.payload;
        })
        .addCase(getWorkType.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        })
        //deleteWorkType
        .addCase(deleteWorkType.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(deleteWorkType.fulfilled, (state, action) => {
          state.isFetching = false;
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        })
        .addCase(deleteWorkType.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        })
        //putWorkType
        .addCase(putWorkType.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(putWorkType.fulfilled, (state, action) => {
          state.isFetching = false;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .addCase(putWorkType.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        })
        //postNewWorkType
        .addCase(postNewWorkType.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(postNewWorkType.fulfilled, (state, action) => {
          state.isFetching = false;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .addCase(postNewWorkType.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        })
        //getWorkTypeById
        .addCase(getWorkTypeById.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getWorkTypeById.fulfilled, (state, action) => {
          state.isFetching = false;
          state.workTypeById = action.payload;
        })
        .addCase(getWorkTypeById.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        });
    },
  });

export const getWorkType = createAsyncThunk(
  "loaiCongViec/getWorkType",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/loai-cong-viec",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteWorkType = createAsyncThunk(
  "loaiCongViec/deleteWorkType",
  async (workId, { dispatch, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/loai-cong-viec/${workId}`,
        method: "DELETE",
        headers: {
          token: localStorage.getItem("TOKEN"),
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
      });
      dispatch(getWorkType());
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const putWorkType = createAsyncThunk(
  "loaiCongViec/putWorkType",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/loai-cong-viec/${data.id}`,
        method: "PUT",
        headers: {
          token: localStorage.getItem("TOKEN"),
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
        data,
      });
      console.log("data: ", data);
      dispatch(getWorkType());
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const postNewWorkType = createAsyncThunk(
  "loaiCongViec/postNewWorkType",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/loai-cong-viec",
        method: "POST",
        headers: {
          token: localStorage.getItem("TOKEN"),
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
        data,
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getWorkTypeById = createAsyncThunk(
  "loaiCongViec/getWorkTypeById",
  async (workTypeId, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/loai-cong-viec/${workTypeId}`,
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
