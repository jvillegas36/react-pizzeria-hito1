//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <Footer />
    </>
  );
}

export default App;
