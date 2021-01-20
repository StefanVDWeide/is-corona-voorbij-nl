<template>
  <div id="app">
    <Navbar></Navbar>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
      >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style>
body {
  color: #1a1b37;
}

.navbar-link {
  font-size: 1.5rem;
}

.heading-div {
  text-align: center;
}

.heading-h1 {
  font-size: 3.5rem;
}

@media (min-width: 576px) {
  .heading-h1 {
    font-size: 5rem;
  }
}

.heading-h2 {
  font-size: 3.5rem;
  text-decoration: underline;
}

@media (min-width: 576px) {
  .heading-h2 {
    font-size: 5rem;
    text-decoration: underline;
  }
}

.page-section {
  margin-top: 5rem;
}

.heading-h3 {
  font-size: 2rem;
}

@media (min-width: 576px) {
  .heading-h3 {
    font-size: 3rem;
  }
}

.heading-h4 {
  font-size: 1.5rem;
}

@media (min-width: 576px) {
  .heading-h4 {
    font-size: 2rem;
  }
}

.number-span {
  font-size: 1.25rem;
}

@media (min-width: 576px) {
  .number-span {
    font-size: 2rem;
  }
}

.statistics-div {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f3f7ff;
  border-radius: 1rem;
}

@media (min-width: 992px) {
  .statistics-div {
    margin: 0rem;
    padding: 1rem;
    background-color: #f3f7ff;
    border-radius: 1rem;
  }
}

.statistics-row {
  margin-bottom: 0.5rem;
}

@media (min-width: 992px) {
  .statistics-row {
    margin-bottom: 2rem;
  }
}

.page-section-top {
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.highlight-statistics-div {
  background-color: #1a1b37;
  color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
