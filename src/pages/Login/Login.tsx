import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      {/* Lado esquerdo com imagem ilustrativa */}
      <div className="left-section">
        <div className="title">Imagem Ilustrativa</div>
        <img
          src="/pipe-illustration.png"
          alt="Imagem Ilustrativa"
          className="illustration"
        />
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
          
          <button className="login-button">Login</button>
          
          <div className="register-link">
            Não tem uma conta? <a href="#">Faça Cadastro</a>
          </div>
        </div>
      </div>
    </div>
  );
}
