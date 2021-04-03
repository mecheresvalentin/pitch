<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Regular';
  src: url('./assets/fonts/Regular.woff2');
}
@font-face {
  font-family: 'Bold';
  src: url('./assets/fonts/Bold.woff');
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Regular';
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050;
}
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px
}
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
.d-flex {
  display: flex;
}
.img-fluid {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
