<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>


<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Andada+Pro&family=Montserrat:ital@1&family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Andada+Pro&family=Montserrat:ital@1&family=Roboto&family=Roboto+Condensed&display=swap');


*{
  box-sizing: border-box;
}

body,html{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  height: 100%;
}
#app{
  height: 100%;
}
</style>