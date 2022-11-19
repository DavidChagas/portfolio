<template>
    <div class="projetos">
        <div class="container">
            <div class="titulo">Projetos</div>
            <div class="descricao">Alguns projetos que criei.</div>

            <div class="grid-projetos">
                <div class="projeto">
                    <div class="icone">
                        <img class="img-fluid" alt="Banner" src="../assets/icone-projeto-1.png"><!-- cor da imagem #6E7287 -->
                    </div>
                    <div class="nome">Gerenciador de Finanças Pessoais</div>
                    <div class="descricao-projeto">
                        Sistema que auxilia na organização financeira pessoal, permitindo o gerenciamento de receitas, despesas, objetivos e etc.
                        <br><br>
                        <i>Sistema desenvolvido como projeto final do curso de Análise e Desenvolvimento de Sistemas.</i>
                        <br><br>
                        <div class="tecs">
                            <b>Tecnologias:</b> 
                            <div class="tecs-label">
                                <div class="label-tec">Vue.js</div> <div class="label-tec">Laravel</div> <div class="label-tec">My SQL</div>
                            </div>
                        </div>
                    </div>
                    <a class="link-github" href="https://github.com/DavidChagas/gerenciador-financas-pessoais" target="_blank">Link do projeto no github.</a>
                </div>
                <div class="projeto">
                    <div class="icone">
                        <img class="img-fluid" alt="Banner" src="../assets/icone-projeto-2.png"><!-- cor da imagem #6E7287 -->
                    </div>
                    <div class="nome">Controle de Séries</div>
                    <div class="descricao-projeto">
                        Sistema que permite o cadastro de series e seus episódios, podendo fazer o gerenciamento dos episódios já assistidos. 
                        <br><br>
                        <i>Projeto desenvolvido durante o curso de Laravel pela Alura .</i>
                        <br><br>
                        <div class="tecs">
                            <b>Tecnologias:</b> 
                            <div class="tecs-label">
                                <div class="label-tec">Blade</div> <div class="label-tec">Laravel</div> <div class="label-tec">My SQL</div>
                            </div>
                        </div>
                    </div>
                    <a class="link-github" href="https://github.com/DavidChagas/controle-series" target="_blank">Link do projeto no github.</a>
                </div>
                <div class="projeto dev">
                    <div class="icone">
                        <img class="img-fluid" alt="Banner" src="../assets/icone-projeto-3.png"><!-- cor da imagem #6E7287 -->
                    </div>
                    <div class="nome">Em desenvolvimento</div>
                    <div class="descricao">Projetos legais estão por vir.</div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'Projetos'
    }
</script>

<style lang="scss">
.projetos{
    padding: 50px 20px;

    background-color: $fundo-01;
    color: white;

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
        font-size: 15px;
    }

    .grid-projetos{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;

        @media(min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media(min-width: 992px){
            grid-template-columns: repeat(3, 1fr);
        }

        .projeto{
            position: relative;

            padding: 40px 20px 60px 20px;

            border: 1px solid #6E7287;

            transition: all .3s;

            .descricao-projeto{
                i{
                    color: rgb(140, 140, 140);
                }

                .tecs{
                    display: flex;

                    .tecs-label{
                        display: flex;
                        flex-wrap: wrap;

                        .label-tec{
                            
                            margin-left: 10px;
                            margin-bottom: 5px;
                            padding: 2px 10px;

                            border-radius: 20px;
                            font-size: 12px;

                            background-color: #e1e1e1;
                            color: $fundo-02;
                            font-weight: bold;
                        }
                    }  
                }
            }

            &.dev{
                &:hover{
                    box-shadow: none;
                }
            }

            &:hover{
                box-shadow: 0px 0px 10px #878787;
            }

            .icone{
                text-align: center;
            }
            .nome{
                margin: 10px 0;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
            }

            a{
                position: absolute;
                bottom: 10px;
                right: 15px;

                color: white;
                font-size: 13px;
            }
        }
    }
}
</style>