<template>
    <footer>
        <the-navigate></the-navigate>
    </footer>
</template>

<script>
import TheNavigate from './Navs/TheFooterNavigation.vue';
export default {
    components:{
        TheNavigate
    }
}
</script>

<style scoped>
footer{
    display: flex;
    position: fixed;
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