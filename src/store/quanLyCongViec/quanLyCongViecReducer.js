import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  menuLoaiCongViec: [],
  dsCongViecTheoTen: [],
  dsChiTietLoaiCongViec: [],
  isFetching: false,
};

export const {
  reducer: quanLyCongViecReducer,
  actions: quanLyCongViecActions,
} = createSlice({
  name: "quanLyCongViec",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      // layMenuLoaiCongViec
      .addCase(layMenuLoaiCongViec.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(layMenuLoaiCongViec.fulfilled, (state, action) => {
        state.menuLoaiCongViec = action.payload;
        state.isFetching = false;
      })
      .addCase(layMenuLoaiCongViec.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })

      // layDsCongViecTheoTen
      .addCase(layDsCongViecTheoTen.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(layDsCongViecTheoTen.fulfilled, (state, action) => {
        state.dsCongViecTheoTen = action.payload;
        state.isFetching = false;
      })
      .addCase(layDsCongViecTheoTen.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        console.log(action.payload);
      })

      // layCongViecTheoChiTietLoai
      .addCase(layCongViecTheoChiTietLoai.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(layCongViecTheoChiTietLoai.fulfilled, (state, action) => {
        state.dsCongViecTheoTen = action.payload;
        state.isFetching = false;
      })
      .addCase(layCongViecTheoChiTietLoai.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        console.log(action.payload);
      })

      // layDsChiTietLoaiCongViec
      .addCase(layDsChiTietLoaiCongViec.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(layDsChiTietLoaiCongViec.fulfilled, (state, action) => {
        state.dsChiTietLoaiCongViec = action.payload;
        state.isFetching = false;
      })
      .addCase(layDsChiTietLoaiCongViec.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        console.log(action.payload);
      });
  },
});

export const layMenuLoaiCongViec = createAsyncThunk(
  "quanLyCongViec/layMenuLoaiCongViec",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.respone.data);
    }
  }
);

export const layDsCongViecTheoTen = createAsyncThunk(
  "quanLyCongViec/layDsCongViecTheoTen",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`,
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      console.log(err.respone.data);
      return rejectWithValue(err.respone.data);
    }
  }
);

export const layDsChiTietLoaiCongViec = createAsyncThunk(
  "quanLyCongViec/layDsChiTietLoaiCongViec",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-chi-tiet-loai-cong-viec/${data}`,
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      console.log(err.respone.data);
      return rejectWithValue(err.respone.data);
    }
  }
);

export const layCongViecTheoChiTietLoai = createAsyncThunk(
  "quanLyCongViec/layCongViecTheoChiTietLoai",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${data}`,
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      console.log(err.respone.data);
      return rejectWithValue(err.respone.data);
    }
  }
);
