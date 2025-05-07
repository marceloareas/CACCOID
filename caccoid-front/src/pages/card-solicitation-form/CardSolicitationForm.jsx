import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { useSchema } from "../../hooks/useSchema";
import FormProgressBar from '../../components/form/form-progress-bar/FormProgressBar';
import { CourseStep } from './steps/CourseStep';
import { PersonalStep } from './steps/PersonalStep';
import { DocumentsStep } from './steps/DocumentsStep';
import { LocationStep } from './steps/LocationStep';
import { PhotoStep } from './steps/PhotoStep';
import { PaymentStep } from './steps/PaymentStep';

import arrowIcon from '../../assets/arrow-icon.svg';
import { setCurrentPage, updateFormData } from '../../ducks/form';

import './styles.css';

const CardSolicitationForm = ({ 
  currentPage, 
  steps, 
  formData, 
  setCurrentPage, 
  updateFormData 
}) => {
  const { schema } = useSchema();
  const [isValidating, setIsValidating] = useState(false);
  
  const methods = useForm({
    defaultValues: {
      educationLevel: "",
      registration: "",
      courseName: "",
      institutionName: "",
      fullName: "",
      rg: "",
      cpf: "",
      birthDate: "",
      email: "",
      phoneNumber: "",
      enrollmentProof: undefined,
      identityFront: undefined,
      identityBack: undefined,
      pickupAtCampus: false,
      pickupLocation: "",
      studentPhoto: undefined,
      paymentProof: undefined,
      ...formData
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {
    handleSubmit,
    trigger,
    watch,
    formState: { errors }
  } = methods;

  useEffect(() => {
    const subscription = watch((values) => {
      const valuesToUpdate = { ...values };
      
      // Remove os FileList originais antes de enviar para o Redux
      const fileFields = ['enrollmentProof', 'identityFront', 'identityBack', 'studentPhoto', 'paymentProof'];
      fileFields.forEach(field => {
        if (valuesToUpdate[field] instanceof FileList) {
          valuesToUpdate[field] = undefined; // O reducer vai serializar
        }
      });
      
      updateFormData(valuesToUpdate);
    });
    return () => subscription.unsubscribe();
  }, [watch, updateFormData]);

  const stepFieldsMap = {
    0: ['educationLevel', 'registration', 'courseName', 'institutionName'],
    1: ['fullName', 'rg', 'cpf', 'birthDate', 'email', 'phoneNumber'],
    2: ['enrollmentProof', 'identityFront', 'identityBack'],
    3: ['pickupAtCampus'],
    4: ['studentPhoto'],
    5: ['paymentProof']
  };

  const isStepValid = async () => {
    const fields = stepFieldsMap[currentPage] || [];
    return await trigger(fields);
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
    const firstError = Object.keys(errors)[0];
    if (firstError) {
      const element = document.querySelector(`[name="${firstError}"]`);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [errors]);

  const renderStepComponent = () => {
    const stepProps = { formData, updateFormData };
    switch (currentPage) {
      case 0: return <CourseStep {...stepProps} />;
      case 1: return <PersonalStep {...stepProps} />;
      case 2: return <DocumentsStep />;
      case 3: return <LocationStep />;
      case 4: return <PhotoStep />;
      case 5: return <PaymentStep />;
      default: return <CourseStep {...stepProps} />;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-windown">
          <FormProgressBar />
          {renderStepComponent()}

          <div className={currentPage === 0 ? 'form-navigation-first-page' : 'form-navigation'}>
            {currentPage > 0 && (
              <button type="button" onClick={prevStep} className='prev-button' disabled={isValidating}>
                <img src={arrowIcon} alt="Anterior" />
                Anterior
              </button>
            )}
            {currentPage < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className='next-button'
                disabled={isValidating}
              >
                {isValidating ? 'Validando...' : 'Próximo'}
                {!isValidating && <img src={arrowIcon} alt="Próximo" />}
              </button>
            ) : (
              <button
                type="submit"
                className='submit-button'
                disabled={Object.keys(errors).length > 0 || isValidating}
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

const mapStateToProps = (state) => ({
  currentPage: state.form.currentPage,
  steps: state.form.steps,
  formData: state.form.formData
});

const mapDispatchToProps = {
  setCurrentPage,
  updateFormData
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSolicitationForm);