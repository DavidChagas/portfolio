<template>
    <div class="projetos">
        <div class="titulo">Projetos</div>
        <div class="descricao">Alguns projetos que criei.</div>

        <div class="grid-projetos">
            <div class="projeto">
                <div class="icone">
                    <img class="img-fluid" alt="Banner" src="../assets/icone-projeto-1.png"><!-- cor da imagem #6E7287 -->
                </div>
                <div class="nome">Gerenciador de Finanças Pessoais</div>
                <div class="descricao">bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...</div>
            </div>
            <div class="projeto">
                <div class="icone">
                    <img class="img-fluid" alt="Banner" src="../assets/icone-projeto-1.png"><!-- cor da imagem #6E7287 -->
                </div>
                <div class="nome">Gerenciador de Finanças Pessoais</div>
                <div class="descricao">bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...</div>
            </div>
            <div class="projeto">
                <div class="icone">
                    <img class="img-fluid" alt="Banner" src="../assets/icone-projeto-1.png"><!-- cor da imagem #6E7287 -->
                </div>
                <div class="nome">Gerenciador de Finanças Pessoais</div>
                <div class="descricao">bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...</div>
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
    padding: 80px 100px;

    background-color: $fundo-01;
    color: white;

    > .titulo{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 30px;
        color: $titulo;
    }

    > .descricao{
        margin-bottom: 50px;
        color: white;
    }

    > .descricao{
        margin-bottom: 50px;
        color: white;
    }

    > .grid-projetos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        > .projeto{
            padding: 40px 20px;

            border: 1px solid #6E7287;

            > .icone{
                text-align: center;
            }
            > .nome{
                margin: 10px 0;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
}
</style>