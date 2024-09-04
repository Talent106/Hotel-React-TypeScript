import { combineReducers } from 'redux';
// Import your individual reducers here
// import someReducer from './someReducer';

const rootReducer = combineReducers({
  // Add your reducers here
  // some: someReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;