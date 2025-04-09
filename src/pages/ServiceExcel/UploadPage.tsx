import "./ExcelPages.css";
import axios from "axios";
import FileSaver from "file-saver";
import Header from "../../components/Header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const baixarExcel = async () => {
    try {
      const response = await axios.get("https://localhost:7268/api/Excel/download-excel", {
        responseType: "blob",
      });
   
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
   
      FileSaver.saveAs(blob, "dados.xlsx");
    } catch (error) {
      console.error("Erro ao baixar o arquivo", error);
    }
  };

  const processarExcel = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    // Simular progresso durante o upload
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 500);

    try {
      const response = await axios.post("https://localhost:7268/api/Excel/processar-excel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });

      clearInterval(progressInterval);
      setProgress(100);

      console.log("Resposta da API recebida:", response);
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      console.log("Blob criado:", blob);

      // Aguardar um momento para mostrar 100% antes de redirecionar
      setTimeout(() => {
        navigate("/DownloadPage", { 
          state: { 
            processedBlob: blob,
            fileName: file.name
          } 
        });
      }, 1000);

    } catch (error) {
      console.error("Erro ao processar o Excel:", error);
      setIsProcessing(false);
      setProgress(0);
    }
  };

  return (
    <div>
        <Header />
        <div className="containerUploadPage">
            <h1 className="titleUploadPage">Download Template</h1>
            <button className="buttonDownloadTemplate" onClick={baixarExcel}>Baixar Template</button>
        </div>
        <div className="ProcessarExcel">
            <h1 className="titleProcessarExcel">Processar Excel</h1>
            {!isProcessing ? (
              <div className="uploadSection">
                <input 
                  type="file" 
                  onChange={processarExcel}
                  accept=".xlsx, .xls"
                  className="fileInput"
                />
              </div>
            ) : (
              <div className="progressSection">
                <div className="progressBar">
                  <div 
                    className="progressFill" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="progressText">{progress}% Concluído</p>
              </div>
            )}
        </div>
    </div>
  );
}

export default UploadPage;
