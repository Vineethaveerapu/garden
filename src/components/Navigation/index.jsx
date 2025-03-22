const Navigation = ({ className, handleNavClick }) => {
  const handleClick = (page) => {
    handleNavClick(page);
  };

  return (
    <nav className={className}>
      <div onClick={() => handleClick("home")}>Home</div>
      <div onClick={() => handleClick("garden")}>Garden</div>
      <div onClick={() => handleClick("services")}>Services</div>
      <div onClick={() => handleClick("contact")}>Contact</div>
    </nav>
  );
};

export default Navigation;
