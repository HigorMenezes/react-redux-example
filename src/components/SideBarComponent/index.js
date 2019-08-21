import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PostActions from "../../store/actions/postActions";

const SideBarComponent = ({ posts, toggleActivePost }) => {
  return (
    <aside>
      {posts.map(post => (
        <div key={post.id}>
          <li>{post.title}</li>
          <button onClick={() => toggleActivePost(post.id)}>Show detail</button>
        </div>
      ))}
    </aside>
  );
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComponent);
