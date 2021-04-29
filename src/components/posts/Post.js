import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { ModalManager } from 'react-dynamic-modal';
import EditPost from './EditPost';
class Post extends Component {
    constructor(props) {
        super(props);
        console.log("Post Component", props);
        this.state = {};
    }

    deletePost = (postId) => {
        console.log(postId);
        var x = window.confirm("Are you sure you want to delete?");
        if (x) {
            axios({
                method: 'delete',
                url: 'http://localhost:5000/posts/' + postId
            })
                .then(function (response) {
                    console.log("Sucessfully deleted Post.");
                    alert("Sucessfully deleted Post.");
                    window.location.href = "http://localhost:3000";
                });
            return true;
        }
        else
            return false;

    }

    openEditModal = (post) => {
        ModalManager.open(<EditPost post={post} onRequestClose={() => true} />);
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <th scope="row">{this.props.post.id}</th>
                    <td>{this.props.post.title}</td>
                    <td>{this.props.post.desc}</td>
                    <td>
                        <button className="btn btn-info" onClick={() => this.openEditModal(this.props.post)} > Edit </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.deletePost(this.props.post.id)}> Remove </button>
                    </td>
                </tr>
            </Fragment>
        );
    }
}

export default Post;