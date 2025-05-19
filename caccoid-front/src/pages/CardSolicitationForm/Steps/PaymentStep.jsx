import { Controller, useFormContext } from 'react-hook-form';
import uploadIcon from '../../../assets/upload-icon.svg';

import * as S from './styles';

export const PaymentStep = () => {
  const {
    control,
    formState,
    watch,
  } = useFormContext();

  const formData = watch();

  return (
    <S.FormStep>
      <S.Title>Comprovante de Pagamento</S.Title>
      <S.UploadInputGrid>
        <S.UploadInputContainer>
          <S.UploadIconContainer>
            <img src={uploadIcon} />
          </S.UploadIconContainer>
          <Controller
            name="paymentProof"
            control={control}
            render={({ field }) => (
              <>
                <S.UploadInput
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => field.onChange(e.target.files)}
                  key={formData.paymentProof?.[0]?.name}
                />
                {formData.paymentProof?.[0]?.name ? (
                  <p>Arquivo selecionado: {formData.paymentProof[0].name}</p>
                ) : (
                  <p>Faça o upload do arquivo desejado</p>
                )}
                {formState.errors?.paymentProof && (
                  <S.ErrorMessage>
                    {formState.errors.paymentProof.message}
                  </S.ErrorMessage>
                )}
              </>
            )}
          />
        </S.UploadInputContainer>
      </S.UploadInputGrid>
    </S.FormStep>
  );
};
