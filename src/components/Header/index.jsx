import styles from "./Header.module.css";

const Header = ({ handleClick }) => {
  return (
    <div>
      <nav className={styles.header}>
        <a id="home" href="#" onClick={handleClick}>
          Home
        </a>
        <a id="garden" href="#" onClick={handleClick}>
          Garden
        </a>
        <a id="services" href="#" onClick={handleClick}>
          Services
        </a>
      </nav>
      <button onClick={handleClick}>Menu</button>
    </div>
  );
};

export default Header;
