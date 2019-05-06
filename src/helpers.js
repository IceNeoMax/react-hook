
export const summaryDonations = (danations) => {
  if (!danations.length) return 0;
  return danations.reduce((accumulator, value) => (accumulator + value))
};
