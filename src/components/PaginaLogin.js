import React, { useState } from 'react';
import './PaginaLogin.css'; // Arquivo de estilo
import agrinvest_logo from './/agrinvest_logo.png'

function PaginaLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    //Autenticacao de exemplo
    if (email === 'admin' && password === 'admin') {
      onLogin(true); // Autenticação bem-sucedida
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <img src={agrinvest_logo} alt="Logo" />
          <h4>Bem-vindo(a)</h4>
          <p className="login-instructions">Por favor, faça login para acessar sua conta</p>
        </div>
        

        {error && <p className="error-message">{error}</p>}

        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>Entrar</button>

        <div className="forgot-password">
          <a href="#!" className="forgot-password-link">Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  );
}

// CRIAR LÓGICA PARA RECUPERAÇÃO DE ACESSO LOGIN 

export default PaginaLogin;
