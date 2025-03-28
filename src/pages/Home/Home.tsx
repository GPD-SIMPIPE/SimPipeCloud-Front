import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Login');
  }

  return (
    <div>
      <div>
        <h1>SimCloud</h1>
      </div>
      <div>
        <h2>Bem-vindo ao SimCloud</h2>
      </div>
      <button className='btn' onClick={handleNavigate}>Iniciar</button>
    </div>
  )
}

export default Home;
