<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Header/>
  <Sidebar/>
  <RouterView class="map-container" id="main-container"/>
</template>

<style>
#main-container {

    height: 500px;
    width: 880px;
    position: absolute;
    left: 400px;
    top: 110px;
    border-radius: 40px;
    padding: 30px;
    display: flex;
  }
</style>
