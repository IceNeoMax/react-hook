

export const UPDATE_TOTAL_DONATE = 'UPDATE_TOTAL_DONATE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateTotalDonate = (amount) => ({
  type: UPDATE_TOTAL_DONATE,
  amount,
});

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message,
});