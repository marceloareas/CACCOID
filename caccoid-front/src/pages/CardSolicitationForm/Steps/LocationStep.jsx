import { Controller, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

import * as S from './styles';

export const LocationStep = () => {
  const { control, watch, setValue, formState } = useFormContext();

  const pickupAtCampus = watch('pickupAtCampus');

  const pickupOptions = [
    { value: '', label: 'Selecione um local de retirada' },
    { value: 'DCE - Maracanã', label: 'Cefet-RJ - Campus Maracanã' },
  ];

  useEffect(() => {
    setValue('pickupAtCampus', pickupAtCampus || false);
  }, [pickupAtCampus, setValue]);

  return (
    <S.FormStep>
      <S.Title>Local de Retirada</S.Title>
      <S.FormGrid>
        <S.FormColumn>
          <S.FormGroup>
            <Controller
              name="pickupAtCampus"
              control={control}
              render={({ field }) => (
                <S.Checkbox>
                  <S.CheckboxLabel>
                    <input
                    type="checkbox"
                    style={{ width: '2.2rem', height: '2.2rem', borderRadius: '15px' }}
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    /> 
                    Deseja adquirir carteirinha física?
                  </S.CheckboxLabel>               
                </S.Checkbox>
              )}
            />
          </S.FormGroup>

          {pickupAtCampus && (
            <S.FormGroup>
              <S.FormInputLabel>Local de retirada</S.FormInputLabel>
              <Controller
                name="pickupLocation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <S.LocationInput {...field}>
                      {pickupOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </S.LocationInput>
                    {formState.errors?.pickupLocation && (
                      <S.ErrorMessage>
                        {formState.errors.pickupLocation.message}
                      </S.ErrorMessage>
                    )}
                  </>
                )}
              />
            </S.FormGroup>
          )}
        </S.FormColumn>
      </S.FormGrid>
    </S.FormStep>
  );
};
