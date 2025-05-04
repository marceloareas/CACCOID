import './styles.css'

export const PersonalStep = ({ formData, updateFormData }) => {
    const handleChange = (e) => {
      updateFormData({ [e.target.name]: e.target.value });
    };
  
    return (
      <div className="form-step">
        <h2>Dados Pessoais</h2>

        <div className="form-group">
          <p className="form-input-label">Nome<span>*</span></p>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder='Selecione seu nível de ensino'
            value={formData.courseName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <p className="form-input-label">E-mail<span>*</span></p>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder='Selecione seu nível de ensino'
            value={formData.courseName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <p className="form-input-label">RG<span>*</span></p>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder='Selecione seu nível de ensino'
            value={formData.courseName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <p className="form-input-label">Celular<span>*</span></p>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder='Selecione seu nível de ensino'
            value={formData.courseName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <p className="form-input-label">CPF<span>*</span></p>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder='Selecione seu nível de ensino'
            value={formData.courseName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <p className="form-input-label">Data de nascimento<span>*</span></p>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder='Selecione seu nível de ensino'
            value={formData.courseName || ''}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    );
  };