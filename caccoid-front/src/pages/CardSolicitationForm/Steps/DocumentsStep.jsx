import { Controller, useFormContext } from 'react-hook-form';
import uploadFileIcon from '../../../assets/upload-file-icon.svg';

import * as S from './styles';

export const DocumentsStep = () => {
  const {
    control,
    formState,
    watch,
  } = useFormContext();
  const formData = watch();

  return (
    <S.FormStep>
      <S.Title>Documentos</S.Title>
      <S.FormGrid>
        <S.FormColumn>
          <S.FormGroup>
            <S.FormInputLabel>
              Comprovante de matrícula<span>*</span>
            </S.FormInputLabel>
            <S.DocumentInputContainer>
              <Controller
                name="enrollmentProof"
                control={control}
                render={({ field }) => (
                  <>
                    <S.DocumentInput
                      type="file"
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
              <S.DocumentIcon src={uploadFileIcon} />
            </S.DocumentInputContainer>
            {formState.errors?.enrollmentProof && (
              <S.ErrorMessage>
                {formState.errors.enrollmentProof.message}
              </S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.FormInputLabel>
              Identidade (frente)<span>*</span>
            </S.FormInputLabel>
            <S.DocumentInputContainer>
              <Controller
                name="identityFront"
                control={control}
                render={({ field }) => (
                  <>
                    <S.DocumentInput
                      type="file"
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
              <S.DocumentIcon src={uploadFileIcon} />
            </S.DocumentInputContainer>
            {formState.errors?.identityFront && (
              <S.ErrorMessage>
                {formState.errors.identityFront.message}
              </S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.FormInputLabel>
              Identidade (verso)<span>*</span>
            </S.FormInputLabel>
            <S.DocumentInputContainer>
              <Controller
                name="identityBack"
                control={control}
                render={({ field }) => (
                  <>
                    <S.DocumentInput
                      type="file"
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
              <S.DocumentIcon src={uploadFileIcon} />
            </S.DocumentInputContainer>
            {formState.errors?.identityBack && (
              <S.ErrorMessage>
                {formState.errors.identityBack.message}
              </S.ErrorMessage>
            )}
          </S.FormGroup>
        </S.FormColumn>
      </S.FormGrid>
    </S.FormStep>
  );
};
