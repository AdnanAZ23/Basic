import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Main } from './Pages/main';
import { Login } from './Pages/Login';
import { Navbar } from './Components/navbar';
import { CreatePost } from './Pages/create-post/createpost';

function App() {
  return(
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/createpost' element={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;