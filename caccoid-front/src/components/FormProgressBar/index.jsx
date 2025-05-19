import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../ducks/form';
import { useFormContext } from 'react-hook-form';
import checkIcon from '../../assets/check-icon.svg';

import * as S from './styles';

import React from 'react';

export const FormProgressBar = () => {
  const dispatch = useDispatch(); 
  const { trigger } = useFormContext();
  const { currentPage, steps } = useSelector((store) => store.form);

  const stepFieldsMap = {
    0: ['educationLevel', 'registration', 'courseName', 'institutionName'],
    1: ['fullName', 'rg', 'cpf', 'birthDate', 'email', 'phoneNumber'],
    2: ['enrollmentProof', 'identityFront', 'identityBack'],
    3: ['pickupAtCampus', 'pickupLocation'],
    4: ['studentPhoto'],
    5: ['paymentProof'],
  };

  const handleStepClick = async (index) => {
    if (index < currentPage) {
      dispatch(setCurrentPage(index)); 
      return;
    }

    for (let i = currentPage; i < index; i++) {
      const fields = stepFieldsMap[i];
      if (fields && !(await trigger(fields))) {
        return;
      }
    }

    dispatch(setCurrentPage(index)); 
  };

  return (
    <S.ProgressBarContainer>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <S.ProgressStep
            step={index === currentPage ? 'active' : ''}
            completed={index < currentPage ? 'completed' : ''}
            onClick={() => handleStepClick(index)}
          >
            {index < currentPage ? (
              <S.StepIcon src={checkIcon} alt="Completed" />
            ) : (
              <S.StepIcon src={step.icon} alt={step.title} />
            )}
          </S.ProgressStep>

          {index < steps.length - 1 && (
            <S.ProgressLine
              completed={index < currentPage ? 'completed' : ''}
            />
          )}
        </React.Fragment>
      ))}
    </S.ProgressBarContainer>
  );
};

