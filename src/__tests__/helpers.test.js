// helpers tests
import { summaryDonations } from 'helpers';

describe('helpers', function () {
  test('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });
});

// action tests
import * as actions from 'action';

const donation = 123;
const mess = 'ahihi';

describe('updateTotalDonate', function () {
  test('updateTotalDonate should update correctly', function () {
    const amount = donation;
    const expectedAction = {
      type: actions.UPDATE_TOTAL_DONATE,
      amount,
    }
    expect(actions.updateTotalDonate(amount)).toEqual(expectedAction);
  });
});

describe('updateMessage', function () {
  test('updateMessage should update correctly', function () {
    const message = mess;
    const expectedAction = {
      type: actions.UPDATE_MESSAGE,
      message,
    }
    expect(actions.updateTotalDonate(message)).toEqual(expectedAction);
  });
});

// reducer tests
