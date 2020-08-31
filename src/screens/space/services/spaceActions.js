import { getMethod } from "../../../helper/api";

export const emitEventToReducer = params => ({
  type: params.type,
  payload: params.payload
});

export const getSpaceHistoryList = params => async dispatch => {
  try {
    let spaceHistoryResponse = await getMethod(
      "https://api.spacexdata.com/v3/history"
    );
    console.log("spaceHistoryResponse", spaceHistoryResponse);
    let spaceHistoryList = spaceHistoryResponse.data
      ? spaceHistoryResponse.data
      : [];
    dispatch(
      emitEventToReducer({
        type: "SET_SPACE_HISTORY_LIST",
        payload: spaceHistoryList
      })
    );
  } catch (error) {}
};

export const getSpaceAddressList = params => async dispatch => {
  try {
    let spaceAddressResponse = await getMethod(
      "https://api.spacexdata.com/v3/payloads"
    );
    console.log("spaceAddressResponse", spaceAddressResponse);
    let spaceAddressList = spaceAddressResponse.data
      ? spaceAddressResponse.data
      : [];
    dispatch(
      emitEventToReducer({
        type: "SET_SPACE_ADDRESS_LIST",
        payload: spaceAddressList
      })
    );
  } catch (error) {}
};
