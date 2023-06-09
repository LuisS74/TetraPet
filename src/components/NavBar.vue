<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">TetraPet</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Personal</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="/login">Iniciar Sesión</a></li>
                            <li><a class="dropdown-item" href="/registro">Registrarse</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default{
    name: "NavBar",
}
</script>

<style scoped>
.dropdown-menu-end {
    right: 0;
    left: auto;
}
</style>








