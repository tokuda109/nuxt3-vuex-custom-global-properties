<template>
  <p>count: {{ count }}</p>
  <button @click="incr">incr</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    count() {
      return this.$store.state.count.count;
    }
  },
  methods: {
    incr() {
      this.$store.commit('count/increment');
    },
  },
});
</script>
