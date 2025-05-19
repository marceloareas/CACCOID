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

import './styles.css';
import FormProgressBar from '../../components/FormProgressBar';

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
      <form onSubmit={methods?.handleSubmit(onSubmit)}>
        <div className="form-windown">
          <FormProgressBar />
          {renderStepComponent()}

          <div
            className={
              currentPage === 0
                ? 'form-navigation-first-page'
                : 'form-navigation'
            }
          >
            {currentPage > 0 && (
              <button
                type="button"
                className="prev-button"
                onClick={() => {
                  dispatch(setCurrentPage(currentPage - 1));
                }}
              >
                <img src={arrowIcon} alt="Anterior" />
                Anterior
              </button>
            )}
            {currentPage < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => {
                  console.log('Form state:', methods.formState.isValid);
                  methods?.formState?.isValid
                    ? dispatch(setCurrentPage(currentPage + 1))
                    : '';
                }}
                className="next-button"
              >
                <img src={arrowIcon} alt="Próximo" />
              </button>
            ) : (
              <button
                type="submit"
                className="submit-button"
                disabled={!methods?.formState?.isValid}
              >
                Enviar
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
