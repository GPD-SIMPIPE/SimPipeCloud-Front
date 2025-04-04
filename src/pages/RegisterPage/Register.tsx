import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import "../GlobalCss/LoginRegisterPage.css";
import logo from "../../assets/LogoBranca.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [empresas, setEmpresas] = useState([]);
  const [empresaSelecionada, setEmpresaSelecionada] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    async function carregarEmpresas() {
      try {
        const resposta = await axios.get('https://localhost:7268/api/Company/AllCompanies');
        setEmpresas(resposta.data);
      } catch (erro) {
        console.error('Erro ao carregar empresas:', erro);
      }
    }
  
    carregarEmpresas();
  }, []);
  
  // Adiciona a classe no body
  useEffect(() => {
    document.body.classList.add("login-register-mode");
    return () => {
      document.body.classList.remove("login-register-mode");
    };
  }, []);
  

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !empresaSelecionada) {
      alert("Preencha todos os campos.");
      return;
    }

    const novoUsuario = {
      id: 0,
      userName: nome,
      userEmail: email,
      password: senha,
      userCompanyId: parseInt(empresaSelecionada),
      active: false,
      role: 2,
      licenseId: 0
    };

    try {
      await axios.post('https://localhost:7268/api/User', novoUsuario);
      alert("Usuário cadastrado com sucesso!");
      // Se quiser limpar os campos:
      setNome('');
      setEmail('');
      setSenha('');
      setEmpresaSelecionada('');
    } catch (erro) {
      console.error("Erro ao cadastrar usuário:", erro);
      alert("Erro ao cadastrar usuário. Verifique os dados.");
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <a href="https://simpipe.com/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo SimPipe" className="login-logo" />
        </a>
      </div>

      <div className="right-section">
        <div className="form-container">
          <label className="label">Nome Completo</label>
          <input
            type="text"
            className="input"
            placeholder="Digite Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Digite Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Empresa</label>
          <div className="last-container">
            <select
              className="input"
              value={empresaSelecionada}
              onChange={(e) => setEmpresaSelecionada(e.target.value)}
            >
              <option value="">Selecione uma empresa</option>
              {empresas.map((empresa: any) => (
                <option key={empresa.id} value={empresa.id}>
                  {empresa.name}
                </option>
              ))}
            </select>
          </div>

          <label className="label">Senha</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="input password-input"
              placeholder="Digite Sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="login-button" onClick={handleCadastro}>Cadastrar</button>

          <label className="login-label">
            Já tem uma conta? <Link to="/" style={{ color: "black" }}>Faça Login</Link>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Register;
