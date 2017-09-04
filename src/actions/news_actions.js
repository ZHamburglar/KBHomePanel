import axios from 'axios';

import {
  BBC_LOADING,
  BBC_LOADING_FAIL
} from '../actions/types';

export const bbcFetch = () => {
  return (dispatch) => {
    console.log("Searching for news")
    dispatch({type: BBC_LOADING});
    setTimeout(() => {
      dispatch({ type: BBC_LOADING_FAIL });
    }, 5000)
  }
}
