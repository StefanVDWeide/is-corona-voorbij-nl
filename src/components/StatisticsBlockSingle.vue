<template>
  <div :class="ClassProp">
    <h4 class="heading-h4">{{ Title }}</h4>
    <span class="number-span">Totaal: {{ Total.toLocaleString() }}</span>
  </div>
</template>

<script>
export default {
  name: "StatisticsBlockSingle",
  props: {
    ClassProp: String,
    Title: String,
    Total: Number
  }
};
</script>
