import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import MenuPage from './pages/MenuPage/MenuPage';
import UploadPage from './pages/ServiceExcel/UploadPage';
import DownloadPage from './pages/ServiceExcel/DownloadPage';
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
        <Route path="/DownloadPage" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App; 