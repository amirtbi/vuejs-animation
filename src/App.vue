<template>
  <header>
    <router-view name="header"></router-view>
  </header>
  <main class="main-parent">
    <router-view name="default"></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Andada+Pro&family=Montserrat:ital@1&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Andada+Pro&family=Montserrat:ital@1&family=Roboto&family=Roboto+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Andada+Pro&family=Montserrat:ital@0;1&family=Roboto&display=swap");

* {
  box-sizing: border-box;
}

body,
html {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  height: 100%;
}
header{
    width: 100vw;
    background-color: #2e2929;
    color: blueviolet;
    

}
#app {
  height: 100%;
}
main {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
footer{
    display: flex;
    position: relative;
    margin-top: calc(100% - 67.38px);
    bottom: 0;
    left: 0;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100vw;
    background-color: #2e2929;


}
</style>
