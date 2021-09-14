import About from "./components/About";
import "./App.css";
import Home from "./components/Home";
import CarouselPortfolio from "./components/CarouselPortfolio";
import Contact from "./components/Contact";
import Whatido from "./components/Whatido";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Whatido />
      <CarouselPortfolio />
      <Contact />
    </div>
  );
}

export default App;
