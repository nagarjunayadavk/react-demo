import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { getPosts } from '../../actions/postActions'
function Posts({ posts, fetchAllPosts, loading }) {
    useEffect(() => {
        fetchAllPosts();
    }, [])
    return (
        <Fragment>
            <h1> Posts Data </h1>
            <div className="p-2 clearfix">
                <button type="button" 
                    className="btn btn-primary float-right">Add Post</button>
            </div>
            <div className="p-2 clearfix">
                {
                    loading ? ' Loading .......' :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description </th>
                                    <th scope="col"> Edit/ Remove </th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts ? posts.map(post =>
                                    <Fragment>
                                        <tr key={post.id}>
                                            <th scope="row">{post.id}</th>
                                            <td>{post.title}</td>
                                            <td>{post.desc}</td>
                                            <td>
                                                <button className="btn btn-info"  > Edit </button>
                                                <button className="btn btn-danger ml-2" > Remove </button>
                                            </td>
                                        </tr>
                                    </Fragment>
                                )

                                    : null}
                            </tbody>
                        </table>
                }
            </div>
        </Fragment>
    );
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchAllPosts: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    loading: state.postsStore.loading,
    posts: state.postsStore.posts
});
const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);