const initialState = "";

export default function messageReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    case "CLEAR_MESSAGE":
      return "";
    default:
      return state;
  }
}
