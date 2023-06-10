<template>
  <div class="table-container">
    <table class="mascotas-lista">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre de la mascota</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Fecha de nacimiento</th>
          <th>Dueño de la mascota</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="mascota" v-for="mascota in mascotas" :key="mascota.id">
          <td>{{ mascota.id }}</td>
          <td>{{ mascota.nombre }}</td>
          <td>{{ mascota.especie }}</td>
          <td>{{ mascota.raza }}</td>
          <td>{{ mascota.fechaNacimiento }}</td>
          <td>{{ mascota.dueno }}</td>
          <td><button class="ver-detalles">Ver detalles</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdminMascotasView",
  data() {
    return {
      mascotas: [
        {
          id: 1,
          nombre: "Riñoberto",
          especie: "Canino",
          raza: "Chihuahua",
          fechaNacimiento: "05/05/2017",
          dueno: "Juan Pérez"
        },
        {
          id: 2,
          nombre: "Anastacio",
          especie: "Felino",
          raza: "No Sabe",
          fechaNacimiento: "10/10/2019",
          dueno: "María García"
        }
      ]
    };
  }
};
</script>

<style scoped>
.table-container {
  margin: 60px auto;
  max-width: 1200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Agrega una sombra suave */
}

.mascotas-lista {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: linear-gradient(45deg, #f0f0f0, #ffffff); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.mascotas-lista th,
.mascotas-lista td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.mascota {
  transition: background-color 0.3s;
}

.mascota:hover {
  background-color: #f5f5f5;
}

.ver-detalles {
  background-color: #225677;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.ver-detalles:hover {
  background-color: #133043;
}
</style>

  
  