import {
  BBC_LOADING,
  BBC_LOADING_FAIL,
  BBC_FOUND
} from '../actions/types';

const INITIAL_STATE = {
  bbc_news: '',
  bbc_loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BBC_LOADING:
      console.log('BBC News load');
      return { ...state, bbc_loading: true};
    case BBC_FOUND:
      console.log('BBC News found');
      return { ...state, bbc_loading: false, bbc_news: action.payload};
    default:
      return state;
  }
}
