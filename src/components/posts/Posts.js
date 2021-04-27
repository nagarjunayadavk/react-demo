import React, { Component, Fragment } from 'react';
import Post from './Post';
class Posts extends Component {
    constructor(props) {
        super(props);
        console.log("Posts Component", props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:5000/posts").then( res => { console.log(res); return res.json()  })
        .then(data => {
            console.log("data", data );
            this.setState({ posts: data });
        });
    }
    render() {
        return (
            <Fragment>
                <h1> Posts Data </h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(x =>
                            <Fragment>
                                <Post post= {x}/>
                            </Fragment>
                        )}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default Posts;
