const Navigation = ({ handleClick, className }) => {
  return (
    <nav className={className}>
      <div onClick={handleClick}>Home</div>
      <div onClick={handleClick}>Garden</div>
      <div onClick={handleClick}>Services</div>
      <div onClick={handleClick}>Contact</div>
    </nav>
  );
};

export default Navigation;
