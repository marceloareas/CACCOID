import { connect } from 'react-redux';
import { setCurrentPage } from '../../ducks/form';
import { useFormContext } from 'react-hook-form';
import checkIcon from '../../assets/check-icon.svg';
import * as S from './styles';
import React from 'react';

const FormProgressBar = ({ steps, currentPage, setCurrentPage }) => {
  const { trigger } = useFormContext();

  const stepFieldsMap = {
    0: ['educationLevel', 'registration', 'courseName', 'institutionName'],
    1: ['fullName', 'rg', 'cpf', 'birthDate', 'email', 'phoneNumber'],
    2: ['enrollmentProof', 'identityFront', 'identityBack'],
    3: ['pickupAtCampus'],
    4: ['studentPhoto'],
    5: ['paymentProof'],
  };

  const handleStepClick = async (index) => {
    if (index < currentPage) {
      setCurrentPage(index);
      return;
    }

    for (let i = currentPage; i < index; i++) {
      const fields = stepFieldsMap[i];
      if (fields && !(await trigger(fields))) {
        return;
      }
    }

    setCurrentPage(index);
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

const mapStateToProps = (state) => ({
  steps: state.form.steps,
  currentPage: state.form.currentPage,
});

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProgressBar);
