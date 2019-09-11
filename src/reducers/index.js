import { initialState } from "../default-state";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";

const reducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    const { price } = action.payload;
    if (!state.car.features.includes(action.payload)) {
      return {
        ...state,
        additionalPrice: (state.additionalPrice += price),
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    } else {
      return state;
    }
  }

  if (action.type === REMOVE_ITEM) {
    const { price, id } = action.payload;
    return {
      ...state,
      additionalPrice: (state.additionalPrice -= price),
      car: {
        ...state.car,
        features: state.car.features.filter(feature => feature.id !== id)
      }
    };
  }
  return state;
};

export default reducer;
