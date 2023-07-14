console.log("Olá Mundo Js2")

//variáveis
const NOME = "Willian";
const nome = "Giovana";
var
let

//case sensitive (JS diferencia letras maiúsculas de minúsculas)
"NOME" é diferente de "nome"

//caracteres válidos
letras: podendo usar letras maiusculas e minusculas, mas evitando "ç" e "acentuação"

numeros: desde que a váriável comece com pelo menos 1 letra, pode-se utilizar numeros em sua definição

underline_ e cifrao$: apesar de permitidos em qualquer posição, são mais utilizados nas variáveis em bibliotecas e frameworks

//tipos de dados
O JS possui os seguintes tipos de dados:
Number
String
Boolean
Array
null e undefined
symbol*
Object
function

//number
são todos os numeros reais que aprendemos nas aulas de matemática
ex: let numeroInteiro = 100;
    let numeroDecimal = 2.50;
    let numeroNegativo = -20.87;
    
operadores: é possível usar o +, -, *, e /, para executar operações matemáticas com numeros
**divisões com 0 causarão erro

esses valores numéricos não são infinitos. mesmo assim o JS trabalha com ponto flutuante de dupla precisão (double) que permite valores muito altos

MÁXIMO E MÍNIMO
para acessar quais são estes valores minimos e maximos, você pode efetuar os seguintes comandos no console.

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

STRINGS
São valores de texto, normalmente chamados de "cadeias de caracteres"

let olaMundo = "Olá Mundo";

podemos utilizar aspas 'simples' ou aspas "duplas" para encapsular a string

let olaMundo = 'Olá Mundo';
let olaMundo = "Olá Mundo";

CARACTERES ESPECIAIS

para adicionar caracteres especiais (',", &, quebra de linha e etc.) utilizamos a barra invertida "\"

let caracteresEspeciais = "Lorem \n Ipsum \\ dolor \' \" amet";
\n: Nova Linha   \':Exibe'
\\: exibe a\     \":Exibe"

CONCATENAÇÃO DE STRINGS: você pode unir (concatenar) strings de diversas formas

1) Utilizando o sinal de +

let ola = "Olá";
let mundo = "Mundo";
let olaMundo = ola+mundo;

2) Utilizando o String.concat

let ola = "Olá";
let mundo = "Mundo";
let olaMundo = ola.concat(mundo);

este método também permite concatenar diversas strings

let ola = "Olá";
let mundo = "Mundo";
let olaMundo = ola.concat(mundo," frase ",ola);

3) Template de Strings: o template de Strings é uma nova forma de concatenação e utiliza o ${expressão} e a crase ao redor da string

let ola = "Olá";
let mundo = "Mundo";

BOOLEANOS
são tipos de dados que possuem apenas dois valores
TRUE: Verdadeiro
FALSE: Falso

let verdadeiro = true;
let falso = false;

os valores true e false não são escritos entre aspas
CUIDADO! O JS entende certos valores dos outros tipos de dados como true ou false

COMPARAÇÔES
Uma das formas mais comuns de se obter valores booleanos é através de comparações

//true
let comparacao = 1 ==1;

//false
let comparacao2 = 1 > 5;

//true
let comparacaoString = "banana" == "banana";

COMPARAÇÔES:
se você testar 1 == "1", obterá true. Para fazer comparações que levam em consideração o valor e o tipo do dado, utilize ===

ARRAY (vetor)
é uma lista ou coleção de dados que pode ser acessada por indice
para criar um vetor vazio basta criar uma variável e atribuir [] a ela

let vetor = [];

atribuindo valores: você pode criar um vetr com seus valores separados por virgula

let vetor = [1, 22, 0, 100];

você pode adicionar valores de qualquer tipo no vetor

let vetor = [1, "olá mundo", true, [1,2,3]];

ACESSANDO VALORES:
Os valores podem ser acessados através de seu índice

let vetor = [1, 22, 0, 100];

//exibirá 22
console.log(vetor[1]);

observe que o índice começa no 0. Então o primeiro item está na posição 0, o segundo na posição 1 e assim por diante
