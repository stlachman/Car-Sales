import { initialState } from "../default-state";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!state.car.features.includes(action.payload)) {
        return {
          ...state,
          additionalPrice: (state.additionalPrice += action.payload.price),
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        };
      } else {
        return state;
      }
    case REMOVE_ITEM:
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
};

export default reducer;
