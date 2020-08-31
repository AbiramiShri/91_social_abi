const INITIAL_STATE = {
  spaceHistoryList: [],
  spaceAddressList: []
};

const spaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SPACE_HISTORY_LIST":
      state.spaceHistoryList = [...action.payload];
      return {
        ...state
      };
    case "SET_SPACE_ADDRESS_LIST":
      state.spaceAddressList = [...action.payload];
      return {
        ...state
      };
    default:
      return state;
  }
};
export default spaceReducer;
