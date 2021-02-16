<template>
  <div class="statistics-div">
    <h4 class="heading-h4">{{ Title }}</h4>
    <span class="number-span mr-3">Totaal: {{ Total.toLocaleString() }}</span>
    <span class="number-span">Vandaag: {{ Today.toLocaleString() }}</span>
  </div>
</template>

<script>
export default {
  name: "StatisticsBlockDouble",
  props: {
    Title: String,
    Total: Number,
    Today: Number
  }
};
</script>
