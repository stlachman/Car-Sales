import { initialState } from "../default-state";
import { ADD_ITEM } from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    default:
      return state;
  }
};

export default reducer;
