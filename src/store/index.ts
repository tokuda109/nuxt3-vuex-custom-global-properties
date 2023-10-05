import { createStore } from 'vuex';
import * as count from './modules/count';

export interface RootState {
  count: count.State;
}

export const store = createStore<RootState>({
  modules: {
    count: count.countModule,
  },
});
