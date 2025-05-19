import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import { useSchema } from '../../hooks/useSchema';

import { CourseStep } from './Steps/CourseStep';
import { PersonalStep } from './Steps/PersonalStep';
import { DocumentsStep } from './Steps/DocumentsStep';
import { LocationStep } from './Steps/LocationStep';
import { PhotoStep } from './Steps/PhotoStep';
import { PaymentStep } from './Steps/PaymentStep';

import arrowIcon from '../../assets/arrow-icon.svg';
import { setCurrentPage } from '../../ducks/form';

import * as S from './styles';

import { FormProgressBar } from '../../components/FormProgressBar';

export const CardSolicitationForm = () => {
  const { schema } = useSchema();
  const dispatch = useDispatch();

  const { currentPage, steps } = useSelector((store) => store.form);

  const methods = useForm({
    defaultValues: {
      educationLevel: '',
      registration: '',
      courseName: '',
      institutionName: '',
      fullName: '',
      rg: '',
      cpf: '',
      birthDate: '',
      email: '',
      phoneNumber: '',
      enrollmentProof: undefined,
      identityFront: undefined,
      identityBack: undefined,
      pickupAtCampus: false,
      pickupLocation: '',
      studentPhoto: undefined,
      paymentProof: undefined,
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const stepFieldsMap = {
    0: ['educationLevel', 'registration', 'courseName', 'institutionName'],
    1: ['fullName', 'rg', 'cpf', 'birthDate', 'email', 'phoneNumber'],
    2: ['enrollmentProof', 'identityFront', 'identityBack'],
    3: ['pickupAtCampus', 'pickupLocation'],
    4: ['studentPhoto'],
    5: ['paymentProof'],
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const renderStepComponent = () => {
    switch (currentPage) {
      case 0:
        return <CourseStep />;
      case 1:
        return <PersonalStep />;
      case 2:
        return <DocumentsStep />;
      case 3:
        return <LocationStep />;
      case 4:
        return <PhotoStep />;
      case 5:
        return <PaymentStep />;
      default:
        return <CourseStep />;
    }
  };

  return (
    <FormProvider {...methods}>
      <DevTool control={methods.control} />
      <form
        style={{ display: 'flex', justifyContent: 'center' }}
        onSubmit={methods?.handleSubmit(onSubmit)}
      >
        <S.FormWindow>
          <FormProgressBar />
          {renderStepComponent()}

          <S.FormNavigationContainer firstPage={currentPage === 0}>
            {currentPage > 0 && (
              <S.FormButton
                type="button"
                prevButton={currentPage > 0}
                onClick={async () => {
                  dispatch(setCurrentPage(currentPage - 1));
                }}
              >
                <img src={arrowIcon} alt="Anterior" />
                Anterior
              </S.FormButton>
            )}
            {currentPage < steps.length - 1 ? (
              <S.FormButton
                type="button"
                onClick={async () => {
                  const fields = stepFieldsMap[currentPage];
                  const isValid = await methods.trigger(fields);
                  if (isValid) {
                    dispatch(setCurrentPage(currentPage + 1));
                  }
                }}
              >
                Próximo
                <img src={arrowIcon} alt="Próximo" />
              </S.FormButton>
            ) : (
              <S.FormButton
                type="submit"
                onClick={async (e) => {
                  const fields = stepFieldsMap[steps.length - 1];
                  const isValid = await methods.trigger(fields, {
                    shouldFocus: true,
                  });
                  if (!isValid) {
                    e.preventDefault();
                    fields.forEach((field) => methods.setFocus(field));
                  }
                }}
              >
                Enviar
              </S.FormButton>
            )}
          </S.FormNavigationContainer>
        </S.FormWindow>
      </form>
    </FormProvider>
  );
};
