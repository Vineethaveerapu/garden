const Navigation = ({ className, handleNavClick, currentPage }) => {
  const handleClick = (page) => {
    handleNavClick(page);
  };
  console.log(currentPage);

  const isActive = (page) => {
    return currentPage === page ? "active" : "";
  };

  return (
    <nav className={className}>
      <div onClick={() => handleClick("home")} className={isActive("home")}>
        Home
      </div>
      <div onClick={() => handleClick("garden")} className={isActive("garden")}>
        Garden
      </div>
      <div
        onClick={() => handleClick("services")}
        className={isActive("services")}
      >
        Services
      </div>
      <div
        onClick={() => handleClick("contact")}
        className={isActive("contact")}
      >
        Contact
      </div>
    </nav>
  );
};

export default Navigation;
