import "./App.css";
import Body from "./components/Body";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="app-container">
        <section>
          <Hero />
        </section>
        <section>
          <Body />
        </section>
      </div>
    </>
  );
}

export default App;
