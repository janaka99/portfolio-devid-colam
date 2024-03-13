import About from "./components/Layouts/About/About";
import Clients from "./components/Layouts/Clients/Clients";
import Contact from "./components/Layouts/Contact/Contact";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import Hero from "./components/Layouts/Hero/Hero";
import Projects from "./components/Layouts/Projects/Projects";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
