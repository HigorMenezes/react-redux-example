import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PostActions from "../../store/actions/postActions";

const SideBarComponent = ({ posts, loading, toggleActivePost, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return loading ? (
    "loading"
  ) : (
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
  posts: state.postReducer.posts,
  loading: state.postReducer.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComponent);
