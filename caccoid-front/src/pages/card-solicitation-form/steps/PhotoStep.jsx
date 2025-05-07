import { Controller, useFormContext } from "react-hook-form";
import uploadIcon from '../../../assets/upload-icon.svg';
import './styles.css';

export const PhotoStep = () => {
  const { control, formState: { errors }, watch } = useFormContext();
  const formData = watch();

  return (
    <div className="form-step">
      <h2>Foto da Carteirinha</h2>
      <div className="form-grid-photo-input">
        <div className="input-file">
          <div className="upload-icon-container">
            <img src={uploadIcon} className="upload-icon"/>
          </div>
          <Controller
            name="studentPhoto"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="file"
                  className="photo-input"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => field.onChange(e.target.files)}
                  key={formData.studentPhoto?.[0]?.name}
                />
                {formData.studentPhoto?.[0]?.name ? (   
                  <p>Arquivo selecionado: {formData.studentPhoto[0].name}</p>
                ) :
                <p>Faça o upload do arquivo desejado</p>
                }
                {errors.studentPhoto && (
                  <span className="error-message">{errors.studentPhoto.message}</span>
                )}
              </>
            )}
          />
        </div> 
      </div>
    </div>
  );
};
