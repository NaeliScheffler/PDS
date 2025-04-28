import React, { useState } from 'react';
import './formularios.css';

export default function CadastroCultura() {
  const [culturaData, setCulturaData] = useState({
    nome: '',
    tipo: '',
    periodoCrescimento: '',
    irrigacao: '', // Necessidade de irrigação (Sim ou Não)
  });

  // Função para lidar com as mudanças nos campos de formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCulturaData({ ...culturaData, [name]: value });
  };

  const onSave = () => {
    alert('mandou para o back')
  };


  // Função para enviar os dados da cultura
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!culturaData.nome || !culturaData.tipo || !culturaData.periodoCrescimento || !culturaData.irrigacao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    console.log('Cultura cadastrada:', culturaData);

    {/*atribuir banco de dados*/ }
    onSave(culturaData); // Função para salvar e atualizar a lista de culturas 
    setCulturaData({
      nome: '',
      tipo: '',
      periodoCrescimento: '',
      irrigacao: '',
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h3 className="form-title">Cadastro de Cultura</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome da Cultura:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={culturaData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo de Cultivo:</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              value={culturaData.tipo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="periodoCrescimento">Período de Crescimento (em dias):</label>
            <input
              type="number"
              id="periodoCrescimento"
              name="periodoCrescimento"
              value={culturaData.periodoCrescimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="irrigacao">Necessita Irrigação?</label>
            <select
              id="irrigacao"
              name="irrigacao"
              value={culturaData.irrigacao}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Cadastrar Cultura</button>
        </form>
      </div>
    </div>
  );
}
