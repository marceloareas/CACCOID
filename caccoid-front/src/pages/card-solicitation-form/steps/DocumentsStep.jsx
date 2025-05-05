import { Controller, useFormContext } from "react-hook-form";
import './styles.css';

export const DocumentsStep = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className="form-step">
      <h2>Documentos</h2>
      <div className="form-grid">
        <div className="form-full-column">
          <div className="form-group">
            <p className="form-input-label">Comprovante de matrícula<span>*</span></p>
            <Controller
              name="enrollmentProof"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  {errors.enrollmentProof && (
                    <span className="error-message">{errors.enrollmentProof.message}</span>
                  )}
                </>
              )}
            />
          </div>

          <div className="form-group">
            <p className="form-input-label">Identidade (frente)<span>*</span></p>
            <Controller
              name="identityFront"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  {errors.identityFront && (
                    <span className="error-message">{errors.identityFront.message}</span>
                  )}
                </>
              )}
            />
          </div>

          <div className="form-group">
            <p className="form-input-label">Identidade (verso)<span>*</span></p>
            <Controller
              name="identityBack"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  {errors.identityBack && (
                    <span className="error-message">{errors.identityBack.message}</span>
                  )}
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};