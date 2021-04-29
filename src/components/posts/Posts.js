import React, { Component, Fragment } from 'react';
import Post from './Post';
import { ModalManager } from 'react-dynamic-modal';
import CreatePost from './CreatePost';
class Posts extends Component {
    constructor(props) {
        super(props);
        console.log("Posts Component", props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:5000/posts").then(res => { console.log(res); return res.json() })
            .then(data => {
                console.log("data", data);
                this.setState({ posts: data });
            });
    }
    openModal = () => {
        ModalManager.open(<CreatePost onRequestClose={() => true} />);
    }

    render() {
        return (
            <Fragment>
                <h1> Posts Data </h1>
                <div className="p-2 clearfix">
                    <button type="button" onClick={() => this.openModal()}
                        className="btn btn-primary float-right">Add Post</button>
                </div>
                <div className="p-2 clearfix">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> Title </th>
                                <th scope="col"> Desc </th>
                                <th scope="col"> Edit/ Remove </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.posts.map(x =>
                                <Post post={x} key={x.id} />
                            )}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

export default Posts;
