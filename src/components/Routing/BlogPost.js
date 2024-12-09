// Individual Blog Post Component
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  const posts = {
    1: 'React Basics: Learn about components, state, and props.',
    2: 'Advanced React Patterns: Dive deeper into hooks and performance optimization.',
    3: 'React Router Explained: Understand routing and navigation in React.',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Blog Post Details</h1>
      <p>{posts[postId] || 'Post not found.'}</p>
    </div>
  );
}

export default BlogPost;

  