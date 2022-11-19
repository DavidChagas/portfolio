<template>
    <div class="tecnologias">
        <div class="container">
            <div class="titulo">Tecnologias</div>
            <div class="descricao">Algumas tecnologias que já tive contato.</div>

            <div class="grid-tecnologias">
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:90">HTML</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:90">CSS</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:85">JS</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">AngularJS</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">Mysql</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">PHP</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:40">Laravel</div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:40">Vue.js</div>
                <!-- <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">Github</div> -->
            </div>
        </div>
    </div>
</template>

<script>
   export default {
        name: 'Tecnologias'
    }
</script>

<style lang="scss">
    .tecnologias{
        padding: 50px 20px;

        background-color: $fundo-02;

        @media(min-width: 768px){
            padding: 80px 100px;
        }

        .titulo{
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 30px;
            color: $titulo;
        }

        .descricao{
            margin-bottom: 50px;
            color: white;
        }

        .grid-tecnologias{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 10px;

            @media(min-width: 768px){
                grid-template-columns: repeat(4, 1fr);
            }
            @media(min-width: 1200px){
                grid-template-columns: repeat(8, 1fr);
            }

            div[role="progressbar"] {
                --size: 100px;
                --fg: #e1e1e1;
                --bg: #1f2234;
                --pgPercentage: var(--value);
                width: var(--size);
                height: var(--size);
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: 
                    radial-gradient(closest-side, $fundo-01 80%, transparent 0 110%, white 0),
                    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
                    ;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 15px;
                color: white;
                margin: 20px auto;
            }
        }
    }
</style>
