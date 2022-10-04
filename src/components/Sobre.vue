<template>
    <div class="sobre">
        <div class="grid">
            <div class="foto">
                <div class="moldura"></div>
            </div>
            <div class="descricao">
                <div class="titulo">Sobre mim</div>
                <p>
                    Olá! Me chamo David, tenho {{idade}} anos e moro atualmente em Guaporé - RS. 
                </p>
                <p>
                    Comecei a trabalhar como programador em 2018, mais especificamente com desenvolvimento de sites e lojas virtuais, me formei em Análise e Desenvolvimento de Sistemas pela Universidade de Passo Fundo em 2021.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: 'Sobre',
        data() {
            return {
                idade: 0
            }
        },
        methods: {
            calculaIdade(){
                this.idade = moment("19960921", "YYYYMMDD").fromNow().split(' ')[0];
            }
        },
        mounted() {
            this.calculaIdade();
        }
    }
</script>

<style lang="scss">
    .sobre{
        padding: 80px 100px;
        background-color: #1f2234;

        .grid{
            display: grid;
            grid-template-columns: 40% calc(60% - 40px);
            grid-gap: 40px;

            > .foto{
                
                > .moldura{
                    width: 300px;
                    height: 400px;

                    margin: 0 0 0 auto;

                    background-image: url('../assets/myself.jpg');
                    background-size: cover;
                    background-position: center center;

                    box-shadow: 0px 0px 3px 4px #131521;
                }
            }

            > .descricao{
                color: white;

                > .titulo{
                    margin-bottom: 20px;
                    font-weight: bold;
                    font-size: 30px;
                    color: #f05a59;
                }
                > p{
                    font-size: 18px;
                }
            }
        }
    }
</style>
