<template>
    <header>
       <the-navigate></the-navigate>
    </header>
</template>

<script>
import TheNavigate from './Navs/TheHeaderNaviagtion.vue';
export default {
    components:{
        TheNavigate
    }
    
}
</script>

<style scoped>
header{
    width: 100vw;
    background-color: #2e2929;
    color: blueviolet;
    

}
</style>