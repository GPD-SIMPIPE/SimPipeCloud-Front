import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import "../GlobalCss/LoginRegisterPage.css";
import ilustracao from "../../assets/ilustracao.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      {/* Lado esquerdo com imagem ilustrativa */}
      <div className="left-section">
        <div className="title">Imagem Ilustrativa</div>
        <img
          src={ilustracao}
          alt="Imagem Ilustrativa"
          className="illustration"
        />
      </div>
      

      
      {/* Lado direito com o formulário de login */}
      <div className="right-section">
        <div className="form-container">
        <label className="label">Nome</label>
          <input
            type="text"
            className="input"
            placeholder="Digite Seu Nome"
          />
          
          <label className="label">Sobrenome</label>
          <div className="last-container">
            <input
              type='text'
              className="input"
              placeholder="Digite Seu Sobrenome"
            />
          </div>
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
          
          <button className="login-button">Cadastrar</button>
          
            <label className="login-label">Ja tem uma conta? <Link to="/" style={{ color: "black" }}>Faça Login</Link></label>
          </div>
        </div>
      </div>   
  );
}

export default Register;
