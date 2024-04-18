<template>
  <div class="main-container-data">
    <div class="container-title-room2">
      <div class="home">
        <RouterLink to="/" id="main"
          ><img
            style="width: 50px; border-radius: 100%"
            src="../assets/izquierda.png"
            alt=""
        /></RouterLink>
      </div>
      <h1 class="title-room2">Habitacion 2</h1>
    </div>

    <div class="card-data">
      <h2 class="controles">Status</h2>
      <div class="inside-card">
        <img class="img-control" src="../assets/images/image 1.png" />
        <h3 id="temperatura">Temperatura: {{ temperaturaData }}°C</h3>
      </div>

      <div class="inside-card">
        <img class="img-control" src="../assets/images/image 2.png" />
        <h3 id="humedad">Humedad: {{ humedadData }}%</h3>
      </div>

      <div class="inside-card">
        <img
          class="img-control"
          src="../assets/images/luz-inteligente.png"
        />
        <h3>Luz Interior</h3>
        <form action="">
          <label class="switch">
            <input type="checkbox" v-model="lightStatus" @change="onLight" />
            <span class="slider round"></span>
          </label>
        </form>
      </div>


      

      <div class="inside-card">
        <img
          class="img-control"
          src="../assets/images/puerta.png"
        />
        <h3>Puerta</h3>
        <form action="">
          <label class="switch">
            <input type="checkbox" v-model="doorStatus" @change="openDoor" />
            <span class="slider round"></span>
          </label>
        </form>
      </div>

      <div class="inside-card">
        <img
          class="img-control"
          src="../assets/images/cortina-inteligente.png"
        />
        <h3>Ventana</h3>
        <form action="">
          <label class="switch">
            <input type="checkbox" v-model="windowStatus" @change="openWindow" />
            <span class="slider round"></span>
          </label>
        </form>
      </div>

     

      
    </div>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container-title-room2{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/iconos_casa/hab2.png);
  background-size: cover;


  border-radius: 20px;
}
.main-container-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 3%;
}
.home {
  position: absolute;
  top: 30px;
  left: 35px;
}

.title-room2 {
  color: black;
  text-shadow: 2px 2px 5px white;
  padding: 20px;
  font-weight: 700;
  font-size: 45px;
  background-color: #cab8da;
}

.controles {
  color: black;
  margin: 0;
  padding: 0;
  font-weight: 700;
}
.card-data {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  border: solid 3px #8d3188;
  text-align: center;
  gap: 20px;
  border-radius: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: center;
}

.inside-card {
  margin: 0;
  display: flex;
  align-content: stretch;
  color: black;
}
.img-control{
  height: 35px;
  width: 35px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2b4964;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2b4964;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Hab2View",
  data() {
    return {
      humedadData: "",
      temperaturaData: "",
      gasData:"",
      windowStatus: false,
      doorStatus: false,
      fanStatus:false,
      lightStatus:false
    };
  },
  created() {
    this.fetchData();
  },
  mounted(){
    setInterval(this.fetchWindowStatus, 10000);
    setInterval(this.fetchDoorStatus, 10000);
    setInterval(this.fetchFanStatus, 10000);
    setInterval(this.fetchLightStatus, 10000);
  },
  methods: {
    fetchData() {
  fetch(
    "http://192.168.0.128:3000/consults/room2/temperature"
  )
    .then((response) => response.json())
    .then((data) => {
      this.humedadData = data[0].Humedad;
      this.temperaturaData = data[0].Temperatura;
      console.log(data);
      console.log(data.temperatura);
    })
    .catch((error) => {
      console.error("Error al obtener datos Humedad y Temperatura:", error);
    });
},


fetchWindowStatus(){
  fetch("http://192.168.0.128:3000/consults/room2/window")
    .then((response) => response.json())
    .then((data) => {
      this.windowStatus = data[0].isOpened;
    })
    .catch((error) => {
      console.error("Error fetchWindowStatus():", error);
    });
},
fetchFanStatus(){
  fetch("http://192.168.0.128:3000/consults/room2/fan")
    .then((response) => response.json())
    .then((data) => {
      this.fanStatus = data[0].isOn;
    })
    .catch((error) => {
      console.error("Error fetchFanStatus:", error);
    });
},
fetchDoorStatus(){
  fetch("http://192.168.0.128:3000/consults/room2/door")
    .then((response) => response.json())
    .then((data) => {
      this.doorStatus = data[0].isOpened;
    })
    .catch((error) => {
      console.error("Error fetchDoorStatus:", error);
    });
},
fetchLightStatus(){
  fetch("http://192.168.0.128:3000/consults/room2/internal-light")
    .then((response) => response.json())
    .then((data) => {
      this.lightStatus = data[0].isOn;
    })
    .catch((error) => {
      console.error("Error fetchLightStatus:", error);
    });
},
onLight() {
  fetch("http://192.168.0.122:3000/action/room2/ligth")
    .then((response) => 
    console.log(response.json()))
    .catch((error) => {
      console.error("Error onLight():", error);
    });
    },
  openDoor() {
  fetch("http://192.168.0.122:3000/action/room2/openDoor")
    .then((response) => 
    console.log(response.json()))
    .catch((error) => {
      console.error("Error openDoor():", error);
    });
    },
  openWindow() {
  fetch("http://192.168.0.122:3000/action/room2/openWindow")
    .then((response) => 
    console.log(response.json()))
    .catch((error) => {
      console.error("Error openWindow():", error);
    });
    },
  },
  components: {
    RouterLink,
  },
};
</script>
