import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Works, Classes } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#ffffff]'>

        <Navbar />
        <About />
        <Experience />
        <div id="project">
        <Works />
        </div>
        <div id="class">
        <Classes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
