<template>


  <div class="main-container" >
    <div class="animation-container">
      <button>Hove Me!</button>
    </div>
  </div>

</template>


<script>
export default {
  
    data() {
        return {
           
        }
    },
    
    computed:{
        fadeContainer(){
            return {'anim-container':true}
        },
      
    },
    beforeRouteEnter (to, from, next) {
      console.log(to);
      next();
    },
    methods:{
      
      }
    
}
</script>
<style scoped>
div.main-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  padding: 2rem;
  background-color: #1d1d1d;
}
div.animation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: cyan;
}
button {
  background-color: cyan;
  color: black;
  border: 1px solid black;
  padding: 1rem 2rem;
}
.router-enter-from{
    opacity: 0;
    transform: translateY(-50px);
}
.router-enter-active{
    opacity: 1;
    transform: translateY(0px);
    }
/* .anim-container{
    animation: fade-category 1s ease-in;

} */


</style>
