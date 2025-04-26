import * as yup from "yup";

export const useSchema = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .default("")
      .required("O nome de usuário é obrigatório")
      .min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
    email: yup
      .string()
      .default("")
      .required("O e-mail é obrigatório")
      .email("Insira um e-mail válido"),
  });

  return { schema };
};
