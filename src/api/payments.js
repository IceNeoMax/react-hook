export const handlePayment = (body) => {
  return fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
    .then(function (resp) {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
}