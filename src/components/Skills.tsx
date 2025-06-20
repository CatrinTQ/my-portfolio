import "./skills.css";

export const Skills = () => {
  return (
    <div className="tech-container">
      <h2 className="skill-title">Tech & skills</h2>
      <div className="list-container">
        <ul className="accordion-list">
          <h3 className="label-one">Languages</h3>
          <li>JavaScript</li>
          <li>C#</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>SQL</li>
        </ul>
        <ul>
          <h3 className="label-two">Frameworks and technologies</h3>
          <li>Vite</li>
          <li>Vue.js</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>SASS</li>
          <li>ASP .NET</li>
          <li>Entity Framework</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Flexbox</li>
          <li>Grid</li>
        </ul>
        <ul>
          <h3 className="label-three">Tools</h3>
          <li>VS Code</li>
          <li>Visual Studio</li>
          <li>Swagger</li>
          <li>Insomnia</li>
          <li>Postman (OpenAPI)</li>
          <li>Figma</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
        <ul>
          <h3 className="label-four">Databases</h3>
          <li>SQL Server</li>
          <li>MySQL</li>
          <li>Insomnia</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>MongoDB Compass</li>
        </ul>
      </div>
    </div>
  );
};
