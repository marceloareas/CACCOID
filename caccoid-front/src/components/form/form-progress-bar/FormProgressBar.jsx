
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../ducks/form';
import checkIcon from '../../../assets/check-icon.svg';
import './styles.css';

const FormProgressBar = ({ steps, currentPage, setCurrentPage }) => {
  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div 
            className={`step ${index === currentPage ? 'active' : ''} ${index < currentPage ? 'completed' : ''}`}
            onClick={() => setCurrentPage(index)}
          >                   
            {index < currentPage ? (
              <img src={checkIcon} className="step-icon" alt="Completed" />
            ) : (
              <img src={step.icon} alt={step.title} className="step-icon" />
            )}
          </div>

          {/* Adiciona a linha entre os steps, exceto depois do último */}
          {index < steps.length - 1 && (
            <div className={`progress-line ${index < currentPage ? 'completed' : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
    // <div className="progress-container">
    //   {steps.map((step, index) => (
    //     <React.Fragment key={step.id}>
    //       <div 
    //         className={`step ${index === currentPage ? 'active' : ''} ${index < currentPage ? 'completed' : ''}`}
    //         onClick={() => setCurrentPage(index)}
    //       >                   
    //         {index < currentPage ? (
    //           <img src={checkIcon} className="step-icon" alt="Completed" />
    //         ) : (
    //           <img src={step.icon} alt={step.title} className="step-icon" />
    //         )}
    //       </div>
          
    //       {/* Adiciona a barra de progresso entre os passos, exceto após o último */}
    //       {/* {index < steps.length - 1 && (
    //         <div 
    //           className={`progress-line ${index < currentPage ? 'completed' : ''}`}
    //         />
    //       )} */}
    //     </React.Fragment>
    //   ))}
    // </div>
  );
};

const mapStateToProps = (state) => ({
  steps: state.form.steps,
  currentPage: state.form.currentPage
});

const mapDispatchToProps = {
  setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProgressBar);
