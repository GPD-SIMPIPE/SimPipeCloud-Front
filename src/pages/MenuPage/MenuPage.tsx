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
    
      <div className="initial-page">
        <Header/>
      <h1 className="welcome-title">Bem-vindo ao Simpipe Cloud</h1>
      <p className="welcome-subtitle">Selecione um módulo para começar</p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="module-card">
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <button className="card-button">Acessar Módulo</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage; 