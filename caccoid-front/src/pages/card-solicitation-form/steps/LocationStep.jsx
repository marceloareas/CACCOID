import { Controller, useFormContext } from "react-hook-form";
import { useEffect } from 'react';
import './styles.css';

export const LocationStep = () => {
  const { control, watch, setValue } = useFormContext();
  const pickupAtCampus = watch("pickupAtCampus");

  useEffect(() => {
    setValue("pickupAtCampus", pickupAtCampus || false);
  }, [pickupAtCampus, setValue]);

  return (
    <div className="form-step">
      <h2>Local de Retirada</h2>
      <div className="form-grid">
        <div className="form-full-column">
          <div className="form-group">
            <Controller
              name="pickupAtCampus"
              control={control}
              render={({ field }) => (
                <div className="checkbox-group">
                  <p className="checkbox-label">Deseja adquirir carteirinha física?</p>
                  <label>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  </label>
                </div>  
              )}
            />
          </div>

          {pickupAtCampus && (
            <div className="form-group">
              <p className="form-input-label">Local de retirada</p>
              <Controller
                name="pickupAddress"
                control={control}
                render={({ field }) => (
                  <select
                    placeholder="Escolha o local de retirada"
                    
                    {...field}
                  />
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};