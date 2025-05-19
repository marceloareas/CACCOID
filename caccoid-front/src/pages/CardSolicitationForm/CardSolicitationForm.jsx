import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

  const { currentPage, steps } = useSelector((store) => store.form)

  const [isValidating, setIsValidating] = useState(false);

  const methods = useFormContext({
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
      paymentProof: undefined
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const stepFieldsMap = {
    0: ['educationLevel', 'registration', 'courseName', 'institutionName'],
    1: ['fullName', 'rg', 'cpf', 'birthDate', 'email', 'phoneNumber'],
    2: ['enrollmentProof', 'identityFront', 'identityBack'],
    3: ['pickupAtCampus'],
    4: ['studentPhoto'],
    5: ['paymentProof'],
  };

  const isStepValid = async () => {
    const fields = stepFieldsMap[currentPage] || [];
    return await methods.trigger(fields);
  };

  const nextStep = async () => {
    setIsValidating(true);
    const valid = await isStepValid();
    setIsValidating(false);

    if (valid && currentPage < steps.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevStep = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  useEffect(() => {
    const firstError = Object.keys(methods?.formState?.errors)[0];
    if (firstError) {
      const element = document.querySelector(`[name="${firstError}"]`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [methods?.formState?.errors]);

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
                onClick={prevStep}
                className="prev-button"
                disabled={isValidating}
              >
                <img src={arrowIcon} alt="Anterior" />
                Anterior
              </button>
            )}
            {currentPage < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="next-button"
                disabled={isValidating}
              >
                {isValidating ? 'Validando...' : 'Próximo'}
                {!isValidating && <img src={arrowIcon} alt="Próximo" />}
              </button>
            ) : (
              <button
                type="submit"
                className="submit-button"
                disabled={Object.keys(methods?.formState?.errors).length > 0 || isValidating}
              >
                {isValidating ? 'Enviando...' : 'Enviar'}
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

// const mapStateToProps = (state) => ({
//   currentPage: state.form.currentPage,
//   steps: state.form.steps,
//   formData: state.form.formData,
// });

// const mapDispatchToProps = {
//   setCurrentPage
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CardSolicitationForm);
