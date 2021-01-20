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
    recovered: 0,
    todayRecovered: 0,
    active: 0,
    critical: 0,
    casesPerOneMillion: 0,
    deathsPerOneMillion: 0,
    tests: 0,
    testsPerOneMillion: 0,
    activePerOneMillion: 0,
    recoveredPerOneMillion: 0,
    criticalPerOneMillion: 0
  },
  mutations: {
    processCovidData(state, covidData) {
      state.cases = covidData["cases"];
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
    }
  },
  getters: {}
});
