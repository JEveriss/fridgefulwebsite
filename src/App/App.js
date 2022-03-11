import "./App.scss";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import Home from "../pages/home/home";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
