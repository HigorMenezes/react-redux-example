export function toggleActivePost(activePostId) {
  return {
    type: "TOGGLE_ACTIVE_POST",
    activePostId
  };
}
