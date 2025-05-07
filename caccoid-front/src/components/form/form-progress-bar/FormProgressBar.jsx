import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../ducks/form';
import { useFormContext } from 'react-hook-form';
import checkIcon from '../../../assets/check-icon.svg';
import './styles.css';

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

    // Validar todos os steps anteriores primeiro
    for (let i = currentPage; i < index; i++) {
      const fields = stepFieldsMap[i];
      if (fields && !(await trigger(fields))) {
        return; // Não avança se algum step intermediário for inválido
      }
    }

    setCurrentPage(index);
  };

  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div
            className={`step ${index === currentPage ? 'active' : ''} ${index < currentPage ? 'completed' : ''}`}
            onClick={() => handleStepClick(index)}
          >
            {index < currentPage ? (
              <img src={checkIcon} className="step-icon" alt="Completed" />
            ) : (
              <img src={step.icon} alt={step.title} className="step-icon" />
            )}
          </div>

          {index < steps.length - 1 && (
            <div
              className={`progress-line ${index < currentPage ? 'completed' : ''}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
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
