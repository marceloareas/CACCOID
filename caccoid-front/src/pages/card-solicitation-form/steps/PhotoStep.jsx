import { Controller, useFormContext } from "react-hook-form";
import './styles.css';

export const PhotoStep = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className="form-step">
      <h2>Foto da Carteirinha</h2>
      <div className="form-grid">
        <div className="form-full-column">
          <div className="form-group">
            <p className="form-input-label">Envie sua foto 3x4<span>*</span></p>
            <p className="form-input-description">A foto deve ser colorida, fundo branco e com boa iluminação</p>
            <Controller
              name="studentPhoto"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  {errors.studentPhoto && (
                    <span className="error-message">{errors.studentPhoto.message}</span>
                  )}
                </>
              )}
            />
            
            <div className="image-crop-container">
              <div className="crop-area">
                <p>Pré-visualização da foto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};