import {
    configureStore,
    combineReducers,
    applyMiddleware,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import userReducer from "./features/user/userSlice";
  import thunk from "redux-thunk";
//   import { loginuser, registerUser } from "../actions/user";
  
  const reducer = combineReducers({
    user: userReducer,
  
  });
  const initialState = {};
  
  
  export default configureStore({
    reducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  
  });
  