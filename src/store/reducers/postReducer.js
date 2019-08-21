import payload from "../../payload";

const INITIAL_STATE = { posts: payload.posts };

export default function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_ACTIVE_POST":
      return { ...state, activePostId: action.activePostId };
    default:
      return state;
  }
}
