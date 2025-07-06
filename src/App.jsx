//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import PizzaPage from "./pages/PizzaPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="/pizza/:id" element={<PizzaPage/>} />
        
        <Route path="cart" element={<CartPage/>} />
        <Route path="*" element={<NotFoundPage />} /> {/* /404 */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
