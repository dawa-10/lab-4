import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostContainer from './PostContainer';
import "../App.css"

export default function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    // Fetch initial data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        setData(posts.reverse()); // Display in descending order
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { ...newPost, id: data.length + 1 };
    setData([post, ...data]); // Add the new post to the top of the list
    setNewPost({ title: '', body: '' }); // Reset the form fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <div className="appContainer">
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {loading ? <p>Loading...</p> : <PostContainer posts={data} />}
    </div>
  );
}


