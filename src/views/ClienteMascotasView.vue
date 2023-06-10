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
          <td><button class="ver-detalles">Pedir cita</button></td>
        </tr>
      </tbody>
    </table>

    

  </div>

  <div>
    <br>

    <button type="button" class="ver-detalles" data-bs-toggle="modal" data-bs-target="#regPet">
      Registrar mascota
    </button>

    <div class="modal p-3 py-md-4" tabindex="-1" role="dialog" id="regPet">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">Registrar mascota</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="Cachupin">
            <label for="floatingInput">Nombre</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="Perro">
            <label for="floatingInput">Especie</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="Pastor alemán">
            <label for="floatingInput">Raza</label>
          </div>
          <div class="form-floating mb-3">
            <input type="date" class="form-control rounded-3" id="floatingInput" placeholder="Pastor alemán">
            <label for="floatingInput">Fecha de Nacimiento</label>
          </div>
          <br>
          <button class="w-100 mb-2 btn btn-lg ver-detalles" type="submit">Registrar</button>
          
        </form>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "ClienteMascotasView",
  data() {
    return {
      mascotas: [
        {
          id: 1,
          nombre: "Riñoberto",
          especie: "Canino",
          raza: "Chihuahua",
          fechaNacimiento: "05/05/2017"
        },
        {
          id: 2,
          nombre: "Anastacio",
          especie: "Felino",
          raza: "No Sabe",
          fechaNacimiento: "10/10/2019"
        }
      ],
    }
  }
}
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

  
  