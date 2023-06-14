import ToDoList from './components/ToDoList';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './routes/About';
import Home from './routes/Home';
import Login from './routes/Login';
import Profile from './routes/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/todos" element={<ToDoList />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
