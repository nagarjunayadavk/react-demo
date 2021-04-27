import React, { useState, useEffect, Fragment } from 'react';

export function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/posts").then(res => res.json())
            .then(data => {
                console.log("data", data);
                setPosts(data);
            });
    }, [])

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
                    {posts.map(x =>
                        <Fragment>
                            <Post post={x} key={x.id} />
                        </Fragment>
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}


// const  Post = ({post}) => {
//     return (
//         <Fragment>
//             <tr>
//                 <th scope="row">{post.id}</th>
//                 <td>{post.title}</td>
//             </tr>
//         </Fragment>
//     );
// }

export function Post({post}) {
    return (
        <Fragment>
            <tr>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
            </tr>
        </Fragment>
    );
}

export function Header(post) {
    return (
        <Fragment>
             <h1> Header </h1>
        </Fragment>
    );
}





// class Posts extends Component {
//     constructor(props) {
//         super(props);
//         console.log("Posts Component", props);
//         this.state = {
//             posts: []
//         };
//     }
//     componentDidMount() {
//         fetch("http://localhost:5000/posts").then( res => { console.log(res); return res.json()  })
//         .then(data => {
//             console.log("data", data );
//             this.setState({ posts: data });
//         });
//     }
//     render() {
//         return (
//             <Fragment>
//                 <h1> Posts Data </h1>

//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">title</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.posts.map(x =>
//                             <Fragment>
//                                 <Post post= {x}/>
//                             </Fragment>
//                         )}
//                     </tbody>
//                 </table>
//             </Fragment>
//         );
//     }
// }