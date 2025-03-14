import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Home</div>
      <div>Garden</div>
      <div>Services</div>
    </div>
  );
};

export default Header;
