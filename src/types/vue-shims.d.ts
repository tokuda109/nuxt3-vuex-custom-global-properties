import { type ComponentCustomProperties } from 'vue';
import { type Store } from 'vuex';
import { type RootState } from '~/store';

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  return Component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
