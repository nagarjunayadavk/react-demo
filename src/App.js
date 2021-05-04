
import './App.css';
// import Posts from './components/posts/Posts';
// import { Header } from './components/posts/PostsES6';
import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './components/reduxPosts/Posts';

function App() {
  return (
    <div className="container">

      {/* <Header /> */}
      <Posts />
      {/* <Posts /> */}
    </div>
  );
}

export default App;
