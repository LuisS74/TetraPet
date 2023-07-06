<template>
    <form class="form" @submit.prevent="registerUser">
        <h1 class="titulo">Registrarse</h1>
        <input class="cajas" type="text" placeholder="Nombre" required maxlength="30" v-model="name">
        <input class="cajas" type="email" placeholder="Email" required maxlength="30" v-model="email">
        <input class="cajas" type="text" placeholder="DNI" required maxlength="30" v-model="dni">
        <input class="cajas" type="password" placeholder="Password" required maxlength="30" v-model="password">
        <p class="termino1"><input type="checkbox"> Estoy de acuerdo con <a class="termino2" href="">Terminos y
                Condiciones</a></p>
        <input type="submit" class="btn" value="REGISTRAR">
        <p class="tengo-cuenta"><a href="/login/" class="tengo-cuenta">Ya tengo cuenta</a></p>

    </form>
</template>

<script>
import { register } from '../services/auth.service.js';

export default {
    name: "RegistroView",
    data() {
        return {
            name: "",
            email: "",
            dni: "",
            password: "",
        };
    },
    methods: {
        registerUser() {
            const { name, email, dni, password } = this;
            register({ name, email, dni, password })
                .then(response => {
                    const user = response.data;
                    this.$router.push('/login');
                    return user;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open sans';
}

.form {
    background-image: url('../assets/img/registro.webp');
    background-size: cover;
    width: 450px;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 5px;
}

.titulo {
    color: #1d4169;
    margin-bottom: 20px;
}

.cajas {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 2px;
    border: none;
    border-left: 10px solid #d9e4ea;
    transition: all .5s ease;
}

.cajas:hover,
.cajas:focus {
    border-left: 10px solid #1a4c7e;
}

.termino1 {
    text-align: center;
    color: #3b3b3b;
}

.termino2 {
    color: #000000;
    text-decoration: none;
    font-weight: bold;
}

.termino2:hover {
    color: #dbdbdb;
}

.btn {
    width: 100%;
    padding: 15px;
    border-radius: 2px;
    border: none;
    margin: 20px 0;
    font-size: 15px;
    background: #225677;
    color: white;
    cursor: pointer;
    transition: all .5s ease;
}

.btn:hover {
    background: #133043;
}

.tengo-cuenta {
    text-align: center;
    color: #000000;
    font-weight: bold;
    text-decoration: none;
}

.tengo-cuenta:hover {
    color: #dbdbdb;
}
</style>