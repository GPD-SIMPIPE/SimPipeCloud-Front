import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import MenuPage from './pages/MenuPage/MenuPage';
import UploadPage from './pages/UploadPage/UploadPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/UploadPage" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App; 