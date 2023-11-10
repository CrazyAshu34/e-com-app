//App.js file

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product"

import mens_banner from "./components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kids_banner from "./components/Assets/banner_kids.png"

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/men" element={<ShopCategory banner={mens_banner} category="men" />} />
                    <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
                    <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;