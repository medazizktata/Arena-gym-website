import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog post data
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
            <p>Author: {post.author}</p>
            <p>Published on: {new Date(post.publishedDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
