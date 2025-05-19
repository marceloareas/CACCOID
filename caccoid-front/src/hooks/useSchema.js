import * as yup from 'yup';
import { useSelector } from 'react-redux';

export const useSchema = () => {
  const { currentPage } = useSelector((store) => store.form);

  let schema;

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  switch (currentPage) {
    case 0:
      schema = yup.object().shape({
        educationLevel: yup.string().required('Nível de ensino é obrigatório'),
        registration: yup
          .string()
          .required('Matrícula é obrigatória')
          .matches(
            /^[0-9]{7}[a-zA-Z]{3}$/,
            'Formato inválido (7 números + 3 letras)'
          ),
        courseName: yup.string().required('Curso é obrigatório'),
        institutionName: yup.string().required('Instituição é obrigatória'),
      });
      break;

    case 1:
      schema = yup.object().shape({
        fullName: yup
          .string()
          .required('Nome completo é obrigatório')
          .min(3, 'Mínimo 3 caracteres'),
        cpf: yup
          .string()
          .required('CPF é obrigatório')
          .test('cpf-format', 'Formato inválido (000.000.000-00)', (value) => {
            return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
          }),
        rg: yup
          .string()
          .required('RG é obrigatório')
          .max(20, 'Número máximo de caracteres é 20.'),

        birthDate: yup
          .string()
          .required('Data de nascimento é obrigatória')
          .test('valid-date', 'Data inválida', (value) => {
            return !isNaN(new Date(value).getTime());
          })
          .test('future-date', 'Data não pode ser no futuro', (value) => {
            return new Date(value) <= new Date();
          }),
        email: yup
          .string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),

        phoneNumber: yup
          .string()
          .required('Celular é obrigatório')
          .matches(
            /^\(\d{2}\) \d{5}-\d{4}$/,
            'Formato inválido (00) 00000-0000'
          ),
      });
      break;

    case 2:
      schema = yup.object().shape({
        enrollmentProof: yup
          .mixed()
          .test(
            'required',
            'Comprovante de matrícula é obrigatório',
            (value) => {
              return value && value.length > 0;
            }
          )
          .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(
              file.type
            );
          })
          .test('fileSize', 'Tamanho máximo é 5MB', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return file.size <= MAX_FILE_SIZE;
          }),

        identityFront: yup
          .mixed()
          .test('required', 'Frente da identidade é obrigatório', (value) => {
            return value && value.length > 0;
          })
          .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(
              file.type
            );
          })
          .test('fileSize', 'Tamanho máximo é 5MB', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return file.size <= MAX_FILE_SIZE;
          }),

        identityBack: yup
          .mixed()
          .test('required', 'Verso da identidade é obrigatório', (value) => {
            return value && value.length > 0;
          })
          .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(
              file.type
            );
          })
          .test('fileSize', 'Tamanho máximo é 5MB', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return file.size <= MAX_FILE_SIZE;
          }),
      });
      break;

    case 3:
      schema = yup.object().shape({
        pickupAtCampus: yup.boolean().default(false),
        
        pickupLocation: yup
          .string()
          .nullable()
          .when('pickupAtCampus', {
            is: true,
            then: (schema) =>
              schema.required('Local de retirada é obrigatório'),
            otherwise: (schema) => schema.notRequired(),
          }),
      });
      break;

    case 4:
      schema = yup.object().shape({
        studentPhoto: yup
          .mixed()
          .test('required', 'Foto é obrigatória', (value) => {
            return value && value.length > 0;
          })
          .test('fileType', 'Apenas JPG ou PNG', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return ['image/jpeg', 'image/png'].includes(file.type);
          })
          .test('fileSize', 'Tamanho máximo é 5MB', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return file.size <= MAX_FILE_SIZE;
          }),
      });
      break;

    case 5:
      schema = yup.object().shape({
        paymentProof: yup
          .mixed()
          .test(
            'required',
            'Comprovante de pagamento é obrigatório',
            (value) => {
              return value && value.length > 0;
            }
          )
          .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(
              file.type
            );
          })
          .test('fileSize', 'Tamanho máximo é 5MB', (value) => {
            if (!value || value.length === 0) return true;
            const file = value[0];
            return file.size <= MAX_FILE_SIZE;
          }),
      });
      break;

    default:
      schema = yup.object().shape({});
  }

  return { schema };
};
