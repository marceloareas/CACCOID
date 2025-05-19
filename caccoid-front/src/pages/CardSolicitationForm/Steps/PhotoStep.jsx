import { Controller, useFormContext } from 'react-hook-form';
import uploadIcon from '../../../assets/upload-icon.svg';

import * as S from './styles';

export const PhotoStep = () => {
  const {
    control,
    formState,
    watch
  } = useFormContext();

  const formData = watch();

  return (
    <S.FormStep>
      <S.Title>Foto da Carteirinha</S.Title>
      <S.UploadInputGrid>
        <S.UploadInputContainer>
          <S.UploadIconContainer>
            <img src={uploadIcon} />
          </S.UploadIconContainer>
          <Controller
            name="studentPhoto"
            control={control}
            render={({ field }) => (
              <>
                <S.UploadInput
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => field.onChange(e.target.files)}
                  key={formData.studentPhoto?.[0]?.name}
                />
                {formData.studentPhoto?.[0]?.name ? (
                  <p>Arquivo selecionado: {formData.studentPhoto[0].name}</p>
                ) : (
                  <p>Faça o upload do arquivo desejado</p>
                )}
                {formState.errors?.studentPhoto && (
                  <S.ErrorMessage>
                    {formState.errors.studentPhoto.message}
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
