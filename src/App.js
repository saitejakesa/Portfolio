import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intron from "./components/Intro/Intron";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intron />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
