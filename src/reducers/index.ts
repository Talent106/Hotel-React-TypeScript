import { combineReducers } from 'redux';
import AppReducer from './App';
import ProductsReducer from './Products';

const rootReducer = combineReducers({
  app: AppReducer,
  products: ProductsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;