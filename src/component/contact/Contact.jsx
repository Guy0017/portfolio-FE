import "./index.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      location,
      subject,
      message,
    };

    for (const key in formData) {
      const inputLength = formData[key].length;

      const whitespaceCount = formData[key]
        .split("")
        .filter((char) => char === " ").length;

      if (inputLength === whitespaceCount) {
        return setError(
          `Error: ${key[0].toUpperCase().concat(key.slice(1))} is empty`
        );
      }
    }

    if (!error) {

      setSubmitted(true);
    }
  };

  const closeErrorMeg = () => {
    setError(false);
  };

  return (
    <>
      {error ? (
        <div className="error--container">
          <h2>{error}</h2>

          <button className="button" onClick={closeErrorMeg}>
            Close
          </button>
        </div>
      ) : null}

      <div className="contact--container">
        <h2 className="contact--title">CONTACT FORM</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="elementContainer">
            <label>Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              disabled={error || submitted}
            ></input>
          </div>

          <div className="elementContainer">
            <label>Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              disabled={error || submitted}
            ></input>
          </div>

          <div className="elementContainer">
            <label>Location</label>
            <input
              type="text"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
              disabled={error || submitted}
            ></input>
          </div>

          <div className="elementContainer">
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value)}
              disabled={error || submitted}
            ></input>
          </div>

          <div className="elementContainer">
            <label>Message</label>

            <textarea
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              disabled={error || submitted}
            ></textarea>
          </div>
          <br />

          <div className="button--container">
            <button className="button" disabled={error || submitted}>
              Send
            </button>
          </div>
        </form>

        <div>
          {submitted ? <h2 className="sentMsg">Message Sent!</h2> : null}
        </div>
      </div>
    </>
  );
}

export default Contact;
