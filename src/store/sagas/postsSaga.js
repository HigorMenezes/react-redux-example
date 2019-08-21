import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import * as PostAction from "../actions/postActions";

function* fetchPostsSaga() {
  const timeout = new Promise((resolve, rejected) =>
    setTimeout(
      () => resolve(axios.get("https://jsonplaceholder.typicode.com/posts")),
      2000
    )
  );

  const { data: posts } = yield timeout;

  yield put(PostAction.setPosts(posts));
}

export function* postsWatcher() {
  yield takeLatest("FETCH_POSTS", fetchPostsSaga);
}
