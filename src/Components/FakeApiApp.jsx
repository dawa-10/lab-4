import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostContainer from './PostContainer';
import "../App.css"

export default function FakeApiApp() {
    const URL = " https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch(URL);
    const posts = await response.json();
    setData((posts.reverse() ));
    setIsLoading(false);
  };
  

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
      {isLoading ? <p>Loading...</p> : <PostContainer posts={data} />}
    </div>
  );
}


