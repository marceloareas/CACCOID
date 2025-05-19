import { FormGenericStep } from '../../../components/FormGenericStep';
// import {
//   GenericInput,
//   GenericSelect,
// } from '../../../components/FormGenericStep/styles';

export const CourseStep = () => {
  const educationLevels = [
    { value: '', label: 'Selecione o nível de ensino' },
    { value: 'graduacao', label: 'Graduação' },
    { value: 'pos', label: 'Pós-graduação' },
  ];

  const institutions = [
    { value: '', label: 'Selecione a instituição' },
    { value: 'CEFET-RJ', label: 'CEFET-RJ - Campus Maracanã' },
  ];

  const courses = [
    { value: '', label: 'Selecione o curso' },
    { value: 'BCC', label: 'Bacharelado em Ciência da Computação' },
  ];

  const fields = {
    title: 'Dados do Curso',
    column1: [
      {
        name: 'educationLevel',
        label: 'Nível de ensino',
        inputType: 'select',
        inputOptions: educationLevels,
      },
      {
        name: 'registration',
        label: 'Matrícula',
        placeholder: 'Ex: 2112290BCC',
        pattern: '^[0-9]{7}[a-zA-Z]{3}$',
      },
      {
        name: 'courseName',
        label: 'Curso',
        inputType: 'select',
        inputOptions: courses,
      },
      {
        name: 'institutionName',
        label: 'Instituição de ensino',
        inputType: 'select',
        inputOptions: institutions,
      },
    ],
    column2: [],
    uploadField: [],
  };

  return <FormGenericStep fields={fields} />;
};
