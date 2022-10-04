<template>
    <div class="banner">
        <img class="img-fluid" alt="Banner" src="../assets/banner.jpg">
        <div class="lamina"></div>
        <div class="eu">
        <div class="foto"></div>
        <div class="nome">David Chagas</div>
        <div class="descricao">Desenvolvedor Web</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss">
.banner{
    position: relative;

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
        top: 20%;
        left: calc(50% - 150px);

        width: 300px;
        padding: 20px;

        text-align: center;

        .foto{
            width: 200px;
            height: 200px ;

            margin: 0 auto 20px auto;

            border: 2px solid white;
            border-radius: 50%;

            background-image: url('../assets/myself.jpg');
            background-size: cover;

            z-index: 9999;
        }

        .nome{
            font-weight: bold;
            font-size: 30px;
            color: #f05a59;
        }
        .descricao{
            font-size: 14px;
            color: rgba(255, 255, 255, 0.755);
        }
    }
}
</style>
