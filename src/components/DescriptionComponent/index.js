import React from "react";

import { connect } from "react-redux";

const DescriptionComponent = ({ activePostId, posts }) => {
  function renderPost(post) {
    return (
      <div key={post.id}>
        <label>Post ID</label>
        <p>{post.id}</p>
        <label>Title</label>
        <p>{post.title}</p>
        <label>Body</label>
        <p>{post.body}</p>
      </div>
    );
  }

  return (
    <div>
      {activePostId && renderPost(posts.find(post => post.id === activePostId))}
    </div>
  );
};

const mapStateToProps = state => ({
  activePostId: state.postReducer.activePostId,
  posts: state.postReducer.posts
});

export default connect(mapStateToProps)(DescriptionComponent);
