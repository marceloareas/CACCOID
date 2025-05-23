import personIcon from '../assets/person-icon.svg';
import schoolHatIcon from '../assets/school-hat-icon.svg';
import documentIcon from '../assets/document-icon.svg';
import imageIcon from '../assets/image-icon.svg';
import locationIcon from '../assets/location-icon.svg';
import creditCardIcon from '../assets/credit-card-icon.svg';

const SET_CURRENT_PAGE = 'form/SET_CURRENT_PAGE';

const initialState = {
  currentPage: 0,
  steps: [
    { id: 'course', icon: schoolHatIcon, title: 'Dados do Curso' },
    { id: 'personal', icon: personIcon, title: 'Dados Pessoais' },
    { id: 'documents', icon: documentIcon, title: 'Documentos' },
    { id: 'localization', icon: locationIcon, title: 'Local de Retirada' },
    { id: 'photo', icon: imageIcon, title: 'Foto da Carteirinha' },
    { id: 'payment', icon: creditCardIcon, title: 'Comprovante de Pagamento' },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

