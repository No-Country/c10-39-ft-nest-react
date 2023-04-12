import { configureStore, combineReducers } from '@reduxjs/toolkit';

import sportNamesReducer from './sportSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  sportNames: sportNamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
