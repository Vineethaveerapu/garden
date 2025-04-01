import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Footer from "./components/Footer";
import { useState } from "react";
import Garden from "./components/Garden";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === "home" && <MainHome />}
        {currentPage === "garden" && <Garden />}
        {currentPage === "services" && <Services />}
        {currentPage === "contact" && <Contact />}
      </main>
      <Footer />
    </>
  );
}

export default App;
