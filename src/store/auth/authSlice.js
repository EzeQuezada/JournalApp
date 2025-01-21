import { Email } from '@mui/icons-material';
import { display } from '@mui/system';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const authSlice = createSlice({
  name: "auth",
  initialState:{
    status: "not-authenticated", //"checking""not-authenticated", "authenticated"
    uid:null,
    Email: null,
    displayName:null,
    photoURL:null,
    errorMessage:null,
  },
  reducers: {
    login: (state, {payload}) =>{
      state.status = "authenticated", //"checking""not-authenticated", "authenticated"
      state.uid = payload.uid,
      state.Email = payload.email,
      state.displayName = payload.displayName,
      state.photoURL = payload.photoURL,
      state.errorMessage = null;
    }, 
    logout: (state, { payload })=>{
      state.status = "not-authenticated", //"checking""not-authenticated", "authenticated"
      state.uid = null,
      state.Email = null,
      state.displayName = null,
      state.photoURL = null,
      state.errorMessage = payload.errorMessage;
    },

    checkingCredentials: (state) => {
        state.status = "checking"
    },
  }
});

export const {login, logout, checkingCredentials} = authSlice.actions
  
// export default authSlice.reducer