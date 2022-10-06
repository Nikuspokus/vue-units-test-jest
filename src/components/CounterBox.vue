<template>
  <div>
    <div style="justify-content: center">
      <span>{{ multiplierCount }}</span>
    </div>
    <button @click="increment">Increments</button
    ><button @click="decrement">Decrements</button
    ><button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    multiplier: { type: Number, default: 1 },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
  computed: {
    multiplierCount: function () {
      return this.count + this.multiplier;
    },
  },
};
</script>

<style>
div {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
