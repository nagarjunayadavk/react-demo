
import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { connect } from 'react-redux'
import { addPost } from '../../actions/postActions';

class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: ""
        };
    }

    createPost = () => {
        addPost(this.state);
    }
    render() {
        const { onRequestClose } = this.props;
        return (
            <Modal
                open={true}
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


const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    addPost: (post) => dispatch(addPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);



// import React, { useState, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
// import { addPost } from '../../actions/postActions';
// import { Modal, ModalManager, Effect } from 'react-dynamic-modal';


// function AddPost({ addPost, onRequestClose }) {

//     let [title, setTitle] = useState("");
//     let [desc, setDesc] = useState("");

//     const createPost = () => {
//         addPost({ title, desc });
//     }
//     return (
//         <Fragment>
//             <Modal
//                 onRequestClose={onRequestClose}
//                 effect={Effect.Newspaper}>

//                 <form className="form-group p-4">
//                     <div className="form-group">
//                         <h1> Add Post</h1>
//                     </div>
//                     <div className="form-group">
//                         <label for="title">Title</label>
//                         <input type="title" className="form-control" id="title" placeholder="Title"
//                             onChange={(e) => setTitle(e.target.value)} />
//                     </div>
//                     <div className="form-group">
//                         <label for="desc">Desc</label>
//                         <input type="desc" className="form-control" id="desc" placeholder="Desc"
//                             onChange={(e) => setDesc(e.target.value)} />
//                     </div>

//                     <div className="form-group">
//                         <button className="btn btn-success" onClick={() => createPost()}> Create a Post </button>
//                         <button className="btn btn-info ml-2" onClick={ModalManager.close}>Close Modal</button>
//                     </div>
//                 </form>

//             </Modal>
//         </Fragment>
//     )
// }

// AddPost.propTypes = {
//     addPost: PropTypes.func.isRequired,
//     onRequestClose: PropTypes.func.isRequired
// }
// const mapStateToProps = state => ({

// });
// const mapDispatchToProps = dispatch => ({
//     addPost: (post) => dispatch(addPost(post))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddPost);