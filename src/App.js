import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './Project2/Hero/Hero';
import { Navbar } from './Project2/Navbar/Navbar';
import { Contact } from './Project2/Contact/Contact';
import { Game } from './Project2/Game/Game';
import { DiceGame } from './Project2/DiceGame/DiceGame';
import { Food } from './Project2/Food/Food';
import { Shop } from './Project2/Shop/Shop';
import { Cart } from './Project2/Cart/Cart';
import { ShopContextProvider } from './Project2/context/shop-context'
import { Phone } from './Project2/Phone/Phone';

function App() {
    return (
        <div className='App'>
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Hero />} />
                        <Route path='/game' element={<Game />} />
                        <Route path='/dicegame' element={<DiceGame />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/food' element={<Food />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/phone' element={<Phone />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
};

export default App;