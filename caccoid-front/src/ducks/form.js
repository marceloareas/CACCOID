const SET_CURRENT_PAGE = "form/SET_CURRENT_PAGE";
const TOGGLE_MODAL = "form/TOGGLE_MODAL";

const initialState = {
  currentPage: 0,
  toggleModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };
    default: {
      return state;
    }
  }
};

export default reducer;

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
