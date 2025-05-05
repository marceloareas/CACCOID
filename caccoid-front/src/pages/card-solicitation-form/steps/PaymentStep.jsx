import { Controller, useFormContext } from "react-hook-form";
import './styles.css';

export const PaymentStep = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className="form-step">
      <h2>Comprovante de Pagamento</h2>
      <div className="form-grid">
        <div className="form-full-column">
          <div className="form-group">
            <p className="form-input-label">Envie o comprovante<span>*</span></p>
            <p className="form-input-description">Aceitamos PDF, JPG ou PNG</p>
            <Controller
              name="paymentProof"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  {errors.paymentProof && (
                    <span className="error-message">{errors.paymentProof.message}</span>
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