

interface Blog {
  id: number;
  title: string;
  content: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center  mb-6">Blog List</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn"
          >
            <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
