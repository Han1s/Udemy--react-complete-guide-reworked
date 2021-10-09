import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

export const INCREMENT = 'increment';

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    // always copy and output news objects, never mutate the old ones
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  } else if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  } else if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  } else if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  } else {
    return state
  }
};

const store = createStore(counterReducer);

export default store;