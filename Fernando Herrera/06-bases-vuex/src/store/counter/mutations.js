export const increment = (state) => {
  state.count++;
};

export const incrementBy = (state, val) => {
  state.count += val;
  state.lastRandomInt = val;
};

export const setLoading = (state, val) => {
  state.isLoading = val;
};
