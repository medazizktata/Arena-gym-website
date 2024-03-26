import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch blog post data for the specified postId
    fetch(`/api/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching blog post:', error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Published on: {new Date(post.publishedDate).toLocaleDateString()}</p>
      {/* Add comments section if needed */}
    </div>
  );
}

export default BlogPostDetail;
