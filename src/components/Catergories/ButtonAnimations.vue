<template>
  <div class="main-container animate__animated animate__fadeInLeftBig">
    
    <div class="animation-container">
      <base-button type="success" ref="btn-success">
        <template #button> {{role}} </template>
      </base-button>
    </div>
    <div class="animation-container">
      <base-button type="danger" ref="btn-danger">
        <template #button> </template>
      </base-button>
    </div>
    <div class="animation-container">
      <base-button type="info" ref="btn-info">
        <template #button></template>
      </base-button>
    </div>
     <div class="animation-container">
      <base-button type="dark" ref="btn-dark">
        <template #button> </template>
      </base-button>
    </div>
     <div class="animation-container">
      <base-button type="info" ref="btn-primary">
        <template #button> </template>
      </base-button>
    </div>
         <div class="animation-container">
      <base-button type="secondary" ref="btn-secondary">
        <template #button> </template>
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  computed: {
    fadeContainer() {
      return { "anim-container": true };
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to);
  //   next();
  // },
  methods: {},
  mounted() {
    
    for(let key in this.$refs){
      const btnElement = this.$refs[key].$el;
      btnElement.textContent = btnElement.getAttribute("class");
      // console.log(btnElement.getAttribute("class"));
      // btnElement.textContent = btnElement.getAttribute('type');
    }
    // console.log(this.$refs.keys);
    // if(this.$refs['btn-success'].type==='success'){
    //   this.role = 'success';
    //   this.$refs['btn-success'].$el.textContent = this.role;

    // }
  },
  // mounted(){
  //   const buttonElement = this.$refs;
  //   console.log(buttonElement);
  // }

};
</script>
<style scoped>
@import "../../assets/Styles/animation.css";
div.main-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
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
  margin-left: 1rem;
  margin-bottom: 1rem;
  background-color: rgb(27, 2, 97);
}
.router-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.router-enter-active {
  opacity: 1;
  transform: translateY(0px);
}
/* .anim-container{
    animation: fade-category 1s ease-in;

} */
h2#title{
  color:white;
  margin: 0;
}
</style>
