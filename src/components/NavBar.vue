<template>
  <b-navbar type="light" sticky>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item class="navbar-link" to="/">Thuis</b-nav-item>
        <b-nav-item class="navbar-link" to="/about">Over</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>