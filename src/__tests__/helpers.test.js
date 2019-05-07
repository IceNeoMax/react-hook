// TODO: fix absolute import

// helpers tests
import { summaryDonations } from '../helpers';

describe('helpers', function () {
  test('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });
});

// redux tests
import * as action from '../action';
import donation from '../reducer/donation';

const donate = 123;
const mess = 'ahihi';

describe('updateTotalDonate', () => {
  test('should return the initial state', () => {
    expect(donation(undefined, {})).toEqual({ donate: 0, message: '' });
  });

  test('updateTotalDonate should update correctly', () => {
    const amount = donate;
    const expectedAction = {
      type: action.UPDATE_TOTAL_DONATE,
      amount,
    }
    expect(action.updateTotalDonate(amount)).toEqual(expectedAction);
    expect(donation({ donate: 0 }, expectedAction)).toEqual({ donate: amount });
  });
});

describe('updateMessage', () => {
  test('updateMessage should update correctly', () => {
    const message = mess;
    const expectedAction = {
      type: action.UPDATE_MESSAGE,
      message,
    }
    expect(action.updateMessage(message)).toEqual(expectedAction);
    expect(donation({ message: '' }, expectedAction)).toEqual({ message });
  });
});
