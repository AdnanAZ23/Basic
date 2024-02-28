import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Project1/Navbar';
import { Home } from './Project1/Pages/Shop/Home';
import { Cart } from './Project1/Pages/Cart/Cart';
import { ShopContextProvider } from './Project1/context/shop-context';

function App3() {
    return (
        <div className='App'>
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    )
}
export default App3;