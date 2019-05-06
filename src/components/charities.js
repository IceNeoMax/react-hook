import React, { useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import { GET_METHOD } from 'app/const';
import styled from 'styled-components';
import { handlePayment } from 'api/payments'
import { updateMessage, updateTotalDonate } from 'action';
import { connect } from 'react-redux';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;


const RenderCharities = (props) => {
  const [data, loading] = useFetch('/charities', GET_METHOD);
  const [amount, selectedAmount] = useState(0);
  const [paymentID, selectedPayment] = useState(null);
  const handlePay = (id, amount, currency) => {
    if (paymentID === id) {
      // TODO: handle error
      handlePayment(`{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`)
        .then(() => {
          props.updateTotalDonate(amount);
          props.updateMessage(`Thanks for donate ${amount}!`);
          setTimeout(() => {
            props.updateMessage('');
          }, 2000);
        });
    }
  }

  if (loading) return <div>Loading...</div>;
  if (!data) return null;
  const cards = data.map(function (item, i) {
    const payments = [10, 20, 50, 100, 500].map((pay, j) => (
      <label key={j}>
        <input
          type="radio"
          name="payment"
          onClick={() => {
            selectedAmount(pay)
            selectedPayment(item.id)
          }}
        /> {pay}
      </label>
    ));
    return (
      <Card key={i}>
        <p>{item.name}</p>
        {payments}
        <button onClick={() => handlePay(item.id, amount, item.currency)}>Pay</button>
      </Card>
    );
  })
  return (
    <div>
      {cards}
    </div>
  )
}

export default connect(null, { updateMessage, updateTotalDonate })(RenderCharities);
