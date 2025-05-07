import { Controller, useFormContext } from "react-hook-form";
import uploadIcon from '../../../assets/upload-icon.svg';

import './styles.css';

export const PaymentStep = () => {
  const { control, formState: { errors }, watch } = useFormContext();
  const formData = watch();

  return (
    <div className="form-step">
      <h2>Comprovante de Pagamento</h2>
      <div className="form-grid-photo-input">
            <div className="input-file">
              <div className="upload-icon-container">
                <img src={uploadIcon} className="upload-icon"/>
              </div>
              <Controller
                name="paymentProof"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      className="photo-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => field.onChange(e.target.files)}
                      key={formData.paymentProof?.[0]?.name}
                    />
                    {formData.paymentProof?.[0]?.name ? (   
                      <p>Arquivo selecionado: {formData.paymentProof[0].name}</p>
                    ) :
                    <p>Faça o upload do arquivo desejado</p>
                    }
                    {errors.paymentProof && (
                      <span className="error-message">{errors.paymentProof.message}</span>
                    )}
                  </>
                )}
              />
            </div> 
          </div>
    </div>
  );
};
