import PostCard from './PostCard';

export default function PostList() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt:
        'Learn the basics of React and how to build interactive web applications.',
      author: 'Sarah Chen',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Building Communities Online',
      excerpt:
        'Discover strategies for fostering engagement and creating meaningful connections.',
      author: 'Marcus Johnson',
      date: '2024-01-12',
    },
    {
      id: 3,
      title: 'Web Development Best Practices',
      excerpt:
        'Essential tips and tricks for writing clean, maintainable, and scalable code.',
      author: 'Emma Rodriguez',
      date: '2024-01-10',
    },
  ];

  return (
    <section className="post-list">
      <h3>Latest Posts</h3>
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
}
