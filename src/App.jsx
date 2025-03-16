import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header handleClick={handleClick} />
      <main>
        <h1>Home</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
