import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Published Apps</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>App Store</h4>
            <a
              href="https://apps.apple.com/pk/app/success360/id6754213328"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Success360 <MdArrowOutward />
            </a>
            <a
              href="https://apps.apple.com/us/app/our-time-together/id1633279048"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Our Time Together <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Play Store</h4>
            <a
              href="https://play.google.com/store/apps/details?id=com.MJA.ott"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Our Time Together <MdArrowOutward />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.silentsystem.pureaudiohd"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Pure HD Audio - 1K+ DL <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Flutter Developer <br /> <span>Fazil Qazi</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
