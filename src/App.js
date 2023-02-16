import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <SideBar />
      <div className="container">
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
