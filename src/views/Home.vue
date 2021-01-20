<template>
  <b-container>
    <h1 class="h1-heading">Is Corna Al Voorbij?</h1>
    <h2 class="h2-heading">Nee 😷</h2>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$store.dispatch("retrieveCovidData");
  }
};
</script>
