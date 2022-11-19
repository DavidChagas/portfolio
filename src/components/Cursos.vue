<template>
    <div class="cursos">
        <div class="container">
            <div class="titulo">Cursos</div>
            <div class="descricao">Alguns cursos que fiz através da plataforma Alura.</div>
            
            <div class="grid-cursos">
                <div class="curso">
                    <img class="img-fluid" alt="Banner" src="../assets/check.png"> PHP 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img class="img-fluid" alt="Banner" src="../assets/check.png"> Laravel 
                </div>
                <div class="curso">
                    <img class="img-fluid" alt="Banner" src="../assets/check.png"> Node.js 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img class="img-fluid" alt="Banner" src="../assets/check.png"> TypeScript  
                </div>
                <div class="curso">
                    <img class="img-fluid" alt="Banner" src="../assets/certificate.png"> <a href="https://cursos.alura.com.br/user/davidmdchagas/fullCertificate/c142db629c7ed4a74a55884ecb0a2007" target="_blank">Acessar lista completa de cursos.</a>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    import apiAlura from "@/services/apiAlura";
    import { onMounted } from '@vue/runtime-core';

    export default {
        name: 'Cursos',
        setup(){
            const cursos = {top :'top'};
            const fetchCursos = () => apiAlura.get("api/dashboard/648b2e6ad48b5e1facc4d214b61a84dcc8f4f9cb3c2f14e9aca43bd1cc8819c3").then(res =>{
                console.log(res);
            })

            // onMounted(fetchCursos);

            return cursos;
        }
    }
</script>

<style lang="scss">
.cursos{
    padding: 50px 20px;

    background-color: #e1e1e1;
    color: $fundo-02;

    @media(min-width: 768px){
        padding: 80px 100px;
    }

    .titulo{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 30px;
    }

    .descricao{
        margin-bottom: 50px;
        font-size: 15px;   
    }

    .grid-cursos{
        .curso{
            display: flex;
            align-items: center;
            font-size: 13px;

            img{
                margin-right: 5px;
            }

            a{
                color: black;
                text-decoration: none;
                margin: 10px 0;
            }
        }
    }
}

</style>