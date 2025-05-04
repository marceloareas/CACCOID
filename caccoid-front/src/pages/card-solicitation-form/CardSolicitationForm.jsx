import { connect } from 'react-redux';
import { setCurrentPage, updateFormData } from '../../ducks/form';
import  FormProgressBar   from '../../components/form/form-progress-bar/FormProgressBar';
import { CourseStep } from './steps/CourseStep';
import { PersonalStep } from './steps/PersonalStep';
import arrowIcon from '../../assets/arrow-icon.svg';
// import PersonalStep from './steps/PersonalStep';
import './styles.css'

const CardSolicitationForm = ({ 
  currentPage, 
  steps, 
  formData, 
  setCurrentPage, 
  updateFormData 
}) => {
  const nextStep = () => {
    if (currentPage < steps.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevStep = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderStepComponent = () => {
    switch (currentPage) {
      case 0:
        return <CourseStep formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <PersonalStep formData={formData} updateFormData={updateFormData}/>
      default:
        return <CourseStep formData={formData} updateFormData={updateFormData} />;
    }
  };

  return (
    <div className="form-windown">
      <FormProgressBar />
      
      {renderStepComponent()}
      
      <div className={currentPage === 0 ? 'form-navigation-first-page' : 'form-navigation'}>
        {currentPage > 0 && (
          <button onClick={prevStep} className='prev-button'>
            <img src={arrowIcon} style={{paddingLeft: '0.75rem', height: '1.35rem', transform:'rotate(180deg)'}}/>
            Anterior
          </button>
        )}
        {currentPage < steps.length - 1 ? (
          <button onClick={nextStep} className='next-button'>
            Próximo
            <img src={arrowIcon} style={{paddingLeft: '0.75rem', height: '1.35rem'}}/>
          </button>
        ) : (
          <button onClick={() => console.log('Enviar:', formData)} className='submit-button'>
            Enviar
          </button>
        )}
      </div>
    </div>
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