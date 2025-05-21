import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import { useSchema } from '../../hooks/useSchema';
import { toast } from 'react-toastify';
import { setCurrentPage } from '../../ducks/form';

import { useAPI } from '../../hooks/useAPI';

import arrowIcon from '../../assets/arrow-icon.svg';

import { CourseStep } from './Steps/CourseStep';
import { PersonalStep } from './Steps/PersonalStep';
import { DocumentsStep } from './Steps/DocumentsStep';
import { LocationStep } from './Steps/LocationStep';
import { PhotoStep } from './Steps/PhotoStep';
import { PaymentStep } from './Steps/PaymentStep';
import { FormProgressBar } from '../../components/FormProgressBar';
import Loading from '../../components/Loading';

import * as S from './styles';

export const CardSolicitationForm = () => {
  const api = useAPI(true);
  const navigate = useNavigate();
  const { schema } = useSchema();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const { currentPage, steps } = useSelector((store) => store.form);

  const methods = useForm({
    defaultValues: {
      educationLevel: '',
      enrollmentNumber: '',
      program: '',
      instituion: '',
      name: '',
      rg: '',
      cpf: '',
      dateOfBirth: '',
      email: '',
      telephone: '',
      enrollmentProof: undefined,
      identityDocumentFront: undefined,
      identityDocumentBack: undefined,
      virtualOnly: false,
      pickupLocation: '',
      studentPhoto: undefined,
      paymentProof: undefined,
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const stepFieldsMap = {
    0: ['educationLevel', 'enrollmentNumber', 'program', 'instituion'],
    1: ['name', 'rg', 'cpf', 'dateOfBirth', 'email', 'telephone'],
    2: ['enrollmentProof', 'identityDocumentFront', 'identityDocumentBack'],
    3: ['virtualOnly', 'pickupLocation'],
    4: ['studentPhoto'],
    5: ['paymentProof'],
  };

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const response = await api.post('/form/register-student', formData);

      if (!response.ok) {
        const errorMessage = `Erro ao enviar solicitação. Status: ${response.status}`;
        throw new Error(errorMessage);
      }

      setLoading(false);
      toast.success(
        'Solicitação de carteirinha enviada com sucesso! Redirecionando para Home...'
      );

      navigate('/home');
      
    } catch (error) {
      setLoading(false);

      toast.error(error.message);
    }
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};
