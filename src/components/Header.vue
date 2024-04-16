<template>
    <header>
      <div class="main-title">
        <h1 class="ihouse">iHouse</h1>
      </div>
      <div class="h3-weather">
        <img class="icon" :src="icon">
        <h3>{{climaData}}°C</h3>
        <h2>{{locationData}}</h2>
      </div>
     
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  data() {
    return {
      climaData:'',
      locationData:'',
      icon:''
    };
  },
  created() {


   
  },
  methods: {
    
  
  }
  }

  </script>
  
  <style scoped>
  .ihouse{
    font-weight: 700;
    font-family: var(--font);
  }
  header {
    width: 100%;
    background-color: #8D3188;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    border-radius: 0 80px 80px 0;
  }
  
  .main-title {
    font-size: 20px;
    color: white;
    width: 52%;
    text-align: right;
    
  }
  
  .h3-weather {
    text-align: right;
    width: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  h3{
    color: white;
    font-size: 14px;
    width: 70px;
    height: 30px;
  }
  h2{
    color: white;
    font-size: 14px;
    width: 150px;
    height: 30px;
  }

  </style>
  