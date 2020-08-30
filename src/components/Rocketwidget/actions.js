const axios = require("axios");
const rocketData = require("./flight.json");
export const Actions = {
  FETCH_INITIAL_RECORD: "FETCH_INITIAL_RECORD",
  UPDATE_DATA: "UPDATE_DATA",
};
function getUserFilter(filter) {
  let filterString = "";
  if (filter["year"]) {
    filterString = `launch_year=${filter["year"]}`;
  }
  if (typeof filter["landing"] === "boolean") {
    filterString = `${filterString}&land_success${filter["landing"]}`;
  }
  if (typeof filter["launch"] === "boolean") {
    filterString = `${filterString}&launch_success${filter["launch"]}`;
  }
  return filterString;
}

export function doFetchData() {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        "https://api.spaceXdata.com/v3/launches?limit=10"
      );
      if (result.data && result.data.length > 0) {
        dispatch({ type: Actions.FETCH_INITIAL_RECORD, records: result.data });
      }
    } catch (ex) {
      const result = { data: rocketData }; // api is failing so feeded from mockdata
      if (result.data && result.data.length > 0) {
        dispatch({ type: Actions.FETCH_INITIAL_RECORD, records: result.data });
      }
      throw ex;
    }
  };
}
export function doUpdateFilter(evt) {
  return async (dispatch) => {
    let filterString = getUserFilter(evt);
    try {
      const result = await axios.get(
        `https://api.spaceXdata.com/v3/launches?limit=10&${filterString}`
      );
      if (result.data && result.data.length > 0) {
        dispatch({ type: Actions.UPDATE_DATA, records: result.data });
      }
    } catch (ex) {
      throw ex;
    }
  };
}
