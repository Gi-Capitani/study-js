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

alterando e atribuindo valores pelo índice:
com o índice, você pode:

a) alterar um valor existente;
b) inserir um novo valor em uma posição específica;

let vetor = [11, 21, 23, 433, 50];
//altera o valor da primeira posição
vetor[0] = 9000;
//insere um valor após o ultimo elemento
vetor[5] = 7;

NULL:
O null é um tipo de dado especial, ele representa a falta de valor de qualquer outro tipo de dado

let x  = null;
let y = 1;
y = null;

UNDEFINED:
este tipo de dado aparece quando criamos uma variável e tentamos acessar seu valor antes de ter atribuído algo a ela

let x;
console.log(x);

Undefined !== Null:
undefined e null são diferentes
console.log(null === undefined);

resumidamente, isto ocorre pois null ainda é um valor e undefined é quando o JS não sabe qual o tipo de dado

OBJETO:
É um tipo de dado composto pelos outros tipos. com ele, podemos organizar informações relacionadas em uma variável

let carro = {
    rodas: 4,
    portas: 2,
    nome: "um carro",
    aVenda: true
};

criação: um objeto vazio é bem simples de criar

let carro = {};

no caso de um objeto com propriedades (variáveis), fazemos assim:

let carro = {
    rodas: 4,
    nome: "carro"
};

caso você já tenha criado o objeto e queira adicionar um novo, você pode fazer de duas formas

carro.portas = 2;
carro["portas"] = 2;

note que se você usar a segunda opção, precisa ter uma String dentro dos []

a alteração de dados funciona da mesma forma

carro.rodas = 5;
carro.portas = 4;
carro.nome = "carrão";

carro["rodas"] = 3;
carro["portas"] = 2;
carro["nome"] = "carrinho";

FUNÇÕES:
As funções são utilizadas para criarmos uma sequencia de operações para serem executadas

let olaMundo = function(){
    console.log("Olá Mundo");
    console.log("Olá Mundo novamente");
    console.log("Olá Mundo mais uma vez");
}

olaMundo();

note que para fazer a função executar, você precisa chama-la com os parênteses

outra forma de criar uma função é chamando o function com o nome dela

function olaMundo(){
    console.log("Olá Mundo");
    console.log("Olá Mundo novamente");
    console.log("Olá Mundo mais uma vez");
}

olaMundo();

também é possível passar valores para a função acessar

let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado);
}

somar(1,2);
somar(4,4);
somar(99,1);

replique este código no seu computador para que você possa ver os resultados

o último recurso que estaremos vendo da função (por enquanto) é o comando return

let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

a primeira coisa que você precisa saber é que o return para a função e devolve um valor

então, estes estão corretos:
let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

let subtrair = function(valor1, valor2){
    console.log(valor1 - valor2);
    return valor1 - valor2;
}

e estes não executarão corretamente

let somar = function(valor1, valor2){
    return valor1 + valor2;
    console.log(1);
}

let subtrair = function(valor1, valor2){
    valor2 = valor2 + 5;
    return valor1 - valor2;
    valor1 = 1;
}

agora que você sabe como usar o return, vamos falar sobre a utilidade dele

let somar = function(valor1, valor2){
    return valor1 + valor2;
}

let resultado = somar(10,10);

uma função com return devolve um valor que podemos guardar em uma variável

o return faz com que seja uma ferramenta excelente para tornarmos nosso código mais simples de entender
conforme formos avançando no curso, utilizaremos cada vez mais as funções em nosso código

CURIOSIDADE:
caso você não coloque o return, por default as funções devolvem undefined
