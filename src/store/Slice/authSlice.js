
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const checkUserInteraction = createAsyncThunk(
  'auth/checkUserInteraction',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/users/interaction', { email });
      console.log('Interaction response:', response.data); 
      return response.data.message; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'حدث خطأ في السيرفر');
    }
  }
);

export const verifyEmailThunk = createAsyncThunk(
  'auth/verifyEmail',
  async (email, { rejectWithValue }) => {
    try {
      if (!email) {
        return rejectWithValue('البريد الإلكتروني غير موجود.');
      }

      const response = await axios.post('http://127.0.0.1:3000/api/v1/users/verifyEmail', { email });
      console.log(" Email sent to server:", email);
      return response.data.message;
    } catch (error) {
      console.log(" Error from server:", error.response?.data?.message);
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

export const confirmVerificationCode = (emailVerificationCode, email) => async (thunkAPI) => {
  try {
    // const email = localStorage.getItem('email'); 
  // const email = state.auth.email;
    if (!email) {
      return thunkAPI.rejectWithValue('البريد الإلكتروني غير موجود.');
    }

    const response = await axios.post('http://127.0.0.1:3000/api/v1/users/confirmEmailVerificationCode', {
      email:email,  
      emailVerificationCode: Number(emailVerificationCode),
    });
   console.log("code and email", response.data)
    return response.data.status;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'كود خاطئ');
  }
};

export const signUp = createAsyncThunk('auth/signUp', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/api/v1/users/signup', userData);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('email', user.email);
    localStorage.setItem('name', user.name);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message || 'Signup failed');
  }
});


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
  async ({ email, passwordResetCode }, thunkAPI) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/api/v1/users/confirmPasswordResetCode', {
        email,
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
  async ({ email, password, passwordConfirm }, thunkAPI) => {
    try {
      const res = await axios.post('http://127.0.0.1:3000/api/v1/users/resetPassword', {
        email,
        password,
        passwordConfirm,
      });
      return res.data;
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

export const deleteAccount = createAsyncThunk(
  'user/deleteAccount',
  async (_, thunkAPI) => {
    try {
      const token =localStorage.getItem('token');;
      console.log("Token deket",token)
      await axios.delete('http://127.0.0.1:3000/api/v1/users/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('user');
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Failed to delete account');
    }
  }
);

export const updateUserData = async (userData, token) => {
  const res = await axios.patch(
    'http://127.0.0.1:3000/api/v1/users/updateUserData',
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;
};

export const updateUserMobilePhone = async (mobilePhone, token) => {
  const res = await axios.patch(
    'http://127.0.0.1:3000/api/v1/users/updateUserMobilePhone',
    { mobilePhone },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    email: '',
     signupData: {},
     interactionMessage: '',
    loading: false,
    error: null,
    forgotPasswordMessage: null,
    emailVerificationStatus: '',
    resendCodeMessage: null,
    resetCodeVerified: false,
    resetPasswordMessage: null,
    isVerified:false,
    verifyEmailSuccess: false,
    verifyEmailMessage: '',
    name: localStorage.getItem('name') || null,
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
     saveStepData: (state, action) => {
      state.signupData = { ...state.signupData, ...action.payload };
    },
    clearSignupData: (state) => {
      state.signupData = {};
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.email = '';
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('email');
    },
        resetVerifyEmailState: (state) => {
      state.loading = false;
      state.verifyEmailSuccess = false;
      state.verifyEmailMessage = '';
      state.error = null;
    },


  },
  extraReducers: (builder) => {
    builder
    .addCase(checkUserInteraction.pending, (state) => {
       state.loading = true;
        state.error = null;
      })
      .addCase(checkUserInteraction.fulfilled, (state, action) => {
        state.loading = false;
        state.interactionMessage = action.payload;
      })
      .addCase(checkUserInteraction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       .addCase(verifyEmailThunk.pending, (state) => {
        state.loading = true;
        state.verifyEmailSuccess = false;
        state.error = null;
      })
      .addCase(verifyEmailThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyEmailSuccess = true;
        state.verifyEmailMessage = action.payload;
      })
      .addCase(verifyEmailThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.verifyEmailSuccess = false;
      })

       .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.email = action.payload.data.user.email;
         localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem("email", action.payload.user.email);

        
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

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
      })
            .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  
  },
  
});

export const { setEmail, setToken, logout, clearMessages ,resetVerifyEmailState,saveStepData, clearSignupData } = authSlice.actions;
export default authSlice.reducer;



