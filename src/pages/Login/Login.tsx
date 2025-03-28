import './Login.css'
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação
    console.log('Login tentado', email, password);
  }

  const handleSignUp = () => {
    // Navegação para página de cadastro
    navigate('/cadastro');
  };

  return (

    <div className="flex h-screen">

      <div className="w-1/2 bg-[#00353D] flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-[300px] mx-auto">
            <img 
              src="/api/placeholder/300/200" 
              alt="Imagem Ilustrativa" 
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4">Imagem Ilustrativa</p>
        </div>
      </div>

      {/* Lado Direito - Formulário de Login */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <form 
          onSubmit={handleLogin} 
          className="w-full max-w-[400px] px-8"
        >
          {/* Campo de Email */}
          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block mb-2 text-[#00353D]"
            >
              Email
            </label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite Seu Email"
              className="w-full px-3 py-2 border rounded-lg border-gray-300"
              required 
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-4 relative">
            <label 
              htmlFor="senha" 
              className="block mb-2 text-[#00353D]"
            >
              Senha
            </label>
            <input 
              type={showPassword ? "text" : "password"}
              id="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite Sua Senha"
              className="w-full px-3 py-2 border rounded-lg border-gray-300 pr-10"
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              👁️
            </button>
          </div>

          {/* Botão de Login */}
          <button 
            type="submit" 
            className="w-full bg-[#00353D] text-white py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Login
          </button>

          {/* Link para Cadastro */}
          <div className="text-center mt-4 text-[#white]">
            Não tem uma conta? 
            <button 
              type="button"
              onClick={handleSignUp}
              className="ml-2 font-bold hover:underline"
            >
              Faça Cadastro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login; 