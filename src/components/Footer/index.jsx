import styles from "./Footer.module.css";
import Navigation from "../Navigation";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best gardening solutions and tips
            for your green space.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Navigation />
        </div>

        <div>
          <h3>Contact Info</h3>
          <ul>
            <li>Email: info@garden.com</li>
            <li>Phone: 077 1234567</li>
            <li>Address: 123 Garden Street</li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className={styles.socialLinks}>
            <InstagramLogo size={32} />
            <FacebookLogo size={32} />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Garden. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
