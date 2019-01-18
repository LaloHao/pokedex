// @flow
export type Navigation = {
  push: Function,
  goBack: Function,
  state: {
    routeName: String,
  },
};
