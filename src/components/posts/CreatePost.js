import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import axios from 'axios';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: ""
        };
    }

    createPost = () => {
        console.log("createPost");
        axios({
            method: 'post',
            url: 'http://localhost:5000/posts',
            data: this.state
        })
            .then(function (response) {
                console.log("Sucessfully added Post.");
                alert("Sucessfully added Post.");
                window.location.href = "http://localhost:3000";
            });
    }
    render() {
        const { onRequestClose } = this.props;
        return (
            <Modal
                onRequestClose={onRequestClose}
                effect={Effect.Newspaper}>

                <form className="form-group p-4">
                    <div className="form-group">
                        <h1> Add Post</h1>
                    </div>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="title" className="form-control" id="title" placeholder="Title"
                            onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label for="desc">Desc</label>
                        <input type="desc" className="form-control" id="desc" placeholder="Desc"
                            onChange={(e) => this.setState({ desc: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-success" onClick={() => this.createPost()}> Create a Post </button>
                        <button className="btn btn-info ml-2" onClick={ModalManager.close}>Close Modal</button>
                    </div>
                </form>

            </Modal>
        );
    }
}
export default CreatePost;