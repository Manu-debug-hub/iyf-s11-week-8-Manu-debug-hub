import { useState } from 'react';

export default function EventExamples() {
  const [message, setMessage] = useState('Waiting for event...');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  const handleMouseEnter = () => {
    setMessage('Mouse entered the box!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the box!');
  };

  const handleInput = (e) => {
    setMessage(`You typed: ${e.target.value}`);
  };

  return (
    <div className="event-examples">
      <h3>Event Examples</h3>
      <p>{message}</p>

      <button onClick={handleClick}>Click Me</button>

      <div
        className="event-box"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>

      <input
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
      />
    </div>
  );
}
