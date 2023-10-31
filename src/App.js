import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
// import { Footer } from './components/Nav/Footer';
import Shop from  "./components/Pages/Shop"
import Men from   "./components/Pages/Men"
import Women from "./components/Pages/Women"
import Kids from  "./components/Pages/Kids"
import Login from "./components/Pages/Login"
import Cart from  "./components/Pages/Cart"

function App() {

    return (
        <div className="App">
            <Router>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Shop/>} />
                 <Route path="/Men" element={<Men/>} />
               <Route path="/Women" element={<Women/>} />
                <Route path="/Kids" element={<Kids/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cart" element={<Cart/>} />
              </Routes>
            </Router>
     {/*   <Footer /> */}
      </div>
    )
}

export default App;