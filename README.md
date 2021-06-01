<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <RewriteRule ^([^\.]+)$ $1.html [NC,L]/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Challenge</title>
    <link rel="stylesheet" type="text/css" href="/css/style-f.css">
    <link rel="stylesheet" type="text/css" href="/css/style-in.css">
    <link rel="stylesheet" type="text/css" href="/css/style-h.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <script href="https://github.com/Voipdbr/desafiomvapi/tree/main/js/c1.js"></script>
    <script href="https://github.com/Voipdbr/desafiomvapi/tree/main/js/c2.js"></script>
    <script href="https://github.com/Voipdbr/desafiomvapi/tree/main/js/cp.js"></script>
    <script href="https://github.com/Voipdbr/desafiomvapi/tree/main/js/se.js"></script>
    <header>
        <div class="head">
            <ul class="ul-1">
                <li onclick="search()"><a>Buscar</a></li>
                <li onclick="comics()"><a>Personagens / Comics</a></li>
                <li><a onclick="creators()">Criadores</a></li>
            </ul>
        </div>
        <nav>
            <form id="conF" class="fm-mas">
                <div class="buscar form filter-container">
                    <input required type="text" id="buscar" class="sea form-c ch-sea-b" placeholder="Pesquise Seu Herói, EX: Hulk, Homem-Aranha, Homem-de-Ferro, etc...">
                </div>
                <input type="submit" id="buscar" value="Encontre!" Class="btn btn-se mb-2">
            </form>
            <div>
                <a class="txt">Ixi a tela do seu dispositivo não tem suporte ao buscador.</a>
            </div>
        </nav>
    </header>
    <main class="main-1">
        <div class="p-1">
            <div id="person" class="container">
                <ul data-js="marvel" class="marvel"></ul>
            </div>
            <div id="person4" class="container container4">
                <ul data-js="marvel" class="marvel"></ul>
            </div>
            <div id="person2" class="container2">
                <ul data-js="marvel" class="marvel"></ul>
            </div>
            <div id="person3" class="container3">
                <ul data-js="marvel" class="marvel"></ul>
            </div>
        </div>
    </main>
    <footer>
        <div class="foot">
            <ul class="ft-1">
                <li><a class="a1">Veja Mais / Personagens</a></li>
                <button class="li-1" id="liLoad" type="button" onclick="clicar()"><a class="a2">↓</a></button>
            </ul>
        </div>
    </footer>
</body>

</html>

<img src="https://github.com/Voipdbr/desafiomvapi/blob/main/imggifdesc/voip.gif" alt="Voipdbr"  width="400" alt="404 image"/>

Este projeto foi feito com a inserção de uma API livre para desenvolvedores chamada de Marvel API.

Ela é otima para testar seus conhecimentos com inserção e relacionamento entre biblioteca,
oferecidas por uma organização.

Por exemplo esse projeto foi um desafio que participei, nele você podia ter usado algumas dessas
tecnologias.
<p></p>
● HTML5 ✔
<p></p>
● CSS ✔
<p></p>
● Javascript ✔
<p></p>
● ReactJs
<p></p>
● VueJs
<p></p>
● AngularJs
<p></p>
● PHP
<p></p>
● NodeJs
<p></p>
● Python
<p></p>

Eu optei por utilizar 4 linguagens: HTML5, CSS, JAVASCRIPT, JSON.

●  Porque não utilizei os demais?
R: Eu na data 05/2021, não tinha conhecimento o suficiente para produzir/codar nestas frameworks e linguagens.

PHP e Python que na data de hoje, são linguagens que não tenho muito dominio, mas entendo.

Tirando esses conhecimentos que estão em null, as 4 linguagens utilizadas,
são bastante flexiveis em meus projetos pessoais.

O site criado com a api, é interativo e interessante, pois o padrão do site foi pensado em não ser 
algo estático.
Os botões são animados, as caixas dos personagens também, e a troca de informações é facil de entender.

No projeto eu encontrei vários problemas com relação ao código na parte do buscador, eu não consigo
inserir a url com as informações do name solicitante, o código não está conseguindo fazer solicitação.

Os botões (Buscar, Personagens/Comics e Criadores), estão funcionando perfeitamente, o código
dos botões (Buscar, Personagens/Comics e Criadores), faz linkagem com o script cp.js,
que solicita ao styles.css, a inserção de novas listagens de classe, fazendo com que as informações presentes
no css, já estão preparadas para ser aplicada a um classe que existe ou ira ser gerada, faça com que o 
display fique none, assim as informações de uma div é cortada, e a outra se sobrepõe.

O botão (Ver mais), ele está funcionando, consegue aplicar +50 personagens, de primeira você nem percebe,
porque o botão ele consegue gerar +50 personagens diferente, Mas sempre que você clica no botão
ele adiciona os mesmos cinquenta personagens, Não consegui fazer esse problemas sumir,
 mas a maior parte do botão foi desenvolvido.

Foi um projeto simples que fiz, mas que me ajudou a entender sobre a produção de código com frameworks e API.

e claro o site foi desenvolvido como um SPA (Single Page Application).




<img src="https://github.com/Voipdbr/desafiomvapi/blob/main/imggifdesc/data.gif" alt="Site"  width="800" alt="404 image"/>
