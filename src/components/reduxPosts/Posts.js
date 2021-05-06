import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { getPosts, addPost, deletePost } from '../../actions/postActions';
import { Modal, Effect } from 'react-dynamic-modal';
// import AddPost from './AddPost';

function Posts({ posts, fetchAllPosts, loading, createPostfunc, deletePostfunc }) {
    useEffect(() => {
        fetchAllPosts();
    }, [])

    let [open, setOpen] = useState(false);
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    const createPost = () => {
        createPostfunc({ title, desc });
        closeModel();
    }

    const openModal = () => setOpen(true);

    const closeModel = () => setOpen(false);
    const onRequestClose = () => setOpen(false);

    const removePost = (id) => {
        // alert(id);
        deletePostfunc(id);
    }
    return (
        <Fragment>
            <h1> Posts Data </h1>
            <div className="p-2 clearfix">
                <button type="button"
                    className="btn btn-primary float-right"
                    onClick={openModal} >Add Post</button>
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
                                { posts ? posts.map(post =>
                                    <Fragment key={post.id}>
                                        <tr key={post.id}>
                                            <th scope="row">{post.id}</th>
                                            <td>{post.title}</td>
                                            <td>{post.desc}</td>
                                            <td>
                                                <button className="btn btn-info"  > Edit </button>
                                                <button className="btn btn-danger ml-2" onClick={() => removePost(post.id)}> Remove </button>
                                            </td>
                                        </tr>
                                    </Fragment>
                                )

                                    : null}
                            </tbody>
                        </table>
                }
            </div>

            { open ?

                <Modal
                    // open={true}
                    onRequestClose={onRequestClose}
                    effect={Effect.Newspaper}>

                    <div className="form-group p-4">
                        <div className="form-group">
                            <h1> Add Post</h1>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="title" className="form-control" id="title" placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Desc</label>
                            <input type="desc" className="form-control" id="desc" placeholder="Desc"
                                onChange={(e) => setDesc(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success" onClick={() => createPost()}> Create a Post </button>
                            <button className="btn btn-info ml-2" onClick={closeModel}>Close Modal</button>
                        </div>
                    </div>

                </Modal> : null}

        </Fragment>
    );
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchAllPosts: PropTypes.func.isRequired,
    createPostfunc: PropTypes.func.isRequired,
    deletePostfunc: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    loading: state.postsStore.loading,
    posts: state.postsStore.posts
});
const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(getPosts()),
    createPostfunc: (post) => dispatch(addPost(post)),
    deletePostfunc: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);