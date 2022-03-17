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
    
    
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
       {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <Header />
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <Mobilemenu />
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <Home />
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <About />
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <Whatido />
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <CarouselPortfolio />
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <Contact />
    </div>
  );
}

export default App;
