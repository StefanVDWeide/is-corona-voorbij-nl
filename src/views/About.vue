<template>
  <b-container>
    <section class="page-section">
      <b-row class="statistics-row">
        <b-col>
          <div class="section-heading-div">
            <h3 class="heading-h3">
              Over Dit Project
            </h3>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="statistics-div">
            <h4 class="heading-h4">Waar komt de data vandaan?</h4>
            <span class="number-span mr-3">
              De data die op de thuis pagina te zien is komt van
              <b-link
                href="https://www.worldometers.info/coronavirus/"
                target="_blank"
                >Worldometers</b-link
              >
              en
              <b-link href="https://www.jhu.edu/" target="_blank"
                >Johns Hopkins University</b-link
              >. Beide verzameld via de
              <b-link href="https://github.com/disease-sh/API" target="_blank"
                >disease.sh API</b-link
              >
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="statistics-div">
            <h4 class="heading-h4">Waarom heb je deze website gemaakt?</h4>
            <span class="number-span mr-3">
              De domeinnaam was nog beschikbaar.
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row class="statistics-row">
        <b-col>
          <div class="statistics-div">
            <h4 class="heading-h4">
              Waar kan ik de code voor de website zien?
            </h4>
            <span class="number-span mr-3">
              Hier:
              <b-link
                href="https://github.com/StefanVDWeide/is-corona-voorbij-nl"
                target="_blank"
                >Github</b-link
              >
            </span>
          </div>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
export default {
  name: "About"
};
</script>
