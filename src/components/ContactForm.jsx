import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message submitted:', message);
      setSubmitted(true);
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-form">
      <h3>Contact Us</h3>
      {submitted && <p className="success-message">Thanks for your message!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="4"
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
