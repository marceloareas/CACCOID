import { Controller, useFormContext } from 'react-hook-form';
import uploadFileIcon from '../../../assets/upload-file-icon.svg';

import './styles.css';

export const DocumentsStep = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();
  const formData = watch();

  return (
    <div className="form-step">
      <h2>Documentos</h2>
      <div className="form-grid">
        <div className="form-full-column">
          <div className="form-group">
            <p className="form-input-label">
              Comprovante de matrícula<span>*</span>
            </p>
            <div className="input-document-file">
              <Controller
                name="enrollmentProof"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      className="document-input"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => field.onChange(e.target.files)}
                      key={formData.enrollmentProof?.[0]?.name} // Força re-render ao alterar
                    />
                    {formData.enrollmentProof?.[0]?.name ? (
                      <p>
                        Arquivo selecionado: {formData.enrollmentProof[0].name}
                      </p>
                    ) : (
                      <p>Faça upload do arquivo</p>
                    )}
                  </>
                )}
              />
              <img src={uploadFileIcon} className="file-icon" />
            </div>
            {errors.enrollmentProof && (
              <span className="error-message">
                {errors.enrollmentProof.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <p className="form-input-label">
              Identidade (frente)<span>*</span>
            </p>
            <div className="input-document-file">
              <Controller
                name="identityFront"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      className="document-input"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => field.onChange(e.target.files)}
                      key={formData.identityFront?.[0]?.name}
                    />
                    {formData.identityFront?.[0]?.name ? (
                      <p>
                        Arquivo selecionado: {formData.identityFront[0].name}
                      </p>
                    ) : (
                      <p>Faça upload do arquivo</p>
                    )}
                  </>
                )}
              />
              <img src={uploadFileIcon} className="file-icon" />
            </div>
            {errors.identityFront && (
              <span className="error-message">
                {errors.identityFront.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <p className="form-input-label">
              Identidade (verso)<span>*</span>
            </p>
            <div className="input-document-file">
              <Controller
                name="identityBack"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      className="document-input"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => field.onChange(e.target.files)}
                      key={formData.identityBack?.[0]?.name}
                    />
                    {formData.identityBack?.[0]?.name ? (
                      <p>
                        Arquivo selecionado: {formData.identityBack[0].name}
                      </p>
                    ) : (
                      <p>Faça upload do arquivo</p>
                    )}
                  </>
                )}
              />
              <img src={uploadFileIcon} className="file-icon" />
            </div>
            {errors.identityBack && (
              <span className="error-message">
                {errors.identityBack.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
