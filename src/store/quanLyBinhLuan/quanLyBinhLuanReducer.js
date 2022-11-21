import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  isFetching: false,
  dsBinhLuan: [],
};

export const {
  reducer: quanLyBinhLuanReducer,
  actions: quanLyBinhLuanActions,
} = createSlice({
  name: "quanLyBinhLuan",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider

      // layBinhLuanTheoCongViec
      .addCase(layBinhLuanTheoCongViec.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(layBinhLuanTheoCongViec.fulfilled, (state, action) => {
        state.dsBinhLuan = action.payload;
        state.isFetching = false;
      })
      .addCase(layBinhLuanTheoCongViec.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        console.log(action.payload);
      })

      // Gui Binh luan
      .addCase(guiBinhLuan.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(guiBinhLuan.fulfilled, (state, action) => {
        state.isFetching = false;
        console.log(action.payload);
      })
      .addCase(guiBinhLuan.rejected, (state, action) => {
        state.error = action.payload;
        console.log(action.payload);
        state.isFetching = false;
        Swal.fire({
          icon: "error",
          title: "Thất bại...",
          text: action.payload.content,
          footer: '<a href="">Xin cảm ơn</a>',
        });
      });
  },
});

export const layBinhLuanTheoCongViec = createAsyncThunk(
  "quanLyBinhLuan/layBinhLuanTheoCongViec",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-cong-viec/${data}`,
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const guiBinhLuan = createAsyncThunk(
  "quanLyBinhLuan/guiBinhLuan",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/binh-luan",
        method: "POST",
        headers: {
          token: localStorage.getItem("TOKEN"),
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
