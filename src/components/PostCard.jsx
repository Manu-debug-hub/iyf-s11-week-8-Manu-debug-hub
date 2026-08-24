export default function PostCard({ title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="post-meta">
        <span className="author">By {author}</span>
        <span className="date">{date}</span>
      </div>
    </article>
  );
}
