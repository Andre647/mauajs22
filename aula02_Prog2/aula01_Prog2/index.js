//ponto e virgula no final eh opcional
//declarando constantes
//const nome = "jose";
//const idade = 27;
// aspas simples e duplas tem o mesmo efeito
//const sexo = 'M';
//const endereco = 'Rua K, 12';
//declaracao de variaveis
//let -> variavel local com escopo de bloco
//let a = 2;
//let b = "abc";
//var: seu escopo é a função em que foi declarada ou global
//var c = 2 + 3;
//var d = "abcd";

// var linguagem = "Javascript";
// console.log("Aprendendo " + linguagem);
// //nome pode ser redeclarada
// var linguagem = "Java";
// console.log("Aprendendo, " + linguagem);

// //escopo não restrito a bloco
// var idade = 18;
// //exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído.
// //Ela é içada - do inglês hoist - para fora do bloco if
// console.log(`Oi, ${nome}`);
// if (idade >= 18) {
// var nome = "João";
// console.log(`Parabéns, ${nome}. Você pode dirigir`);
// }
// //ainda existe aqui
// console.log(`Até mais, ${nome}.`);

// const n1 = 2;
// const n2 = '3';
// //coerção implícita de n1, concatenação acontece
// const n3 = n1 + n2;
// console.log(n3);
// //coeração explícita, soma acontece
// const n4 = n1 + Number (n2)
// console.log(n4)

// Testes de comparacao, == -> compara os valores envolvidos, 
//                       === -> compara os valores e os tipos envolvidos
// console.log(1 == 1)//true
// console.log (1 == "1") //true
// console.log (1 === 1) //true
// console.log (1 === "1")//false
// console.log (true == 1) //true
// console.log (1 == [1])//true
// console.log (null == null)//true
// console.log (null == undefined)//true
// console.log([] == false)//true
// console.log ([] == [])//false

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
// "Cristina"];
// const apenasComA = nomes.filter((n) => n.startsWith("A"));
// console.log(apenasComA);

// const res = nomes.map((nome) => nome.charAt(0));
// console.log(res);

// const todosComecamComA = nomes.every((n) =>
// n.startsWith("A"));
// console.log(todosComecamComA);

// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);
// console.log(soma);

// function hello (){
//     console.log ('Oi')
// }
// hello();
// //cuidado, aqui redefinimos a função sem parâmetros
// function hello (nome){
//     console.log ('Hello, ' + nome)
// }
// hello('Pedro')
    
// function soma (a, b) {
//     return a + b;
// }
// const res = soma (2, 3)
// console.log (res)
    
// const dobro = function (n) {
//                     return n * 2;
//                 };
// const res = dobro(4);
// console.log(res);
// //valor padrão para o parâmetro
// const triplo = function (n = 5) {
//                     return 3 * n;
//                 };
// console.log(triplo());
// console.log(triplo(10));

// Utilizando arrow function
// const hello = () => console.log("Hello");
// hello();
// const dobro = (valor) => valor * 2;
// console.log(dobro(10));
// const triplo = (valor) => {
//     return valor * 3;
// };
// console.log(triplo(10));
// // E agora?
// const ehPar = (n) =>  n % 2 === 0;
// console.log(ehPar(10));

// /*uma função pode ser atribuída
// a uma variável*/
// let umaFuncao = function () {
//                         console.log ("Fui armazenada em uma variável");
//                     }
// //e pode ser chamada assim
// umaFuncao()
// /* f recebe uma função como parâmetro e, por isso
// é uma função de alta ordem.
// Por devolver uma função, g também é de alta ordem.
// */
// function f (funcao) {
// //chamando a função
// //note como a tipagem dinâmica tem seu preço
//     funcao()
// }
// function g () {
//     function outraFuncao(){
//         console.log("Fui criada por g");
//     }
//     return outraFuncao;
// }
// //f pode ser chamada assim
// f (function (){
//     console.log ('Estou sendo passada para f')
// })
// //e g pode ser chamada assim
// const gResult = g()
// gResult()
// //e assim também
// g()()
// //outros testes
// /* f chama g, que somente devolve uma função.
// Nada é exibido.*/
// f(g)
// /*f chama a função devolvida por g.
// "Fui criada por g" é exibido.*/
// f(g())
// /*f tenta chamar o que a função criada por g
// devolve. Ela não devolve coisa alguma. Por isso,
// um erro - somente em tempo de execução - acontece. */
// f(g()())
// //O que acontece?
// f(1)
    


// AULA 2 ------------------------------------------------------------------
//
// Trabalhando com JSON

// let pessoa = {
//     nome: "João",
//     idade: 17,
// }
// //o acesso a propriedades pode ser feito com ponto
// console.log("Me chamo " + pessoa.nome);
// //e com [] também
// console.log("Tenho " + pessoa["idade"] + " anos");

// let pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121,
//     },
// };
// console.log(
//     `Sou ${pessoaComEndereco.nome},
//     tenho ${pessoaComEndereco.idade} anos
//     e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
//     número ${pessoaComEndereco["endereco"]["numero"]}`
//     );
    
// let concessionaria = {
//     cnpj: "00011122210001-45",
//     endereco: {
//     logradouro: "Rua A",
//     numero: 10,
//     bairro: "Vila J",
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ecosport",
//             anoDeFabricacao: 2018,
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2020,
//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2020,
//         },
//     ],
// };

// for (let veiculo of concessionaria.veiculos) {
//     console.log(`Marca: ${veiculo.marca}`);
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);
// }

// let calculadora = {
//     //pode ser arrow function
//     soma: (a, b) => a + b,
//     //e função comum também
//     subtracao: function (a, b) {
//         return a - b;
//     },
// };
// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);

// Execucao Sincrona e Assincrona

// console.log('Eu primeiro')
// console.log("Agora eu")
// console.log("Sempre vou ser a última...:(")

// const a = 2 + 7
// const b = 5
// //só faz sentido se os valores a e b já estiverem disponíveis
// console.log(a + b)

// EXEMPLO SINCRONO--------------------------------------
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// /*
// o valor de e não depende do valor devolvido
// pela função demorada.
// */
// const e = 2 + a + b
// console.log(e)
//--------------------------------------------------------
// EXEMPLO ASSINCRONO   
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //função será executada depois de, pelo menos, 500 milissegundos
// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)
   
// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = a + b
// console.log(e)
//---------------------------------------------------------   

// function demorada(tempo) {
//     console.log(`demorada ${tempo}`);
//     const atualMaisTempo = new Date().getTime() + tempo;
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// }
// setTimeout(function (){demorada(2000)}, 2000);
// setTimeout(function (){demorada(1000)}, 1000);
// console.log("chegou ao fim do script principal");
    
// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// //crie um arquivo chamado arquivo.txt com o conteúdo``2'' (sem as aspas)
// //no mesmo diretório em que se encontra seu script
// abrirArquivo("arquivo.txt");

// Adicionando Callbacks
// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//             const dobro = conteudo.toString() * 2;
//             const finalizar = function (erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar); // aqui eh feito o callback de finalizar
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// //crie um arquivo chamado arquivo.txt com o conteúdo``2'' (sem as aspas)
// //no mesmo diretório em que se encontra seu script
// abrirArquivo("arquivo.txt");

// Promises
// function calculoDemorado(numero) {
//     return new Promise(function (resolve, reject) {
//         let res = 0;
//         for (let i = 1; i <= numero; i++) {
//             res += i;
//         }
//         resolve(res);
//     });
// }
// calculoDemorado(10).then( (resultado) => {
//     console.log(resultado)
// })
    
// function calculoRapidinho (numero){
//     return Promise.resolve((numero * (numero + 1)) / 2);
// }
// calculoRapidinho (10).then(resultado =>{
//     console.log (resultado)
// })
// //Executa primeiro, mesmo que a promise já esteja fullfilled
// console.log('Esperando...')

//Tratando possiveis erros
// function calculoRapidinho(numero) {
//     return numero >= 0
//     ? Promise.resolve((numero * (numero + 1)) / 2)
//     : Promise.reject("Somente valores positivos, por favor");
// }

// calculoRapidinho(10)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// calculoRapidinho(-1)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log("esperando...");



// AULA 3 ------------------------------------------------------------------
//
// d7331ab1d15ba1a10b407c65dec27685     -> Chave openweather api

// const axios = require("axios");
// //sua chave de api
// const appid = 'd7331ab1d15ba1a10b407c65dec27685';
// //cidade desejada
// const q = "Itu";
// //unidade de medida de temperatura
// const units = "metric";
// //idioma
// const lang = "pt_BR";
// //quantidade de resultados
// const cnt = "10";
// //Acento grave eh pra poder substituir as coisas dentro da String
// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

// //faz a requisição
// axios
//     .get(url)
//     .then((res) => {
// //mostra o resultado e devolve somente a parte de interesse
//         console.log(res);
//         return res.data;
//         })
//     .then((res) => {
// //mostra o total e devolve o resultado
//         console.log(res.cnt);
//         return res;
//         })
//     .then((res) => {
// //devolve somente a lista de previsões
//         console.log("aqui", res);
//         return res["list"];
//         })
//     .then((res) => {
// //para cada resultado, mostra algumas informações
//         for (let previsao of res) {
//             console.log(`
//                 ${new Date(+previsao.dt * 1000).toLocaleString()},
//                 ${'Min: ' + previsao.main.temp_min}\u00B0C,
//                 ${'Max: ' + previsao.main.temp_max}\u00B0C,
//                 ${'Hum: ' + previsao.main.humidity}%,
//                 ${previsao.weather[0].description} 
//             `);
//         }
//         return res;
//         })
//     .then((res) => {
// //verifica quantas previsões têm percepção humana de temperatura acima de 30 graus
//         const lista = res.filter(r => r.main.feels_like >= 30);
//         console.log (`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
//         })
//     .catch((err) => {
//         console.log(err);
//         console.log("Deu Erro.");
//     });

// async function hello(nome) {
//     return "Oi, " + nome;
// }
// const boasVindas = hello("João");
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res));

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res);
}

function chamadaComThenCatch() {
    fatorial(5)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
    
    fatorial(-1)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
}
chamadaComThenCatch();

//para usar await tem que ser async
async function chamadaComAwait() {
    //note que não há paralelismo implícito
    //somente haverá paralelismo se a função chamada utilizar explicitamente
    try {
        const f1 = await fatorial(5);
        console.log(f1);
        const f2 = await fatorial(-1);
        console.log(f2);
    } catch (error) {
        console.log(error);
    }
}
chamadaComAwait();