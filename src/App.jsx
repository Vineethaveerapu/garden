import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Header handleClick={handleClick} />

      <MainHome />

      <Footer />
    </>
  );
}

export default App;
