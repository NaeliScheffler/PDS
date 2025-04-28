import React, { useState } from 'react';
import './App.css';
// icones do menu lateral
import { FaBars, FaHome, FaPrint, FaSlidersH, FaSignOutAlt, FaUserPlus, FaSeedling, FaTools, FaMapMarkedAlt } from 'react-icons/fa';
import CadastrarAgricultor from './components/cadastroCliente';
import CadastrarCulturaeSafra from './components/CadastroCulturaeSafra';
import CadastrarTecnico from './components/cadastroTecnico';
import CadastrarTalhao from './components/CadastroTalhao';
import CadastrarPropriedade from './components/CadastroPropriedade';
import PaginaInicio from './components/PaginaInicio';
import PaginaLogin from './components/PaginaLogin';
import clean_agro_logo from './components/clean_agro_logo.png';
import TelaRelatorio from './components/TelaRelatorio';
import TelaConfiguracao from './components/TelaConfiguracao';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(true);  // Estado para controlar se o menu está aberto ou fechado

  // Função para alternar o menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Função para autenticar o usuário
  const handleLogin = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  // Se o usuário não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    return <PaginaLogin onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="App d-flex">
        {/* Sidebar */}
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          {/* Botão hamburguer */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <FaBars size={24} color="white" />
          </div>
          {/* centraliza a logo e titulo no menu lateral */}
          {isOpen && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px', marginTop: '10px' }}>
              <img
                src={clean_agro_logo}
                alt="Logo AgroInvest"
                className="clean_agro_logo-img"
              />
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'white' }}>AgroInvest</h2>
            </div>
          )}

          {/* links de todas as paginas no menu; obs.: <Fa... size{=24} eh o icone no tamanho 24*/}

          <nav className="nav-menu">
            <Link to="/" className="nav-item">
              <FaHome size={24} />
              {isOpen && <span>Início</span>}
            </Link>

            {/* Links de Cadastro */}
            <Link to="/cadastrar-tecnico" className="nav-item">
              <FaTools size={24} />
              {isOpen && <span>Cadastrar Técnico</span>}
            </Link>
            <Link to="/cadastrar-culturaesafra" className="nav-item">
              <FaSeedling size={24} />
              {isOpen && <span>Cadastrar Cultura e Safra</span>}
            </Link>
            <Link to="/cadastrar-agricultor" className="nav-item">
              <FaUserPlus size={24} />
              {isOpen && <span>Cadastrar Agricultor</span>}
            </Link>
            <Link to="/cadastrar-propriedade" className="nav-item">
              <FaMapMarkedAlt size={24} />
              {isOpen && <span>Cadastrar Propriedade</span>}
            </Link>
            <Link to="/cadastrar-talhao" className="nav-item">
              <FaMapMarkedAlt size={24} />
              {isOpen && <span>Cadastrar Talhão</span>}
            </Link>

            <Link to="/relatorios" className="nav-item">
              <FaPrint size={24} />
              {isOpen && <span>Relatórios</span>}
            </Link>

            <Link to="/configuracoes" className="nav-item">
              <FaSlidersH size={24} />
              {isOpen && <span>Configurações</span>}
            </Link>

            {/* botao/link para sair do sistema, verifica se está logado e direciona para a tela de login (logout) */}
            <Link to="/" className="nav-item" onClick={() => setIsAuthenticated(false)}>
              <FaSignOutAlt size={24} />
              {isOpen && <span>Sair</span>}
            </Link>
          </nav>
        </div>

        {/* Área de Conteúdo */}
        <div className="content flex-grow-1 p-3">
          <Routes>
            {/* Rota padrão (Página Inicial) para abrir o sistema/app */}
            <Route path="/" element={<PaginaInicio />} />

            {/* Definindo as rotas das classes para os cadastros */}
            <Route path="/cadastrar-tecnico" element={<CadastrarTecnico />} />
            <Route path="/cadastrar-agricultor" element={<CadastrarAgricultor />} />
            <Route path="/cadastrar-culturaesafra" element={<CadastrarCulturaeSafra />} />
            <Route path="/cadastrar-propriedade" element={<CadastrarPropriedade />} />
            <Route path="/cadastrar-talhao" element={<CadastrarTalhao />} />
            <Route path="/relatorios" element={<TelaRelatorio />} />
            <Route path="/configuracoes" element={<TelaConfiguracao />} />
            <Route path="/Sair" element={<PaginaLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
