import './MenuPage.css';
import Header from '../../components/Header/Header';

function MenuPage() {
  const cards = [
    {
      title: 'SimInteg',
      description: 'Módulo de integração para gerenciamento de processos e documentos.',
      icon: '📋'
    },
    {
      title: 'SimRisk',
      description: 'Análise e gestão de riscos com ferramentas avançadas.',
      icon: '⚠️'
    }
  ];

  return (
    <>
      <Header />
      <div className="initial-page">
        <h1 className="welcome-title">Bem-vindo ao Simpipe Cloud</h1>
        <p className="welcome-subtitle">Selecione um módulo para começar</p>
        <div className="cards-container">
          <div className="card-column">
            <div className="module-card">
              <div className="card-icon">{cards[0].icon}</div>
              <h2 className="card-title">{cards[0].title}</h2>
              <p className="card-description">{cards[0].description}</p>
              <button className="card-button">Acessar Módulo</button>
            </div>
          </div>
          <div className="card-column">
            <div className="module-card2">
              <div className="card-icon">{cards[1].icon}</div>
              <h2 className="card-title">{cards[1].title}</h2>
              <p className="card-description">{cards[1].description}</p>
              <p className="card-description2">Em desenvolvimento</p>
              {/* <button className="card-button">Acessar Módulo</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
