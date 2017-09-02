import { combineReducers } from 'redux';
import ToastReducer from './reducer_toast';

const rootReducer = combineReducers({
  toast: ToastReducer
});

export default rootReducer;
