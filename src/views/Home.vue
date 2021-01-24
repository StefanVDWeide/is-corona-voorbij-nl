<template>
  <b-container>
    <section class="page-section-top">
      <b-row>
        <b-col>
          <div class="heading-div">
            <h1 class="heading-h1">Is Corona Voorbij?</h1>
            <h2 class="heading-h2">Nee<span>😷</span></h2>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">
              Hoe staan we er dan voor? 🤔
            </h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <StatisticsBlockDouble
            Title="Besmettingen"
            :Total="cases"
            :Today="todayCases"
          ></StatisticsBlockDouble>
        </b-col>
        <b-col cols="12" lg="6">
          <StatisticsBlockDouble
            Title="Doden"
            :Total="deaths"
            :Today="todayDeaths"
          ></StatisticsBlockDouble>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col cols="12" lg="6">
          <StatisticsBlockSingle
            ClassProp="statistics-div"
            Title="Besmettingen Per 1 Miljoen"
            :Total="casecasesPerOneMillions"
          ></StatisticsBlockSingle>
        </b-col>
        <b-col cols="12" lg="6">
          <StatisticsBlockSingle
            ClassProp="statistics-div"
            Title="Doden Per 1 Miljoen"
            :Total="deathsPerOneMillion"
          ></StatisticsBlockSingle>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="highlight-statistics-div">
            <h4 class="heading-h4">Het goede nieuws</h4>
            <b-row class="my-5">
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <StatisticsBlockSingle
                  ClassProp="highlight-statistics-inner-div"
                  Title="Aantal Testen 🔬"
                  :Total="castestses"
                ></StatisticsBlockSingle>
              </b-col>
              <b-col cols="12" lg="6" class="highlight-statistics-inner-column">
                <StatisticsBlockSingle
                  ClassProp="highlight-statistics-inner-div"
                  Title="Aantal Vaccinaties 💉"
                  :Total="vaccineTotal"
                ></StatisticsBlockSingle>
              </b-col>
            </b-row>
            <span class="number-span"
              >Laat je bij symptonen altijd testen! Ga voor meer informatie naar
              de website van het
              <b-link href="https://www.rivm.nl/" target="_blank"
                >RIVM</b-link
              ></span
            >
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">
              Hoe ziet het verloop eruit? 📈
            </h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div>
            <LineChart
              v-if="loaded"
              :chartdata="chartdata"
              :options="options"
            ></LineChart>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import StatisticsBlockDouble from "@/components/StatisticsBlockDouble.vue";
import StatisticsBlockSingle from "@/components/StatisticsBlockSingle.vue";
import LineChart from "@/components/Chart.vue";

export default {
  name: "Home",
  async created() {
    await this.retrieveData();
    this.cases = this.$store.getters.cases;
    this.todayCases = this.$store.getters.todayCases;
    this.deaths = this.$store.getters.deaths;
    this.todayDeaths = this.$store.getters.todayDeaths;
    this.casecasesPerOneMillions = this.$store.getters.casesPerOneMillion;
    this.deathsPerOneMillion = this.$store.getters.deathsPerOneMillion;
    this.castestses = this.$store.getters.tests;
    this.chartdata = this.$store.getters.chartData;
    this.vaccineTotal = this.$store.getters.covidVaccineDataTotal;
    this.loaded = true;
  },
  components: {
    LineChart,
    StatisticsBlockDouble,
    StatisticsBlockSingle
  },
  data() {
    return {
      loaded: false,
      cases: 0,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      casecasesPerOneMillions: 0,
      deathsPerOneMillion: 0,
      castestses: 0,
      vaccineTotal: 0,
      chartdata: {},
      options: {}
    };
  },
  methods: {
    async retrieveData() {
      await this.$store.dispatch("retrieveCovidData");
      await this.$store.dispatch("retrieveCovidChartData");
      await this.$store.dispatch("retrieveCovidVaccineData");
    }
  }
};
</script>
