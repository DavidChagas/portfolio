<template>
    <div class="sobre">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                    <img class="img-responsive" src="../assets/eu-pb-sem-fundo.png" style="width: 500px"/>
                </div>
                <div class="col-lg-6">
                    <div class="descricao">
                        <div class="titulo">Sobre mim</div>
                        <p>
                            Olá! Me chamo David, tenho {{idade}} anos e moro atualmente em Guaporé - RS. 
                        </p>
                        <p>
                            Comecei a trabalhar como programador em 2018, mais especificamente com desenvolvimento de sites e lojas virtuais, me formei em Análise e Desenvolvimento de Sistemas pela Universidade de Passo Fundo em 2021.
                        </p>
                        <div class="contatos">
                            <div class="contato">
                                <img src="../assets/whatsapp.png"/>
                            </div>
                            <div class="contato">
                                <img src="../assets/linkedin.png"/>
                            </div>
                            <div class="contato">
                                <img src="../assets/github.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col d-block d-lg-none text-center">
                    <img class="img-fluid" src="../assets/eu-pb-sem-fundo.png" style="width: 500px"/>
                </div>
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
        padding: 50px 0 0;
        background-color: #e1e1e1;

            .foto{
                .moldura{
                    width: 300px;
                    height: 400px;

                    margin: 0 0 0 auto;

                    background-image: url('../assets/eu-pb-sem-fundo.png');
                    background-size: cover;
                    background-position: center center;

                    // box-shadow: 0px 0px 3px 4px #131521;
                }
            }

            .descricao{
                color: $fundo-02;
                padding: 0 20px;
                
                @media(min-width: 768px){
                    margin-top: 50px;
                }

                .titulo{
                    margin-bottom: 20px;
                    font-weight: bold;
                    font-size: 30px;
                    color: $fundo-02;
                }
                p{
                    font-size: 18px;
                }

                .contatos{
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;

                    .contato{
                        cursor: pointer;
                        transition: all .5s;
                        border-radius: 50%;
                        
                        &:hover{
                            background-color: #cdcdcd;
                            border-radius: 25px;
                        }
                    }
                }
            }
        
    }
</style>
