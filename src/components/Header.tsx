import { GithubButton } from "./icons/GithubButton";
import "./header.css";
import { LinkedinButton } from "./icons/LinkedinButton";
import profileImg from "../img/profile-img.jpeg";

export const Header = () => {
  return (
    <header className="info-container">
      <section className="info">
        <div className="text">
          <h1 className="name">Catrin Törnqvist</h1>
          <p className="title">Frontend developer</p>
          <p className="extra">+ .NET and C# experience</p>
        </div>

        <img
          className="profile-img"
          width="120"
          height="120"
          src={profileImg}
          alt="Profile of Catrin Törnqvist"
        />
        <p className="description">
          Enthusiastic frontend developer with a strong focus on mobile-first
          design and clean, maintainable code. I enjoy creating
          accessable and user-friendly solutions and continuously look for ways
          to improve the user experience. I'm curious by nature, passionate
          about technology, and thrive in collaborative environments.
        </p>
        <div className="icons">
          <LinkedinButton />
          <GithubButton />
        </div>
      </section>
    </header>
  );
};
