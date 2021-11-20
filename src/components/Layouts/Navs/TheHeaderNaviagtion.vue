<template>
  <nav>
    <ul>
      <li v-for="item in dropDownItems " :key="item.title">
        <router-link :to="item.route">{{item.title}}</router-link>
      </li>
      
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropDownItems:[
        {title:'Home',route:'/home'},
        {title:'About', route:'/about'},
        {title:'Faq',route:'/faq'}
      ]
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
