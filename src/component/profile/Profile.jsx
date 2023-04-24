import "./index.css";

function Profile() {
  const job = "Junior Software Developer";
  const body = `I am Guy, a ${job}. I always had a keen passion for technology. Ever since I built my first desktop, I was fascinated by the world of software behind that hardware. I decided on a career change to Software Developer. I completed the Northcoders Full Stack Software Development course to prepare myself for my journey ahead. My previous experiences brings transferable skills in collaborative teamwork, methodical problem solving and the desire do things right the first time. I am excited for the new opportunities to further develop my knowledge and skills in new technologies and look forward to the challenges ahead working in Software Development.`;
  const location = "Manchester";
  const languages = ["JavaScript", "TypeScript"];
  const stack = [
    "Node.js",
    "React.js",
    "Vue.js",
    "Express",
    "PostgreSQL",
    "JEST",
    "Supertest",
    "Axios",
  ];
  const practice = [
    "Test Driven Development",
    "Model View Controller",
    "Pair Programming",
    "Git Version Control",
    "Agile",
    "Safe SQL Injection",
  ];

  return (
    <div className="profile--container">
      <h2 className="about--title">PROFILE</h2>

      <div className="image--container">
        <h2 className="image--symbol">{`</>`}</h2>
      </div>
      <div className="hyperlink--container">
        <a
          href="https://github.com/Guy0017"
          target="_blank"
          rel="noreferrer"
          className="hyperlink"
        >
          gitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ga-wae-sin-1ba204a7/"
          target="_blank"
          rel="noreferrer"
          className="hyperlink"
        >
          LinkedIn
        </a>
      </div>
      <div className="about--container">
        <h3 className="about--subTitle">{`${job}, ${location}`}</h3>

        <p className="about--body">Hello World,</p>
        <p className="about--body"> {body}</p>

        <div className="about--body">
          <p>I have experience working with:</p>

          <p>[Language]:</p>
          <ul>
            {languages.map((language) => {
              return <li key={language}>{language}</li>;
            })}
          </ul>

          <p>[Technology Stack]:</p>
          <ul>
            {stack.map((stack) => {
              return <li key={stack}>{stack}</li>;
            })}
          </ul>

          <p>[Practice]:</p>
          <ul>
            {practice.map((practice) => {
              return <li key={practice}>{practice}</li>;
            })}
          </ul>
        </div>

        <p className="about--body">
          Please get in touch with me if you are intereted in working together.
        </p>

        <p className="about--body">Kind regards,</p>

        <p className="about--body">Guy.</p>
      </div>
    </div>
  );
}

export default Profile;
