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

      this.fetchData();
   
  },
  methods: {
    fetchData(){
      fetch('....https://open-weather13.p.rapidapi.com/city/latlon/20.27602328161253/-97.95958440902079', {
        headers: {
          'X-RapidAPI-Key': '61136b56e6msh332c900aa456d82p199c02jsn40f3d2cf2402',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        },
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
         
          this.climaData= (data.main.temp - 273).toFixed(1).replace(/\.0+$/,'');
          this.locationData=data.name;
          let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
          this.icon = iconurl; 
        
          console.log(data.name)
          console.log(data.weather[0].icon)
          
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    }
  
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
  