<template>
    <aside class="navbar">
      <div class="profile">
                <img src="../assets/iconos_casa/usuario (1).png" alt="imagen de usuario" class="user-img">
                <h3>Usuario</h3>
            </div>
            <div class="list-container">
                <ul class="list"> 
                    <li><img src="../assets/iconos_casa/partes de la casa-10.png"  alt="" style="height:50px; width:auto;" > <RouterLink to="/sala" id="sala">Sala</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-09.png" alt="" style="height:50px; width:auto;"><RouterLink to="/cocina" id="cocina">Cocina</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-12.png" alt="" style="height:50px; width:auto;"><RouterLink to="/habitacion1" id="habitacion1">Habitacion 1</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-12.png" alt="" style="height:50px; width:auto;"><RouterLink to="/habitacion2" id="habitacion2">Habitacion 2</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-12.png" alt="" style="height:50px; width:auto;"><RouterLink to="/habitacion3" id="habitacion3">Habitacion 3</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-11.png" alt="" style="height:50px; width:auto;"><RouterLink to="/garage" id="garage">Garage</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-13.png" alt="" style="height:50px; width:auto;"><RouterLink to="/bano1" id="bano1">Baño 1</RouterLink></li>
                    <li><img src="../assets/iconos_casa/partes de la casa-13.png" alt="" style="height:50px; width:auto;"><RouterLink to="/bano2" id="bano2">Baño 2</RouterLink></li>
                    <li><img src="../assets/iconos_casa/graphIcon.png" alt="" style="height:50px; width:auto;"><RouterLink to="/actuadores" id="actuadores">Actuadores</RouterLink></li>
                    <li><img src="../assets/iconos_casa/graphIcon.png" alt="" style="height:50px; width:auto;"><RouterLink to="/sensores-actuadores" id="sensores-actuadores">Sensores y Actuadores</RouterLink></li>
                </ul>
            </div>
    </aside>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  export default {
    
    name: 'Sidebar'
  }
  </script>
  
  <style scoped>
  .navbar {
    width: 15%;
    height: 88%;
    position: absolute;
    background-color: white;
    border: solid 1px black;
    top: 51px;
    left: 30px;
    border-radius: 15px;
  }
  
  .profile{
    height: 70px;
    border: solid 1px black;
    width: 100%;
    border-radius: 15px 15px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.list{
    padding: 10px;
    font-size: 18px;
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
}
a{
    text-decoration: none;
}
.user-img{
    height: 38px;
    width: auto;
    border-radius: 100%;
    border: solid 1px var(--darkpurple);
}
li{
   display: flex;

   align-items: center;
    gap: 15px;
  }
  h3{
    color: black;
  }
  </style>
  