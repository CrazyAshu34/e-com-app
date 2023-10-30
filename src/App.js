import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Nav/Navbar';
// import { Footer } from './components/Nav/Footer';
import Shop from  "./components/js/Shop"
import Men from   "./components/js/Men"
import Women from "./components/js/Women"
import Kids from  "./components/js/Kids"
import Login from "./components/js/Login"
import Cart from  "./components/js/Cart"

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