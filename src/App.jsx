import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Tools } from "./components/Tools";
import { Workflow } from "./components/Workflow";
import { Zale } from "./components/Zale";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Workflow />
        <Zale />
        <Tools />
        <Footer />
      </div>
    </>
  );
}

export default App;
