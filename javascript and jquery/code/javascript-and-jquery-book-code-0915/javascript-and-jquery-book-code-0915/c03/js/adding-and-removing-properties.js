// Set up the object
var hotel = {
  name : 'Park',
  rooms : 120,
  booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elPool = document.getElementById('pool');      // Get element
elPool.className = hotel.pool;                     // Update HTML with property of the object

var elGym = document.getElementById('gym');        // Get element
elGym.className = hotel.gym;                       // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
*/

/*
estava estudando javascript. javascript é uma linguagem
de programação voltada ao desenvolvimento web, seja na
estrutura visivel de sites ou no funcionamento de operações
"por detras" do que é apresentado ao usuario. respectivamente,
front-end e back-end. javascript é uma ferramenta muito
importante para um programador, já que é uma linguagem fácil
de aprender, desenvolver e aplicar em diversos cenários.
e eu, como estudante de programação louco para arrumar um
emprego, não podia me dar o luxo de não aprender essa porra.
baixei um livro chamado "javascript and jquery" numa plataforma
de colaboração de projetos chamada "github". um maluco qualquer
disponibilizou lá o pdf e me deu a possibilidade de ter acesso ao
conteudo (o livro estava nas livrarias por 650 reais. talvez sem
o acesso ao pdf eu nunca lesse o livro e ainda demorasse mais para
ter acesso a javascript. não é que a unica fonte de informação
sobre a linguagem fosse o livro, mas de alguma forma aquilo
me prendeu, como se fosse "a unica porta de entrada" para esse
conhecimento. o que é uma afirmação falaciosa, porque puta merda
ne, um conteudo sobre o universo da computação é ridiculamente
facil de ser encontrado na internet, existe uma quantidade
infinita de conteudo para me introduzir a esse conteudo,
mas de alguma forma aquilo me motivou. será que num contexto
onde o acesso à informação é teoricamente universal, e a
quantidade é imensurável a reação de apatia é imdeiata e os
vinculos de relação com estruturas formalizadas de ensino se
estreitam? como livros, faculdades, etc? mas se sim, porque
então o crescimento da anti-ciencia e conspiracionismo? muitos
ainda rejeitam o uso de livros, condenam praticas de leituras
e, contraditoriamente, ainda louvam a escrita como meio "verdadeiro"
da transmissão do conhecimento. como se a validade da informação
não estivesse na informação em si mas na midia a qual é transmitida.
o que continua contraditorio, visto que o porcesso de adquirir
informações continua sendo latentemente por redes sociais. e daí
vem uma possivel resposta ao surgimento crescente da anti-ciencia
já que o poder de consumir e produzir conteudo não estao mais
nas mãos de uma estrutura socialmente aceita, como a imprensa,
mas nas mãos de absolutamente qualquer um com acesso à internet.
e em consequencia ainda da vastissima quantidade de informação
e a velocidade absurda com que são produzidas e transmitidas
abrem um campo onde uma pesquisa de anos e um meme feito em 5
minutos disputam pela atenção do consumidor. como lidar com
complexidades exige tempo, tempo esse que a infinidade de
conteudo na internet dá a entender que não existe, é mais
economico para o consumidor o meme. é menos custoso processar
o meme que um artigo cientifico extenso. CARALHO VEI NAVALHA
DE OCKHAM TOTAL!!!!!!!!!!!!! EM TEMPOS DE INTERNET A NAVALHA
DE OCKHAM, O CONFONTRO COM DUAS POSSIBILIDADES E A PLAUSIBILIDADE
DA QUE EXIGE MENOS ABSTRAÇÕES, TEM O MESMO EFEITO SOB CIRCUNSTANCIAS
DIFERENTES!!!!!! AGORA NÃO MAIS SE AVALIA COMO VÁLIDO O CENÁRIO QUE
SE EXIGE MENOS ABSTRAÇÕES MAS O QUE EXIGE MENOS TEMPO DE PROCESSAMENTO.
SERIA ESSA PARADA UM FATOR BIOLOGICO????? A ANTICIENCIA É CONSEQUENCIA
DIRETA DO SUPER-ESTIMULO SOBRE NÓS????? PENSAR DEMAIS GASTA ENERGIA, O
CEREBRO, UM ÓRGÃO DE ANIMAL AINDA NA PEGADA DE SOBREVIVENCIA, QUERENDO
ECONOMIZAR ENERGIA PARA SE PREOCUPAR COM O NECESSÁRIO, ENTÃO, SOBRE UMA
ÓTICA EVOLUTIVA, É MAIS PROVEITOSO O CERÉBRO RETER INFORMAÇÕES MAIS FACILMENTE
PROCESSÁVIES????????? A NAVALHA DE OCKHAM É NA REAL UM BISTURI. mas oxe, pera.
tem gente que não adota essa postura. no mesmo recorte da população que consome
conteudos online existem sim usuarios que podem ser usados como evidencia
para apontar a validade dessa parada, mas muitos não. muitos se dão sim o
trabalho de ler matérias, estudar artigos, buscar e checar fontes. se o que
eu proponho fosse mesmo algo universal, não deveriamos todos ter essa
reação? mas se, em estado de natureza, o homem //apenas// processasse
informações pouco custosas para o cérebro, talvez sequer a agricultura
tivesse sido desenvolvida, ne. o fator especial a respeito dos homo
sapiens é o raciocinio cognitivo, a percepção de si defronte a sua realidade
e a capacidade de formular realidades imaginadas. criar contos, mitos, condutas
morais, ética, estruturas hierarquicas, enfim, abstrair informações, cirar
narrativas que não são expressas no mundo tangível. e com certeza o esforço
de criar essas realidades deve ser um puta dum esforço para o
cérebro que está piradasso em se preocupar so com fugir daquela
pantera. acho que vou precisar de um maior fundamento biológico e
antropologico para atestar isso. mas o superestimulo é um fato.
nosso cerebro animal teve menos de um século para se acostumar com
a transmissão e processamento de informação que só vinha diretamente
do ambito comunitário e escrita (com jornais e livros etc) para um
meio UNIVERSAL de produção e consumo de conteudo que se acontece
infinitamente, nunca se repetindo. lidar com isso deve ser um porre
pro cerebro. o que pode sim servir como evidencia para o efeito do
bisturi de ockham. mas essa parada ainda não é generalizada. e isso
seria sintomatico da nossa geração? enfim, depois tenho que desenvolver
isso. tava falando sobre o bagulho do javascript lá). começando
a estudar, fui introduzido à conceitos básicos de como a linguagem
funciona, suas estruturas, seus termos, sua implementação
e manuseio (assim como qualquer outra linguagem. diferentemente
do portugues, ingles, aramaico, italiano e etc, javascript não me
permite escrever um conto sobre um homem encontrando uma pedra
em seu caminho, o que aconteceu durante a comitiva do governo de hoje,
a atual situação e projeções a respeito do corona ou uma narrativa
a respeito de um brother que multiplicou paes, reuniu uma galera,
falou uns negocios massa de amor e morreru pra tirar o da humanidade
da reta. assim como nenhuma dessas liguagens me permite abstrair
e sintetizar de forma estruturada dados, valores, faze-los interagir
entre si e reproduzir um resultado que se expressa de forma concreta
no universo tangivel atraves do computador. alguem que tem um cachorro
e o ve morrer, se não for um sociopata filho da puta, vai, se for brasileiro,
ficar triste. um estado-unidense nessa mesma situação will be sad. ambos
conseguem interpretar e sentir a situação de forma semelhante porque o
sistema linguistico, o qual fundamenta seu raciocinio, lhes permite isso.
(ou será que não? será que primeiro pensamos na linguagem para depois
compreender e traduzir as sensações ou sentimos para depois traduzirmos
por meio da linguagem? alguem que nunca foi apresentado à uma linguagem
sente as coisas da mesma forma que eu que fui? não afirmo que ele não
sente, mas é a mesma forma????). eventualmente, apos um tempo do
cachorro morrer, o brasileiro sentirá saudade. o estado-unidense
will miss him. eles necessariamente interpretam a mesma sensação?
por exemplo, litost em tcheco corresponde a um sentimento de quando
alguem reflete com ansiedade sua perspectiva de futuro. nós, em
portugues não temos um correspondente. até onde isso influencia nossa
percepção sobre esse sentimento e como condiciona nosso pensamento?
e em casos mais extremos como o contraste de uma lingua oral e
outra meramente visual como libras? ambos os falantes das linguas
sentem e percebem o mundo ao seu redor da mesam forma? até que ponto?
e nesse sentido, ambas as linguas ainda permitem, como dito anteriormente,
a formação de narrativas, poesia, etc. matematica e javascript não nos
possibilitam isso, mas tambem presumem uma forma de raciocino diferente
e tem aplicabilidade. alem disso, sao universais. qualquer falante de qualquer
lingua pode se comunicar entre si afirmando que 2+2=4 e que se
var lerba = "gostoso"; se eu der o comando
lerba
no console resultará
gostoso
isso faz delas menos linguas que o prtugues, libras, ingles, italiano, etc?
se não, então será que varias de nossas inquietações e perguntas sem respostas,
como talvez "o que é o 'agora'?", sejam resultado da incapacidade do nosso sistema
linguistico de prover o raciocínio necessário para materializar uma resposta?
). em certo ponto foi introduzido o conceito de objeto. um objeto
em javascript nada mais é que uma forma de conceituar e definir no
código algo que existe no universo (ou criar algo). por exemplo,
um hotel é definido por ter quartos, vagas, a quantidade, a cor talvez,
as acomodações, o nome, e por aí vai. eu poderia pensar em infinitas
caracteristicas que compõem um hotel, ir muito além e cogitar quantos
pregos tem em cada parede, onde estão, o peso de cada movel, a composição
química da estrutura do edificio, a quantidade de átomos até, mas meu
objeto "hotel" no meu código javascript nuca seria o hotel de verdade, seria?
afinal, todas as caracteristicas físicas daquele hotel estaria
computadas no código. em essência, o hotel é o mesmo. nós, humanos,
não enxergaríamos o hotel pelo código, sequer talvez achássemos que existe
um hotel ali. cade as paredes? não posso sentir a textura, ver a cor, não
tem gente na recepção (por mais que isso seja contabilizado também).
mas aí vem o foda, o hotel tá no código. em cada uma das infinitas linhas
(e aqui é necessária uma abstração, já que é impossivel coletar cada uma
das caracteristicas do hotel ou de qualquer coisa. a depender da mudança
de perspectiva, sempre existe uma nova caracteristica. por exemplo,
se o parametro é saber qual a cor, temos uma resposta, se é "ter sido
explodido por uma bomba de hidrogênio", é outra e por aí vai. a infidiade
da criatividade humana limita a caracterização concreta de qualquer ser)
o hotel está milimetricamente descrito. mas ele não está transposto no
mundo físico, ele está preso nas limitações que a //linguagem// javascript
lhe oferece, mas no código estão declaradas todas as caracteristicas que
compõem um hotel. só por ele está limitado ao universo da linguagem, ele
não existe?
*/