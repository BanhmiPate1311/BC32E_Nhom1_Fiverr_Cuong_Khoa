import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isFetching: false,
  listWorkType: [],
  error: undefined,
};

export const {
  reducer: chiTietLoaiCongViecReducer,
  actions: chiTietLoaiCongViecActions,
} = createSlice({
  name: "chiTietLoaiCongViec",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //getWorkType
      .addCase(getDetailWorkType.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getDetailWorkType.fulfilled, (state, action) => {
        state.isFetching = false;
        state.listWorkType = action.payload;
      })
      .addCase(getDetailWorkType.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })
      //deleteWorkType
      .addCase(deleteDetailWorkType.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(deleteDetailWorkType.fulfilled, (state, action) => {
        state.isFetching = false;
      })
      .addCase(deleteDetailWorkType.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const getDetailWorkType = createAsyncThunk(
  "chiTietLoaiCongViec/getDetailWorkType",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=200",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteDetailWorkType = createAsyncThunk(
  "chiTietLoaiCongViec/deleteDetailWorkType",
  async (workId, { dispatch, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/chi-tiet-loai-cong-viec/${workId}`,
        method: "DELETE",
        headers: {
          token: localStorage.getItem("TOKEN"),
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      dispatch(getDetailWorkType());
      return result.data.content;
    } catch (err) {
      console.log(
        "rejectWithValue(err.response.data): ",
        rejectWithValue(err.response.data)
      );
      return rejectWithValue(err.response.data);
    }
  }
);
