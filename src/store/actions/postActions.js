export function toggleActivePost(activePostId) {
  return {
    type: "TOGGLE_ACTIVE_POST",
    activePostId
  };
}

export function setPosts(posts) {
  return {
    type: "SET_POSTS",
    posts
  };
}

export function fetchPosts() {
  return {
    type: "FETCH_POSTS"
  };
}
