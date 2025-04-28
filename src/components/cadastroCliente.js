import React, { useState } from 'react';
import './formularios.css';



export default function CadastroCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    endereco: '',
    telefone: '',
    email: '',
    status: 'ativo',
  });

  const onSave = () => {
    alert('mandou para o back')
  };

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para salvar os dados do cliente
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Chama a função onSave para passar os dados para o componente pai
    setFormData({ nome: '', cpf: '', dataNascimento: '', endereco: '', telefone: '', email: '', status: 'ativo' }); // Limpa o formulário
  };

  return (
    <div className="form-container">
      <h3>Cadastro de Cliente Agricultor</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <button type="submit">Salvar Cliente</button>
      </form>
    </div>
  );
}
