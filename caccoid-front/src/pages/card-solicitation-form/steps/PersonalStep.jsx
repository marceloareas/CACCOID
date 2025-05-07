import { GenericStep } from '../../../components/form/form-step/GenericStep';

export const PersonalStep = ({ formData, updateFormData }) => {
  const fields = {
    title: 'Dados pessoais',
    column1: [
      {
        name: 'fullName',
        label: 'Nome Completo',
        placeholder: 'Digite seu nome completo',
      },
      { name: 'rg', label: 'RG', type: 'rg', placeholder: '00.000.000-0' },
      { name: 'cpf', label: 'CPF', type: 'cpf', placeholder: '000.000.000-00' },
      { name: 'birthDate', label: 'Data de nascimento', type: 'date' },
    ],
    column2: [
      {
        name: 'email',
        label: 'E-mail',
        type: 'email',
        placeholder: 'seu@email.com',
      },
      {
        name: 'phoneNumber',
        label: 'Celular',
        type: 'phone',
        placeholder: '(00) 00000-0000',
      },
    ],
    uploadField: [],
  };

  return (
    <GenericStep
      formData={formData}
      updateFormData={updateFormData}
      fields={fields}
    />
  );
};
