import "./App.css";

import Hero from "./components/Hero";
import Iced_tea from "./components/Iced_tea";

function App() {
  return (
    <>
      <div className="app-container">
        <section>
          <Hero />
        </section>
        <section>
          <Iced_tea />
        </section>
      </div>
    </>
  );
}

export default App;
