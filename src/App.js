import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-full bg-background">
      <Home />
      <div>
        <Navbar />
        
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
