import React, { useReducer } from 'react';
import { useFetch } from 'hooks/useFetch';
import { GET_METHOD } from 'app/const';
import { handlePayment } from 'api/payments'
import { updateMessage, updateTotalDonate } from 'action';
import { connect } from 'react-redux';
import { Card, Button, Image, ImageWrapper, Wrapper, TitleWrapper, Blur, CloseButton } from 'components/styled-components';

function reducer(currentState, newState) {
  return { ...currentState, ...newState }
}

const RenderCharities = (props) => {
  const [data, loading] = useFetch('/charities', GET_METHOD);
  const [{ amount, paymentID, donateID }, dispatch] = useReducer(reducer, { amount: 0, paymentID: null, donateID: null });

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
            dispatch({ amount: pay, paymentID: item.id })
          }}
        /> {pay}
      </label>
    ));
    return (
      <Card key={i}>
        {donateID === item.id && <Blur>
          <CloseButton onClick={() => dispatch({ donateID: null })}>&#215;</CloseButton>
          <div> Select the amount to donate (USD) </div>
          <div> {payments} </div>
          <Button onClick={() => handlePay(item.id, amount, item.currency)}>Pay</Button>
        </Blur>}
        <div>
          <ImageWrapper>
            <Image src={`images/${item.image}`}></Image>
          </ImageWrapper>
          <TitleWrapper>
            <p>{item.name}</p>
            <Button onClick={() => dispatch({ donateID: item.id })}>Donate</Button>
          </TitleWrapper>
        </div>
      </Card>
    );
  })
  return (
    <Wrapper>
      {cards}
    </Wrapper>
  )
}

export default connect(null, { updateMessage, updateTotalDonate })(RenderCharities);
