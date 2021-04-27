import React, { Component, Fragment } from 'react'
class Post extends Component {
    constructor(props) {
        super(props);
        console.log("Post Component", props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <tr>
                <th scope="row">{this.props.post.id}</th>
                    <td>{this.props.post.title}</td> 

                    {/* <th scope="row">{x.id}</th>
                    <td>{x.title}</td> */}
                </tr>
            </Fragment>
        );
    }
}

export default Post;