import React, { useState } from 'react';
import './formularios.css';

export default function CadastroTecnico() {
  const [formData, setFormData] = useState({
    nome: '',
    registro: '',
    dataNascimento: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
    status: 'ativo',
  });


  {/*atribuir banco de dados */ }
  const onSave = () => {
    alert('mandou para o back')
  };

  // Função para lidar com a mudança nos campos de formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Passa os dados para o componente pai
  };

  return (
    <div className="container">
      <div className="form-container">
        <h3 className="form-title">Cadastro de Técnico Agrônomo</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="registro">Número de Registro (CRTA/CREA):</label>
            <input
              type="text"
              id="registro"
              name="registro"
              value={formData.registro}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="ativo"
                  checked={formData.status === 'ativo'}
                  onChange={handleChange}
                />
                Ativo
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="inativo"
                  checked={formData.status === 'inativo'}
                  onChange={handleChange}
                />
                Inativo
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="reset" className="btn reset-btn">Limpar</button>
            <button type="submit" className="btn submit-btn">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}


