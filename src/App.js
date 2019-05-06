import React from 'react';
import { connect } from 'react-redux';
import RenderToltalPayment from 'components/total-payment';
import RenderCharities from 'components/charities';

const App = (props) => {
  const style = {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };
  const message = props.message;
  return (
    <div>
      <h1>Tamboon React</h1>
      <RenderToltalPayment />
      <p style={style}>{message}</p>
      <RenderCharities />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    message: state.donation.message,
  }
}
export default connect(mapStateToProps)(App);


