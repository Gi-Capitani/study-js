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
