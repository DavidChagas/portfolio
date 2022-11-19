<template>
    <div class="banner">
        <!-- <img class="img-fluid d-none d-lg-block" alt="Banner" src="../assets/banner.jpg"> -->
        <div class="lamina"></div>
        <div class="eu">
            <!-- <div class="foto"></div> -->
            <div class="nome">David Chagas</div>
            <div class="descricao-banner">Desenvolvedor Web Full Stack</div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        typeWrite(elemento){
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = ' ';
            textoArray.forEach(function(letra, i){   
            
            setTimeout(function(){
                elemento.innerHTML += letra;
            }, 75 * i)

          });
        }
    },

    mounted() {
        const titulo = document.querySelector('.descricao-banner');
        console.log(titulo)
        this.typeWrite(titulo);
    }
}
</script>

<style lang="scss">
.banner{
    position: relative;
    height: 350px;

    background-image: url('../assets/banner.jpg');
    background-size: cover;
    background-position: center;

    @media(max-width: 991px){
        height: 250px;
    }

    .lamina{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 0;
    }
    .eu{
        position: absolute;
        top: 30%;
        left: calc(50% - 150px);

        width: 300px;
        padding: 20px;

        text-align: center;

        @media(min-width: 992px){
            top: 30%;
        }

        .foto{
            width: 150px;
            height: 150px;

            margin: 0 auto 20px auto;

            border: 2px solid white;
            border-radius: 50%;

            background-image: url('../assets/eu-colorido-sem-fundo.png');
            background-size: cover;
            background-color: #e1e1e1;

            z-index: 9999;

            @media(min-width: 1300px){
                width: 250px;
                height: 250px;
            }
            
        }

        .nome{
            font-weight: bold;
            font-size: 30px;
            color: $titulo;
        }
        .descricao-banner{
            font-size: 14px;
            color: rgba(255, 255, 255, 0.755);
        }
    }
}
</style>
