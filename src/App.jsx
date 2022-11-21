import Sections from "./components/sections";
import Topbar from "./components/topbar";
import "./app.css";
import Footer from "./components/footer";

function App() {

  return (
    <div className="app">
      <Topbar />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;