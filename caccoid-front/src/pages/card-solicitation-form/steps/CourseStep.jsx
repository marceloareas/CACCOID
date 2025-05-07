import { GenericStep } from '../../../components/form/form-step/GenericStep';

export const CourseStep = ({ formData, updateFormData }) => {
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
        type: 'select',
        options: educationLevels,
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
        type: 'select',
        options: courses,
      },
      {
        name: 'institutionName',
        label: 'Instituição de ensino',
        type: 'select',
        options: institutions,
      },
    ],
    column2: [],
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
