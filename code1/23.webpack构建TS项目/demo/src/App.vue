<template>
  <div>123</div>
  <div>{{ x }}</div>
  <div>{{ monent().format("YYYY-MM-DD") }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import monent from "moment";

const x = ref<number>(456);
</script>

<style lang="less">
@bgc: #bfa;
div {
  background-color: @bgc;
}
</style>
