<template>
    <nav>
    <ul>
      <li v-for="item in footerItems" :key="item">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            footerItems:['Home','About','FAQ'],
        }
    },
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding: 0;
  margin:0;
  ;
}
li {
  padding: 1.2rem;
}
a {
  color: rgb(214, 0, 214);
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Roboto Condensed', sans-serif;
}
a:hover{
    color: white;
}
</style>