import Vue from "vue";
import Vuex from "vuex";
import Api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    casesPerOneMillion: 0,
    deathsPerOneMillion: 0,
    tests: 0,
    chartDataCases: {},
    chartDeathsCases: {},
    chartRecoveredCases: {}
  },
  mutations: {
    processCovidData(state, covidData) {
      state.cases = covidData["cases"];
      state.todayCases = covidData["todayCases"];
      state.deaths = covidData["deaths"];
      state.todayDeaths = covidData["todayDeaths"];
      state.casesPerOneMillion = covidData["casesPerOneMillion"];
      state.deathsPerOneMillion = covidData["deathsPerOneMillion"];
      state.tests = covidData["tests"];
    },
    processCovidChartData(state, covidChartData) {
      state.chartDataCases = covidChartData["cases"];
      state.chartDeathsCases = covidChartData["deaths"];
      state.chartRecoveredCases = covidChartData["recovered"];
    }
  },
  actions: {
    retrieveCovidData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("/countries/NL?yesterday=true&twoDaysAgo=true")
          .then(response => {
            const covidData = response.data;
            context.commit("processCovidData", covidData);

            resolve(response);
          })
          .catch(error => {
            context.commit("apiError", error);
            reject(error);
          });
      });
    },
    retrieveCovidChartData(context) {
      return new Promise((resolve, reject) => {
        Api()
          .get("/historical/NL?lastdays=30")
          .then(response => {
            const covidChartData = response.data["timeline"];
            context.commit("processCovidChartData", covidChartData);

            resolve(response);
          })
          .catch(error => {
            context.commit("apiError", error);
            reject(error);
          });
      });
    }
  },
  getters: {
    cases: state => {
      return state.cases;
    },
    todayCases: state => {
      return state.todayCases;
    },
    deaths: state => {
      return state.deaths;
    },
    todayDeaths: state => {
      return state.todayDeaths;
    },
    casesPerOneMillion: state => {
      return state.casesPerOneMillion;
    },
    deathsPerOneMillion: state => {
      return state.deathsPerOneMillion;
    },
    tests: state => {
      return state.tests;
    },

    chartData: state => {
      const chartData = {
        labels: Object.keys(state.chartDataCases),
        datasets: [
          {
            label: "Besmettingen",
            backgroundColor: "#f3f7ff",
            data: Object.values(state.chartDataCases)
          },
          {
            label: "Doden",
            backgroundColor: "#f87979",
            data: Object.values(state.chartDeathsCases)
          },
          {
            label: "Genezen",
            backgroundColor: "#5d65ff",
            data: Object.values(state.chartRecoveredCases)
          }
        ]
      };
      return chartData;
    }
  }
});
