import styles from "./Header.module.css";
import { List, X } from "@phosphor-icons/react";
import Navigation from "../Navigation";
import { useState } from "react";
import logo from "../../assets/tulips.png";
import { slide as Menu } from "react-burger-menu";

const Header = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonClick = () => {
    setIsOpen(isOpen ? false : true);
    // setIsOpen(!isOpen);
    // if (isOpen) {
    //   setIsOpen(false);
    // } else {
    //   setIsOpen(true);
    // }
  };

  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />

        <Navigation handleClick={handleClick} />
        <button onClick={menuButtonClick} className={styles.mobileMenuButton}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
      {isOpen && <Navigation handleClick={handleClick} />}
    </>
  );
};

export default Header;
