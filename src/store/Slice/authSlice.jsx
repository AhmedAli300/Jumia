import { createSlice } from '@reduxjs/toolkit';

const userAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    userAuth: false,
  },
  reducers: {

  },
});
export default userAuthSlice.reducer;
