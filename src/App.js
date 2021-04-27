
import './App.css';
// import Posts from './components/posts/Posts';
import { Header, Posts } from './components/posts/PostsES6';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      {/* <Posts/> */}
      <Header />
      <Posts />
    </div>
  );
}

export default App;
