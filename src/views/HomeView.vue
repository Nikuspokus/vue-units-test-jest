<template>
  <main>
    <div style="justify-content: center">
      <CounterBox :multiplier="0" />
    </div>
  </main>
</template>

<script setup>
import CounterBox from "../components/CounterBox.vue";
</script>

<style>
div {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
