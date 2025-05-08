
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/users/signIn', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'فشل تسجيل الدخول');
    }
  }
);


export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:3000/api/v1/users/getUserData', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log('User data:', response.data.data.user); // Log the user data
      return response.data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'فشل جلب بيانات المستخدم');
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/api/v1/users/forgetPassword', { email });
      return res.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'فشل إرسال الكود');
    }
  }
);

export const resendResetCode = createAsyncThunk(
  'auth/resendResetCode',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/api/v1/users/resendPasswordResetCode', { email });
      return res.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'فشل إعادة إرسال الكود');
    }
  }
);

export const confirmResetCode = createAsyncThunk(
  'auth/confirmResetCode',
  async ({ passwordResetCode }, thunkAPI) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/api/v1/users/confirmPasswordResetCode', {
        email: "ama789238@gmail.com", 
        
        passwordResetCode: Number(passwordResetCode),
      });
      return res.data.status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'كود خاطئ');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, newPassword }, thunkAPI) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/api/v1/users/resetPassword', {
        email,
        newPassword,
      });
      return res.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'فشل إعادة تعيين كلمة المرور');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://127.0.0.1:3000/api/v1/users/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'فشل تسجيل الخروج');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    email: '',
    loading: false,
    error: null,
    forgotPasswordMessage: null,
    resendCodeMessage: null,
    resetCodeVerified: false,
    resetPasswordMessage: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearMessages: (state) => {
      state.forgotPasswordMessage = null;
      state.resendCodeMessage = null;
      state.resetPasswordMessage = null;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.email = '';
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('email');
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.email = action.payload.user?.email || '';
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('email', action.payload.user?.email || '');
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // console.log('User data from getUserData:', action.payload);
        // state.email = action.payload.email || '';
        if (action.payload) {
          state.user = action.payload ;
          console.log('User data from getUserData:', action.payload); // Log the user data
        } else {
          state.user = null;
        }
        localStorage.setItem('user', JSON.stringify(action.payload));
        // localStorage.setItem('email', action.payload.email || '');
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordMessage = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(resendResetCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendResetCode.fulfilled, (state, action) => {
        state.loading = false;
        state.resendCodeMessage = action.payload;
      })
      .addCase(resendResetCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(confirmResetCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmResetCode.fulfilled, (state) => {
        state.loading = false;
        state.resetCodeVerified = true;
      })
      .addCase(confirmResetCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.resetCodeVerified = false;
      })

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetPasswordMessage = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.email = '';
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('email');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setEmail, setToken, logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;
