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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="mascota" v-for="(mascota, index) in mascotas" :key="mascota._id" :mascota="mascota">
          <td>{{ mascota.name }}</td>
          <td>{{ mascota.petrut }}</td>
          <td>{{ mascota.animal }}</td>
          <td>{{ mascota.race }}</td>
          <td>{{ mascota.chip ? 'Si' : 'No' }}</td>
          <button class="pedir-cita apretados">Pedir cita</button>
          <button class="editar apretados" data-bs-toggle="modal"
            @click="seleccionarMascota(mascota.name, mascota.petrut, mascota.animal, mascota.race, mascota.chip)"
            data-bs-target="#editPet">Editar</button>
          <div class="modal p-3 py-md-4" tabindex="-1" role="dialog" id="editPet">
            <div class="modal-dialog" role="document">
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  <h1 class="fw-bold mb-0 fs-2">Editar mascota</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-5 pt-0">
                  <!-- Formulario editar mascota -->
                  <form @submit.prevent="editarMascota()">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control rounded-3" v-model="name" placeholder="Nombre">
                      <label for="nombre">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control rounded-3" v-model="petrut" placeholder="Petrut">
                      <label for="petrut">Petrut</label>
                    </div>
                    <div class="form-floating mb-3">
                      <select class="form-select rounded-3" v-model="animal">
                        <option value="" selected disabled>Especie</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Otro">Otro</option>
                      </select>
                      <label for="especie">Especie</label>
                    </div>
                    <div class="form-floating mb-3" v-if="animal === 'Perro'">
                      <select class="form-select rounded-3" v-model="race">
                        <option value="" selected disabled>Raza</option>
                        <option value="Labrador Retriever">Labrador Retriever</option>
                        <option value="Bulldog">Bulldog</option>
                        <option value="Golden Retriever">Golden Retriever</option>
                        <option value="Otro">Otro</option>
                      </select>
                      <label for="raza">Raza</label>
                    </div>
                    <div class="form-floating mb-3" v-else-if="animal === 'Gato'">
                      <select class="form-select rounded-3" v-model="race">
                        <option value="" selected disabled>Raza</option>
                        <option value="Persa">Persa</option>
                        <option value="Siames">Siames</option>
                        <option value="Bengala">Bengala</option>
                        <option value="Otro">Otro</option>
                      </select>
                      <label for="raza">Raza</label>
                    </div>
                    <div class="form-floating mb-3" v-else>
                      <select class="form-select rounded-3" v-model="race">
                        <option value="" selected disabled>Raza</option>
                        <option value="Otro">Otro</option>
                      </select>
                      <label for="raza">Raza</label>
                    </div>
                    <div class="form-floating mb-3">
                      <select class="form-select rounded-3" v-model="chip">
                        <option value="" selected disabled>Chip</option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                      <label for="chip">Chip</label>
                    </div>
                    <br>
                    <button class="w-100 mb-2 btn btn-lg ver-detalles" type="submit">Editar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button class="eliminar apretados" @click="borrarMascota(index)">Eliminar</button>
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
            <!-- Formulario de registro de mascota -->
            <form @submit.prevent="registerPets">
              <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" v-model="name" placeholder="Nombre">
                <label for="nombre">Nombre</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" v-model="petrut" placeholder="Petrut">
                <label for="petrut">Petrut</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select rounded-3" v-model="animal">
                  <option value="" selected disabled>Especie</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Otro">Otro</option>
                </select>
                <label for="especie">Especie</label>
              </div>
              <div class="form-floating mb-3" v-if="animal === 'Perro'">
                <select class="form-select rounded-3" v-model="race">
                  <option value="" selected disabled>Raza</option>
                  <option value="Labrador Retriever">Labrador Retriever</option>
                  <option value="Bulldog">Bulldog</option>
                  <option value="Golden Retriever">Golden Retriever</option>
                  <option value="Otro">Otro</option>
                </select>
                <label for="raza">Raza</label>
              </div>
              <div class="form-floating mb-3" v-else-if="animal === 'Gato'">
                <select class="form-select rounded-3" v-model="race">
                  <option value="" selected disabled>Raza</option>
                  <option value="Persa">Persa</option>
                  <option value="Siames">Siames</option>
                  <option value="Bengala">Bengala</option>
                  <option value="Otro">Otro</option>
                </select>
                <label for="raza">Raza</label>
              </div>
              <div class="form-floating mb-3" v-else>
                <select class="form-select rounded-3" v-model="race">
                  <option value="" selected disabled>Raza</option>
                  <option value="Otro">Otro</option>
                </select>
                <label for="raza">Raza</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select rounded-3" v-model="chip">
                  <option value="" selected disabled>Chip</option>
                  <option value="true">Si</option>
                  <option value="false">No</option>
                </select>
                <label for="chip">Chip</label>
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
import { registerPet, updatePet, deletePet } from "@/services/pet.service.js";
import { listPets } from '@/services/user.service.js'

export default {
  name: "ClienteMascotasView",
  data() {
    return {
      mascotas: [],
      name: "",
      petrut: "",
      animal: "",
      race: "",
      chip: "",
    };
  },
  created() {
    this.obtenerMascotas();
  },
  methods: {
    registerPets() {
      const { name, petrut, animal, race, chip } = this;
      const chipValue = chip === "true";

      registerPet({ name, petrut, animal, race, chip: chipValue })
        .then((response) => {
          const pet = response.data;
          window.location.reload();
          return pet;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async obtenerMascotas() {
      const result = await listPets({ limit: 3, offset: 0 });
      this.mascotas = result;
    },
    borrarMascota(index) {
      const mascota = this.mascotas[index];
      const mascotaRut = mascota.petrut;

      deletePet(mascotaRut)
        .then((response) => {
          this.mascotas.splice(index, 1);
          return response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    seleccionarMascota(name, petrut, animal, race, chip) {
      this.name = name;
      this.petrut = petrut;
      this.animal = animal;
      this.race = race;
      this.chip = chip;
    },
    editarMascota() {
      const { name, petrut, animal, race, chip } = this;
      const chipValue = chip === "true";

      updatePet({
        petRut: petrut,
        name,
        petrut,
        animal,
        race,
        chip: chipValue,
      })
        .then((response) => {
          window.location.reload();
          return response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>


<style scoped>
.table-container {
  margin: 60px auto;
  max-width: 1200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

.pedir-cita {
  background-color: #225677;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.apretados {
  margin-right: 5px;
}

.editar {
  background-color: rgb(40, 129, 184);
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.eliminar {
  background-color: #a30000;
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

  
  