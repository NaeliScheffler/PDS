import React, { useState } from 'react';
import Select from 'react-select';
import './formularios.css';

export default function CadastroPropriedade({ clientes = [] }) {
  const [formData, setFormData] = useState({
    nomePropriedade: '',
    cnpj: '',
    localidade: '',
    tempoAtividade: '',
    tipoAgricultura: '',
    usoIrrigacao: 'não',
    responsavelTecnico: '',
    nomeProprietario: '', // Adicionado campo nomeProprietario
  });

  {/*atribuir ao banco dados */ }
  const onSave = () => {
    alert('mandou para o back')
  };


  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com a mudança no select
  const handleSelectChange = (selectedOption, field) => {
    setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : '' });
  };

  // Função para salvar a propriedade
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Chama a função onSave para passar os dados 
    setFormData({
      nomePropriedade: '',
      cnpj: '',
      localidade: '',
      tempoAtividade: '',
      tipoAgricultura: '',
      usoIrrigacao: 'não',
      responsavelTecnico: '',
      nomeProprietario: '',
    });
  };

  // Formatando a lista de clientes para o react-select
  const clientesOptions = clientes.map(cliente => ({
    value: cliente.nome,
    label: cliente.nome,
  }));

  return (
    <div className="form-container">
      <h3>Cadastro de Propriedade</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome da Propriedade:</label>
          <input type="text" name="nomePropriedade" value={formData.nomePropriedade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CNPJ:</label>
          <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Localidade:</label>
          <input type="text" name="localidade" value={formData.localidade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Tempo de Atividade (em anos):</label>
          <input type="number" name="tempoAtividade" value={formData.tempoAtividade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Tipo de Agricultura:</label>
          <select name="tipoAgricultura" value={formData.tipoAgricultura} onChange={handleChange} required>
            <option value="">Selecione...</option>
            <option value="tradicional">Agricultura Tradicional</option>
            <option value="intensiva">Agricultura Intensiva</option>
            <option value="organica">Agricultura Orgânica</option>
          </select>
        </div>
        <div className="form-group">
          <label>Uso de Irrigação:</label>
          <select name="usoIrrigacao" value={formData.usoIrrigacao} onChange={handleChange}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Responsável Técnico:</label>
          <Select
            options={clientesOptions}
            value={clientesOptions.find(option => option.value === formData.responsavelTecnico)}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'responsavelTecnico')}
            placeholder="Pesquisar Técnico..."
          />
        </div>
        <div className="form-group">
          <label>Proprietário:</label>
          <Select
            options={clientesOptions}
            value={clientesOptions.find(option => option.value === formData.nomeProprietario)}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'nomeProprietario')}
            placeholder="Pesquisar Proprietário..."
          />
        </div>
        <button type="submit">Salvar Propriedade</button>
      </form>
    </div>
  );
}
