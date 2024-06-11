import './App.css';
import CreatePost from './Components/CreatePosts/createPost';
import PostList from './Components/PostLists/postList';


function App() {

  return (
    <div className="App">
      <CreatePost/>
      <PostList/>
    </div>
  );
}

export default App;