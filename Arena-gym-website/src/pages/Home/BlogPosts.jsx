import React, { useState, useEffect } from 'react';

function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog post data and setPosts
    fetch('/path/to/blogData.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;