import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../GlobalCss/LoginRegisterPage.css";
import ilustracao from "../../assets/ilustracao.png";
import logo from "../../assets/logo-preta.png";
import axios from "axios";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://localhost:7268/api/Auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login bem-sucedido!");
      // Aqui você pode redirecionar para outra página
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("Requisição inválida. Verifique os dados inseridos.");
        } else if (error.response.status === 401) {
          setError("Usuário ou senha incorretos.");
        } else if (error.response.status === 403) {
          setError("Acesso negado. Você não tem permissão para acessar.");
        } else if (error.response.status === 500) {
          setError("Erro interno do servidor. Tente novamente mais tarde.");
        } else {
          setError(`Erro ${error.response.status}: ${error.response.data}`);
        }
      } else if (error.request) {
        setError("Não foi possível conectar ao servidor. Verifique sua conexão.");
      } else {
        setError(`Erro desconhecido: ${error.message}`);
      }    }
  };

  return (
    <div className="container">
      {/* Lado esquerdo com imagem ilustrativa */}
      <div className="left-section">
        {/* <div className="title">SimCloud</div> */}
        <a href="https://simpipe.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={logo}
          alt="Imagem Ilustrativa"
          className="illustration"
        />
        </a>
      </div>
      
      {/* Lado direito com o formulário de login */}
      <div className="right-section">
        <div className="form-container">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Digite Seu Email"
          />
          
          <label className="label">Senha</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="input password-input"
              placeholder="Digite Sua Senha"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          {error && <div className="error-message">{error}</div>} {/* Exibir erro */}
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        
          <div className="register-link">
            <label className="login-label">Não tem uma conta? <a href="/Register" style={{ color: "black" }}>Faça Cadastro</a></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
