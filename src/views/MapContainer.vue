<template>
  
    <section class="map-container" id="main-container">
      <div class="map">
        <RouterLink to="/cocina" id="cocina">Cocina</RouterLink>
        <RouterLink to="/sala" id="sala">Sala</RouterLink>
        <RouterLink to="/garage" id="garage">Garage</RouterLink>
        <RouterLink to="/bano1" id="bano1">Baño 1</RouterLink>
        <RouterLink to="/bano2" id="bano2">Baño 2</RouterLink>
        <RouterLink to="/habitacion1" id="habitacion1">Habitacion 1</RouterLink>
        <RouterLink to="/habitacion2" id="habitacion2">Habitacion 2</RouterLink>
        <RouterLink to="/habitacion3" id="habitacion3">Habitacion 3</RouterLink>
        
        
      </div>
    </section>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'MapContainer',
  data() {
    return {
      humedadData:''
    };
  },
  // created() {
  //   // Realizar la solicitud Fetch periódicamente
  //   setInterval(this.fetchData, 50000); // Cada 5 segundos
  // },
  // methods: {
  //   fetchData() {
  //     fetch('https://back-integradora-production.up.railway.app/consults/room1/temperature')
  //       .then(response => response.json())
  //       .then(data => {
  //         // Actualizar los datos
  //         this.humedadData=data.Humedad;
  //         console.log(data.Humedad)
  //       })
  //       .catch(error => {
  //         console.error('Error al obtener datos:', error);
  //       });
  //   }
  // },
  components: {
    RouterLink
  }
};

  </script>
  
  <style scoped>
  .map-container {
    border: solid 1px black;
    height: 550px;
    width: 1000px;
    position: absolute;
    left: 400px;
    top: 120px;
    border-radius: 40px;
    padding: 40px;
    display: flex;
  }
  
  .map {
    display: grid;
    border: solid 12px black;
    width: 100%;
    height: 100%;
    grid-template-areas:
      "a a b b c c"
      "a a b b c c"
      "d d b b e e"
      "d d b b e e "
      "f f g g h h"
      "f f g g h h";
    grid-template-rows: auto;
    grid-template-columns: auto;
    gap: 5px;
  }
  
  .map > #cocina {
    grid-area: a;
    background-color: var(--bluesky);
    background-image: url(../assets/iconos_casa/cocina.png);
    background-size: contain;
  }
    
  
  .map > #sala {
    grid-area: b;
    background-color: var(--darkblue);
    background-image: url(../assets/iconos_casa/sala.png);
    background-size: cover;
  }
  
  .map > #cochera {
    grid-area: c;
    background-color:var(--darkpurple);
    background-image: url(../assets/iconos_casa/garage.png);
    background-size: cover;
  }
  
  .map > #bano1 {
    grid-area: d;
    background-color: var(--darkpurple);
    background-image: url(../assets/iconos_casa/bano1.png);
    background-size: cover;
  }
  .map > #bano2 {
    grid-area: e;
   
    background-color: var(--pink);
    background-image: url(../assets/iconos_casa/bano2.png);
    background-size: cover;
  }
  .map > #habitacion1 {
    grid-area: f;
    background-color:#fcf2f7;
    background-image: url(../assets/iconos_casa/hab1.png);
    background-size: contain;
    background-repeat: no-repeat

  }
  .map > #habitacion2 {
    grid-area: g;
    background-color:#cab8da;
    background-image: url(../assets/iconos_casa/hab2.png);
    background-size: contain;
    background-repeat: no-repeat
  }
  .map > #habitacion3 {
    grid-area: h;
    background-color: white ;
    background-image: url(../assets/iconos_casa/hab3.png);
    background-size: contain;
    background-repeat: no-repeat
  }
  #cocina, #sala, #cochera, #bano1, #bano2, #habitacion1, #habitacion2, #habitacion3{
    display: flex;
    place-items: center;
    justify-content: center;
    color: white;
    font-size: 35px;
    font-weight: 500;
    

  }
  </style>
  