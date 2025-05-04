import './styles.css'

export const CourseStep = ({ formData, updateFormData }) => {
    const handleChange = (e) => {
      updateFormData({ [e.target.name]: e.target.value });
    };
  
    return (
      <div className="form-step">
        <h2>Dados do Curso</h2>

        <div className="form-group">
          <p className="form-input-label">Nível de ensino<span>*</span></p>
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
          <p className="form-input-label">Matrícula<span>*</span></p>
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
          <p className="form-input-label">Curso<span>*</span></p>
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
          <p className="form-input-label">Instituição de ensino<span>*</span></p>
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