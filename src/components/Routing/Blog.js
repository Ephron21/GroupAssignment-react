// Blog Component
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Blog() {
  const posts = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Advanced React Patterns' },
    { id: 3, title: 'React Router Explained' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Blog</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: '10px 0' }}>
            <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
export default Blog;  