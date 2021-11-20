<template>
  <nav>
    <ul>
      <li>
        <router-link to="/home">HOME</router-link>
      </li>
      <li>
        <router-link to="/about">ABOUT</router-link>
      </li>
       <li>
        <router-link to="/faq">FAQ</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      homeItems: ["HOME","AboutUs"],
    };
  },
  computed:{

  }
  
};
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
