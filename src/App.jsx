import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const handleClick = () => {
    console.log("clicked");
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
