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
                      onChange={(e) => field.onChange(e.target.files[0])}
                      key={formData.enrollmentProof?.name} // Força re-render ao alterar
                    />
                    {formData.enrollmentProof?.name ? (
                      <p>
                        Arquivo selecionado: {formData.enrollmentProof.name}
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
                name="identityDocumentFront"
                control={control}
                render={({ field }) => (
                  <>
                    <S.DocumentInput
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => field.onChange(e.target.files[0])}
                      key={formData.identityDocumentFront?.name}
                    />
                    {formData.identityDocumentFront?.name ? (
                      <p>
                        Arquivo selecionado: {formData.identityDocumentFront.name}
                      </p>
                    ) : (
                      <p>Faça upload do arquivo</p>
                    )}
                  </>
                )}
              />
              <S.DocumentIcon src={uploadFileIcon} />
            </S.DocumentInputContainer>
            {formState.errors?.identityDocumentFront && (
              <S.ErrorMessage>
                {formState.errors.identityDocumentFront.message}
              </S.ErrorMessage>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.FormInputLabel>
              Identidade (verso)<span>*</span>
            </S.FormInputLabel>
            <S.DocumentInputContainer>
              <Controller
                name="identityDocumentBack"
                control={control}
                render={({ field }) => (
                  <>
                    <S.DocumentInput
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => field.onChange(e.target.files[0])}
                      key={formData.identityDocumentBack?.name}
                    />
                    {formData.identityDocumentBack?.name ? (
                      <p>
                        Arquivo selecionado: {formData.identityDocumentBack.name}
                      </p>
                    ) : (
                      <p>Faça upload do arquivo</p>
                    )}
                  </>
                )}
              />
              <S.DocumentIcon src={uploadFileIcon} />
            </S.DocumentInputContainer>
            {formState.errors?.identityDocumentBack && (
              <S.ErrorMessage>
                {formState.errors.identityDocumentBack.message}
              </S.ErrorMessage>
            )}
          </S.FormGroup>
        </S.FormColumn>
      </S.FormGrid>
    </S.FormStep>
  );
};
