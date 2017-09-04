import axios from 'axios';

import {
  BBC_LOADING,
  BBC_LOADING_FAIL,
  BBC_FOUND
} from '../actions/types';

export const bbcFetch = () => {
  return (dispatch) => {
    console.log("Searching for news")
    dispatch({type: BBC_LOADING});
    setTimeout(() => {
      dispatch({ type: BBC_LOADING_FAIL });
    }, 5000)
    axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=612a150f5d4b480d95b3a7d0d5befe1f')
      .then(console.log("BBC Found"))
  }
}
