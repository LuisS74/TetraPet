<template>
  <div class="table-container">
    <table class="mascotas-lista">
      <thead>
        <tr>
          <th>Nombre de la mascota</th>
          <th>Petrut</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Chip</th>
          <th>Correo Dueño</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="mascota" v-for="mascota in mascotas" :key="mascota._id" :mascota="mascota">
          <td>{{ mascota.name }}</td>
          <td>{{ mascota.petrut }}</td>
          <td>{{ mascota.animal }}</td>
          <td>{{ mascota.race }}</td>
          <td>{{ mascota.chip ? 'Si' : 'No' }}</td>
          <td>{{ mascota.owner }}</td>
          <td><button class="ver-detalles">Ver detalles</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { listAllPets } from '../services/user.service.js';

export default {
  name: "AdminMascotasView",
  data() {
    return {
      mascotas: []
    };
  },
  created() {
    this.obtenerMascotas();
  },
  methods: {
    async obtenerMascotas() {
      const result = await listAllPets({ limit: 3, offset: 0 });
      this.mascotas = result;
    }
  }
};
</script>

<style scoped>
.table-container {
  margin: 60px auto;
  max-width: 1200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* Agrega una sombra suave */
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

  
  