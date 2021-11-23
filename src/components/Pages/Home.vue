<template>
  <section class="main-parent__categories">
    <base-card v-for="effect in effects" :key="effect.id">
      <template #content>
        <div class="image-container" :style="setBackgroundImage">
          <!--over layer text -->
          <p id="text-over">Css Animation</p>
        </div>
        <!--content container-->
        <div class="content-container">
          <h4 class="content-container__title">
            {{ effect.title }}
          </h4>
          <p class="content-container__description">
            {{ effect.description }}
          </p>
        </div>
        <!--navigation link to category route -->
        <div class="route-container">
          <router-link :to="routeLink">Go To Category</router-link>
        </div>
      </template>
    </base-card>
  </section>

  <router-view v-slot="slotProps">
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      effects: [
        {
          id: new Date().toISOString(),
          image: "imageCover3.png",
          title: "some button animation",
          description: "lots of css animation effect for buttons",
          subPageName: "buttons-category",
        },
        {
          id: new Date().toString(),
          image: "imageCover2.jpg",
          title: "transition 3D",
          description: "lots of css animation effect for buttons",
          subPageName: "buttons-category",
        },
      ],
    };
  },
  provide() {
    return {
      showCategory: this.show,
    };
  },
  methods: {
    togglePage(url) {
      console.log(url);
      this.show = true;
    },
  },
  computed: {
    routeLink() {
      return {
        name: "buttons-category",
      };
    },
    setBackgroundImage() {
      return {
        "background-image":
          "url(" + require(`../../assets/images/imageCover3.png`) + ")",
      };
    },
  },
};
</script>

<style scoped>
.main-parent__categories {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
}
div.image-container {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 350px;
  height: 200px;
  background: linear-gradient(#fff0, #fff0 45%, #1d1d1d 100%);
  background-size: cover;
  background-position: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-origin: border-box;
}
div.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  background-color: #1c1210;
  color: white;
  width: 100%;
}

h4 {
  padding: 0.5rem 1rem;
  color: rgb(224, 10, 171);
  margin: 0;
}
button {
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
p#text-over {
  text-transform: capitalize;
  position: absolute;
  z-index: 2;
  font-size: 2rem;
  color: white;
  top: 15%;
}
p.content-container__description {
  font-size: 1.2rem;
  color: white;
  padding: 1rem 0.5rem 3rem 0.5rem;
  margin: 0;
}
div.route-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
a {
  color: white;
  background-color: purple;
  padding: 1rem;
  text-decoration: none;
  transition: all 0.5s ease-in;
  width: 100%;
}
/*-------------------*/
/* routes animation */
.route-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.route-enter-active {
  transition: all 0.5s ease-in;
}
.route-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
