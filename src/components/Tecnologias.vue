<template>
    <div class="tecnologias">
        <div class="container">
            <div class="titulo">Tecnologias</div>
            <div class="descricao">Algumas tecnologias que já trabalhei.</div>

            <div class="grid-tecnologias">
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:90">HTML <small>{{experienciaHtml}} anos</small></div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:90">CSS <small>{{experienciaCss}} anos</small> </div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:85">JS <small>{{experienciaJs}} anos</small></div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">AngularJS <small>{{experienciaAngularJs}} anos</small></div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">Mysql <small>{{experienciaMysql}} anos</small></div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70">PHP <small>{{experienciaPhp}} anos</small></div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:40">Laravel <small>{{experienciaLaravel}} anos</small></div>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:40">Vue.js <small>{{experienciaVueJs}} anos</small></div>
            </div>
        </div>
    </div>
</template>


<script>
import moment from 'moment';

   export default {
    name: 'Tecnologias',
        data() {
            return {
                experienciaHtml: 0,
                experienciaCss: 0,
                experienciaJs: 0,
                experienciaAngularJs: 0,
                experienciaMysql: 0,
                experienciaPhp: 0,
                experienciaLaravel: 0,
                experienciaVueJs: 0
            }
        },
        methods: {
            calculaExperiencia() {
                this.experienciaHtml = moment().diff(moment("20180101", "YYYYMMDD"), 'years');
                this.experienciaCss = moment().diff(moment("20180101", "YYYYMMDD"), 'years');
                this.experienciaJs = moment().diff(moment("20180101", "YYYYMMDD"), 'years');
                this.experienciaAngularJs = moment().diff(moment("20180101", "YYYYMMDD"), 'years');
                this.experienciaMysql = moment().diff(moment("20180101", "YYYYMMDD"), 'years');
                this.experienciaPhp = moment().diff(moment("20180101", "YYYYMMDD"), 'years');
                this.experienciaLaravel = moment().diff(moment("20200101", "YYYYMMDD"), 'years');
                this.experienciaVueJs = moment().diff(moment("20200101", "YYYYMMDD"), 'years');

                console.log(this.experienciaHtml);  
            }
        },
        mounted() {
            this.calculaExperiencia();
        }
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
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                place-items: center;
                background: 
                    radial-gradient(closest-side, $fundo-01 80%, transparent 0 110%, white 0),
                    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
                    ;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 15px;
                color: white;
                margin: 20px auto;

                >small{
                    font-size: 12px;
                }
            }
        }
    }
</style>
