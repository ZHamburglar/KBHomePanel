import { combineReducers } from 'redux';
import ToastReducer from './reducer_toast';
import NewsReducer from './news_reducer';

const rootReducer = combineReducers({
  toast: ToastReducer,
  news: NewsReducer
});

export default rootReducer;
