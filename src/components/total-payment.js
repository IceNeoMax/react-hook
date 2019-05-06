import React, { useEffect } from 'react';
import { useFetch } from 'hooks/useFetch';
import { GET_METHOD } from 'app/const';
import { summaryDonations } from 'app/helpers';
import { updateTotalDonate } from 'action';
import { connect } from 'react-redux';

const RenderToltalPayment = (props) => {
  const [data, loading] = useFetch('/payments', GET_METHOD);
  useEffect(() => {
    const donate = summaryDonations(data.map((item) => (item.amount)))
    props.updateTotalDonate(donate);
  }, [data]);
  if (loading) return <div>Loading...</div>;
  if (!data) return null;
  return <div><p>All donations: {props.donate}</p></div>;
};

const mapStateToProps = (state) => {
  return {
    donate: state.donation.donate,
  }
}

export default connect(mapStateToProps, { updateTotalDonate })(RenderToltalPayment);
