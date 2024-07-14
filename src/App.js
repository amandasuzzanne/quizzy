import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/quiz/:id" element={<Quiz/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
