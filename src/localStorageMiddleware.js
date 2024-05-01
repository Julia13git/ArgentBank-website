export const localStorageMiddleware = store => next => action => {
    const result = next(action);
  
    // Save the Redux state to localStorage after every action
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    return result;
  };