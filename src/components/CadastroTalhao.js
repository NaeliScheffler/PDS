import React, { useState } from 'react';
import Select from 'react-select';
import './formularios.css';

export default function CadastroTalhao({ propriedades = [], culturas = [] }) {
  const [formData, setFormData] = useState({
    nomeTalhao: '',
    area: '',
    tipoCultivo: '',
    dataPlantio: '',
    latitude: '',
    longitude: '',
    irrigacao: '',
    estadoConservacao: '',
    propriedade: '',
    tipoCultivo: '',
  });

  {/*atribuir banco de dados */}
  const onSave = () => {
    alert('mandou para o back')
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, field) => {
    setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Passa os dados para o componente pai
    setFormData({
      nomeTalhao: '',
      area: '',
      tipoCultivo: '',
      dataPlantio: '',
      latitude: '',
      longitude: '',
      irrigacao: 'não',
      estadoConservacao: 'bom',
      propriedade: '',
      tipoCultivo: '',
    }); 
  };

  // Formata as propriedades para o react-select (com "value" e "label")
  const propriedadesOptions = propriedades.map(propriedade => ({
    value: propriedade.nomePropriedade,
    label: propriedade.nomePropriedade,
  }));

  // Formata as culturas para o react-select (com "value" e "label")
  const culturasOptions = culturas.map(cultura => ({
    value: cultura.nome,
    label: cultura.nome,
  }));

  return (
    <div className="form-container">
      <h3>Cadastro de Talhão</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Talhão:</label>
          <input
            type="text"
            name="nomeTalhao"
            value={formData.nomeTalhao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Área (em hectares):</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo de Cultivo:</label>
          <Select
            options={culturasOptions}
            value={culturasOptions.find(option => option.value === formData.tipoCultivo)}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'tipoCultivo')}
            placeholder="Pesquisar Cultura..."
          />
          {culturas.length === 0 && (
            <div className="no-data-message">Nenhuma cultura cadastrada</div>
          )}
        </div>
        <div className="form-group">
          <label>Data do Plantio:</label>
          <input
            type="date"
            name="dataPlantio"
            value={formData.dataPlantio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Latitude:</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Longitude:</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Irrigação:</label>
          <select
            name="irrigacao"
            value={formData.irrigacao}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Estado de Conservação:</label>
          <select
            name="estadoConservacao"
            value={formData.estadoConservacao}
            onChange={handleChange}
          >
            <option value="bom">Bom</option>
            <option value="ruim">Ruim</option>
            <option value="otimo">Ótimo</option>
          </select>
        </div>
        <div className="form-group">
          <label>Propriedade:</label>
          <Select
            options={propriedadesOptions}
            value={propriedadesOptions.find(option => option.value === formData.propriedade)}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'propriedade')}
            placeholder="Pesquisar Propriedade..."
          />
        </div>
        <button type="submit">Salvar Talhão</button>
      </form>
    </div>
  );
}
