import "./App.css";
import GridCards from "./components/GridCards";
import Header from "./components/Header";
import Navbar from "./components/Nav";

function App() {
  return (
    <div className="containerWebApp">
      <Navbar></Navbar>
      <Header></Header>
      <GridCards></GridCards>
    </div>
  );
}

export default App;
