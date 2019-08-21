import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import * as PostAction from "../actions/postActions";

function* fetchPosts() {
  const { data: posts } = yield axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  yield put(PostAction.setPosts(posts));
}

export function* postsWatcher() {
  yield takeLatest("FETCH_POSTS", fetchPosts);
}
