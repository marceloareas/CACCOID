import { FormGenericStep } from "../../../components/FormGenericStep";

export const PersonalStep = () => {
  const fields = {
    title: 'Dados pessoais',
    column1: [
      {
        name: 'name',
        label: 'Nome Completo',
        placeholder: 'Digite seu nome completo',
      },
      { 
        name: 'rg', 
        label: 'RG', 
        type: 'rg', 
        placeholder: '00.000.000-0' 
      },
      { 
        name: 'cpf', 
        label: 'CPF', 
        type: 'cpf', 
        placeholder: '000.000.000-00' 
      },
      { 
        name: 'dateOfBirth', 
        label: 'Data de nascimento', 
        type: 'date' 
      },
    ],
    column2: [
      {
        name: 'email',
        label: 'E-mail',
        type: 'email',
        placeholder: 'seu@email.com',
      },
      {
        name: 'telephone',
        label: 'Celular',
        type: 'phone',
        placeholder: '(00) 00000-0000',
      },
    ],
    uploadField: [],
  };

  return (
    <FormGenericStep fields={fields}/>
  );
};
