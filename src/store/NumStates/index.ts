const store = {
  state: {
    num: 20
  },
  action: {
    add1: (newState: {num: number}) => {
      newState.num += 1;
    },
    add2: (newState: {num: number}, action: {type: string, val: number}) => {
      console.log("action", action);
      newState.num += action.val;
    },
    add3: (newState: {num: number}, action: {type: string, val: number}) => {
      newState.num += action.val;
    }
  },
  asyncAction: {
    asyncAdd1(dispatch: (action: { type: string }) => void) {
      setTimeout(() => {
        dispatch({ type: 'add1' });
      }, 1000);
    }
  },
  actionNames: {}
}
const actionNames = Object.keys(store.action).reduce((acc: {[key: string]: string}, key) => {
  acc[key] = key;
  return acc;
}, {});

console.log("actionNames", actionNames);
store.actionNames = actionNames

export default store;