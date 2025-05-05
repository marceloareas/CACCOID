import * as yup from "yup";

export const useSchema = () => {
  const schema = yup.object().shape({
    educationLevel: yup.string().required("Nível de ensino é obrigatório"),

    registration: yup.string()
      .required("Matrícula é obrigatória")
      .matches(/^[0-9]{7}[a-zA-Z]{3}$/, "Formato inválido (7 números + 3 letras)"),

    courseName: yup.string().required("Curso é obrigatório"),
    institutionName: yup.string().required("Instituição é obrigatória"),

    fullName: yup.string()
      .required("Nome completo é obrigatório")
      .min(3, "Mínimo 3 caracteres"),

    cpf: yup.string()
      .required("CPF é obrigatório")
      .test('cpf-format', 'Formato inválido (000.000.000-00)', value => {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
      }),
    rg: yup.string()
      .required("RG é obrigatório")
      .test('rg-format', 'Formato inválido (00.000.000-0)', value => {
        return /^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(value);
      }),

    birthDate: yup.string()
      .required("Data de nascimento é obrigatória")
      .test('valid-date', 'Data inválida', (value) => {
        return !isNaN(new Date(value).getTime());
      })
      .test('future-date', 'Data não pode ser no futuro', (value) => {
        return new Date(value) <= new Date();
      }),

    email: yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),

    phoneNumber: yup.string()
      .required("Celular é obrigatório")
      .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Formato inválido (00) 00000-0000"),

    enrollmentProof: yup.mixed()
      .test('required', "Comprovante de matrícula é obrigatório", (value) => {
        return value && value.length > 0;
      })
      .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
        if (!value || value.length === 0) return true;
        const file = value[0];
        return ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
      }),

    identityFront: yup.mixed()
    .test('required', "Frente da identidade é obrigatório", (value) => {
      return value && value.length > 0;
    })
    .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
      if (!value || value.length === 0) return true;
      const file = value[0];
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
    }),  

    identityBack: yup.mixed()
      .test('required', "Verso da identidade é obrigatório", (value) => {
        return value && value.length > 0;
      })
      .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
        if (!value || value.length === 0) return true;
        const file = value[0];
        return ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
      }),

    pickupAtCampus: yup.boolean().default(false),

    studentPhoto: yup.mixed()
      .test('required', "Foto é obrigatória", (value) => {
        return value && value.length > 0;
      })
      .test('fileType', 'Apenas JPG ou PNG', (value) => {
        if (!value || value.length === 0) return true;
        const file = value[0];
        return ['image/jpeg', 'image/png'].includes(file.type);
      }),

    paymentProof: yup.mixed()
      .test('required', "Comprovante de pagamento é obrigatório", (value) => {
        return value && value.length > 0;
      })
      .test('fileType', 'Apenas JPG, PNG ou PDF', (value) => {
        if (!value || value.length === 0) return true;
        const file = value[0];
        return ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
      })
  });

  return { schema };
};