import About from "./components/About";
import "./App.css";
import Home from "./components/Home";
import CarouselPortfolio from "./components/CarouselPortfolio";
import Contact from "./components/Contact";
import Whatido from "./components/Whatido";
import Header from "./components/Header";
import Mobilemenu from "./components/Mobilemenu";

function App() {
  return (
    <div className="App">
      <Header />
      <Mobilemenu />
      <Home />
      <About />
      <Whatido />
      <CarouselPortfolio />
      <Contact />
    </div>
  );
}

export default App;
