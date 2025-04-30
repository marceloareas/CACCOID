const SET_CURRENT_STATE = "admin/SET_CURRENT_STATE";
const SET_SELECTED_IDS = "admin/SET_SELECTED_IDS";
const TOGGLE_MODAL = "admin/TOGGLE_MODAL";

const initialState = {
  currentState: 0,
  selectedIds: [],
  toggleModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_STATE:
      return {
        ...state,
        currentState: action.currentState,
      };
    case SET_SELECTED_IDS:
      return {
        ...state,
        selectedIds: action.selectedIds,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };
    default:
      return state;
  }
};

export default reducer;

export const setCurrentState = (currentState) => ({
  type: SET_CURRENT_STATE,
  currentState,
});

export const setSelectedIds = (selectedIds) => ({
  type: SET_SELECTED_IDS,
  selectedIds,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

