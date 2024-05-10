import './App.css';
import { useEffect, useState } from 'react';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Hello World',
      content: 'This is the first post'
    },
    {
      id: 2,
      title: 'Hello Vue',
      content: 'This is the second post'
    }
  ]);

  const [newPostContent, setNewPostContent] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: 'New Post',
      content: newPostContent
    };

    setPosts([...posts, newPost]);
    setNewPostContent('');
  };

  useEffect(() => {
    setPosts(posts);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Enter post content"
        />
        <button onClick={handleAddPost}>Add</button>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <EditModal postId={post.id} posts={posts} setPosts={setPosts} />
            <DeleteModal postId={post.id} posts={posts} setPosts={setPosts} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
