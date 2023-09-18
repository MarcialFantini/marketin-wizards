import "./App.css";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import GridCards from "./components/GridCards";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import ProductDetails from "./components/ProductDetailts";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="containerWebApp">
        <Header></Header>
        <GridCards></GridCards>
        <AboutUs></AboutUs>
        <ChooseUs></ChooseUs>
        <ProductDetails></ProductDetails>
        <Banner></Banner>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
