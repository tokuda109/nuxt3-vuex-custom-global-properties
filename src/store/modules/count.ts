import { type Module } from 'vuex';
import { type RootState } from '~/store';

export interface State {
  count: number;
}

export const countModule: Module<State, RootState> = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
};
