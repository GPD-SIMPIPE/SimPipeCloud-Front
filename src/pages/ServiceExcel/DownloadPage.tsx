import React from "react";
import FileSaver from "file-saver";
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import "./ExcelPages.css";

function DownloadPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const processedBlob = location.state?.processedBlob;
  const fileName = location.state?.fileName;
  const results = location.state?.results || [];

  const baixarResultado = () => {
    if (processedBlob) {
      FileSaver.saveAs(processedBlob, `resultado_${fileName}`);
    }
  };

  if (!processedBlob) {
    return (
      <div>
        <Header />
        <div className="containerDownloadPage">
          <p className="errorText">Nenhum arquivo processado disponível.</p>
          <button 
            className="buttonDownloadTemplate" 
            onClick={() => navigate("/UploadPage")}
          >
            Voltar para Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="containerDownloadPage">
        <h1 className="titleDownloadPage">Download do Resultado</h1>
        
        <div className="fileInfo">
          <p>Arquivo processado: {fileName}</p>
        </div>

        {results.length > 0 && (
          <div className="tableContainer">
            <table className="resultTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Status</th>
                  <th>Mensagem</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result: any, index: number) => (
                  <tr key={index}>
                    <td>{result.id}</td>
                    <td>{result.nome}</td>
                    <td>
                      <span className={`status ${result.status.toLowerCase()}`}>
                        {result.status}
                      </span>
                    </td>
                    <td>{result.mensagem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button 
          className="buttonDownloadTemplate" 
          onClick={baixarResultado}
        >
          Baixar Resultado
        </button>

        <button 
          className="buttonDownloadTemplate secondaryButton" 
          onClick={() => navigate("/UploadPage")}
          style={{ marginTop: '10px' }}
        >
          Processar Novo Arquivo
        </button>
      </div>
    </div>
  );
}

export default DownloadPage; 