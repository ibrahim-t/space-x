import { Actions } from "./actions";
const initialState = {
  records: [],
};
export function reducer(state = initialState, actions) {
  switch (actions.type) {
    case Actions.FETCH_INITIAL_RECORD:
      return {
        ...state,
        records: actions.records,
      };
    case Actions.UPDATE_DATA:
      return {
        ...state,
        records: actions.records,
      };
    default:
      return Object.keys(state).length > 0 ? state : initialState;
  }
}
