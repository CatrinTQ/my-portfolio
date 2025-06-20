import './contact.css';
import { GithubButton } from "./icons/GithubButton"
import { LinkedinButton } from "./icons/LinkedinButton"

export const Contact = () => {
    return <>
    <section className="contact-container">
      <div className='contact-info'>
      <h2>Get in touch!</h2>
      <div>
        <h3>Catrin Törnqvist</h3>
        <h4>Frontend Developer</h4>
        <h5>+ C# and .NET experience</h5>

        <h5>+46(0)72 00 38 032</h5>
        <h5>catrin.tq@gmail.com</h5>
      </div>

      <div className="icons">
        <LinkedinButton />
        <GithubButton />
      </div>
      </div>
    </section>
    </>
}