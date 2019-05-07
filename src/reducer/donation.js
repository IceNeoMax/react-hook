import { UPDATE_TOTAL_DONATE, UPDATE_MESSAGE } from '../action'

const _state = {
  donate: 0,
  message: '',
};

export default function donation(state = _state, action) {
  switch (action.type) {
    case UPDATE_TOTAL_DONATE:
      return { ...state, donate: state.donate + action.amount };
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default: return state;
  }
}