<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Header/>
  <Sidebar/>
  <RouterView class="map-container" id="main-container"/>
    
 
  
  <!-- <RouterLink to="/">Home</RouterLink>
   <RouterLink to="/about">About</RouterLink>
  <RouterView /> -->

</template>

<style scoped>
.map-container {
  border: solid 1px black;
    height: 500px;
    width: 880px;
    position: absolute;
    left: 270px;
    top: 110px;
    border-radius: 40px;
    padding: 30px;
    display: flex;
  }
</style>
