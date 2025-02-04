import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';


interface AddBlogFormProps {
  onAddBlog: () => void;
}

const AddBlogForm: React.FC<AddBlogFormProps> = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        alert('Blog added successfully!');
        setTitle('');
        setContent('');
        onAddBlog(); // Trigger the parent to refresh the blog list
      } else {
        alert('Failed to add blog');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mb-6'>Add Blogs</h1>
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8 animate__animated animate__fadeIn"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add Blog
      </button>
    </form>
    </div>
  );
};

export default AddBlogForm;
