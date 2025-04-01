import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h2>Address</h2>
          <p>123 Garden Street</p>
          <p>Green Valley, Stockholm, Sweden</p>
        </div>

        <div className={styles.contactItem}>
          <h2>Phone</h2>
          <p>+46 70 123 45 67</p>
          <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
        </div>

        <div className={styles.contactItem}>
          <h2>Email</h2>
          <p>info@garden.com</p>
          <p>support@garden.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
