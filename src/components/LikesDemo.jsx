import { useState } from 'react';

export default function LikesDemo() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="likes-demo">
      <h3>Likes Demo</h3>
      <p>Total Likes: {likes}</p>
      <button
        onClick={handleLike}
        className={liked ? 'liked' : ''}
        style={{
          backgroundColor: liked ? '#ff6b6b' : '#ddd',
          color: liked ? 'white' : 'black',
        }}
      >
        {liked ? '❤️ Unlike' : '🤍 Like'}
      </button>
    </div>
  );
}
