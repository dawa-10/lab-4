import React from 'react';

export default function PostForm({ newPost, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="postForm">
      <h2>Post Form</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={onChange}
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={onChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


