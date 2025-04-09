import { useState, useEffect } from "react";
import FileSaver from "file-saver";
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./ExcelPages.css";

function DownloadPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const processedBlob = location.state?.processedBlob;
  const fileName = location.state?.fileName;
  const [tableData, setTableData] = useState<string[][]>([]);

  useEffect(() => {
    if (processedBlob) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          
          // Converter a planilha para uma matriz de strings
          const range = XLSX.utils.decode_range(firstSheet['!ref'] || 'A1');
          const dataArray: string[][] = [];
          
          for (let R = range.s.r; R <= range.e.r; ++R) {
            const row: string[] = [];
            for (let C = range.s.c; C <= range.e.c; ++C) {
              const cell_address = { c: C, r: R };
              const cell_ref = XLSX.utils.encode_cell(cell_address);
              const cell = firstSheet[cell_ref];
              row.push(cell ? cell.v : '');
            }
            dataArray.push(row);
          }
          
          setTableData(dataArray);
        } catch (error) {
          console.error("Erro ao processar o arquivo Excel:", error);
        }
      };
      reader.readAsArrayBuffer(processedBlob);
    }
  }, [processedBlob]);

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

        {tableData.length > 0 ? (
          <div className="tableContainer">
            <table className="resultTable">
              <thead>
                <tr>
                  {tableData[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="loadingText">Carregando dados...</p>
        )}

        <button className="buttonDownloadTemplate" onClick={baixarResultado}>
          Baixar Resultado
        </button>

        <button 
          className="buttonDownloadTemplate secondaryButton"
          onClick={() => navigate("/UploadPage")}
          style={{ marginTop: "10px" }}
        >
          Processar Novo Arquivo
        </button>
      </div>
    </div>
  );
}

export default DownloadPage;
