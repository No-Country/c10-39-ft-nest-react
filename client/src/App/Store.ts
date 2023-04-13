import { configureStore, combineReducers } from '@reduxjs/toolkit';

import complexReducer from './complexSlice';
import sportNamesReducer from './sportSlice';
import userReducer from './userSlice';
import searchReducer from './searchSlice';

const rootReducer = combineReducers({
  user: userReducer,
  sportNames: sportNamesReducer,
  complex: complexReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
