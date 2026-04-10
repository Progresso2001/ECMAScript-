// ITERANDO VALORES
//USANDO O LAÇO FOR

// var obj = ["canecas", "bola", "papel"]
// for(var i = 0; i < obj.length; i++){
//     console.log(obj[i])
// }

// Usando metodos mais sofisticados

// forEach() : usaremos um função anonima para iterar o array
// var obj = ["canecas", "bola", "papel"]
// obj.forEach(function(novoObj){
//     console.log(novoObj)
// })

// função	de		callback		não	precisa
// necessariamente	ser	anônima.	Podemos	defini-la	antes	e	atribuí-la	a
// uma	variável	para	passá-la	como	parâmetro	ao		forEach	
// var objs = ["canecas", "bola", "papel"]
// function imprimeObj(obj){
//     console.log(obj)
// }
// objs.forEach(imprimeObj)

// Map()

// var numeros = [1,2,3]
// var dobro = []
// for (var i = 0; i < numeros.length; i++){
//     dobro.push(numeros[i]*2)
// }
// console.log(numeros)
// console.log(dobro)

// usando o map
// var numeros = [1,2,3]
// var dobro = numeros.map(function(numero){
//     return numero * 2
// });
// console.log(dobro)

// Filter

// var	alunos	=	[
//     {nome:'joão',	idade:15},
//     {nome:'josé',	idade:18},
//     {nome:'maria',	idade:20}
//];
// var	alunosDeMaior	=	[];
// for(var	i	=	0;	i	<	alunos.length;	i++){
// if(alunos[i].idade	>=	18)	{
//     alunosDeMaior.push(alunos[i]);
//     }
// }
// console.log(alunosDeMaior);

// usando o filter

// var	alunosDeMaior = alunos.filter(function(aluno){
//     return aluno.idade >= 18;
// })

// console.log(alunosDeMaior);

// Find 

var alunos = [
    {nome:'Joaquim'},
    { nome:'Paulo'},
    {nome: 'Pinoto'}
];
// var aluno;
// for(var i = 0; i < alunos.length; i++){
//     if(alunos[i].nome === 'Joaquim'){
//         aluno = alunos[i];
//         break;
//     }
// }
// console.log(aluno)

// usando o metodo find

var aluno = alunos.find(function(aluno){
    return aluno.nome ==='Joaquim';
});

console.log(aluno);

