import React from 'react';

export default function PostCard({ title, body }) {
  return (
    <div className='postCard'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}


