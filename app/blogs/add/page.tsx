'use client'; // Mark this file as a client-side component

import { useState, useEffect } from 'react';
import AddBlogForm from '@/components/AddBlogForm'; // Ensure correct import path
import BlogList from '@/components/BlogList'; // Ensure correct import path

const AddBlogPage = () => {
  interface Blog {
    id: number;
    title: string;
    content: string;
    // Add other blog properties here
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data); // Update the blogs state with the fetched data
      } else {
        console.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Fetch the blogs when the page is loaded
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch the blogs whenever a new blog is added
  const handleAddBlog = async () => {
    await fetchBlogs(); // Fetch the latest blogs
  };

  return (
    <div>
     
      {/* AddBlogForm component */}
      <AddBlogForm onAddBlog={handleAddBlog} />

      <div>
       
        {/* BlogList component */}
        <BlogList blogs={blogs} />
        
      </div>
    </div>
  );
};

export default AddBlogPage;
