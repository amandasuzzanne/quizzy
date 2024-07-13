import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
