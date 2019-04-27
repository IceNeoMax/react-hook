import React from 'react';
import { useFetch } from './useFetch';
import { GET_METHOD, POST_METHOD } from './const';
import { connect } from 'react-redux';
import { summaryDonations } from './helpers';

const RenderToltalPayment = (props) => {
  const [data, loading] = useFetch('/payments', GET_METHOD);
  let donate = 0;
  if (loading) return <div>Loading...</div>;
  if (!data) return null;
  else {
    donate = summaryDonations(data.map((item) => (item.amount)))
    // props.dispatch({
    //   type: 'UPDATE_TOTAL_DONATE',
    //   amount
    // });
    // payment = summaryDonations(data.map((item) => (item.amount)))
  }
  return <div><p>All donations: {donate}</p></div>;
};
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(RenderToltalPayment);
