const aluno = {
  nome: "Mariana",
  idade: 21,
  curso: "Sistemas de Informação"
};

//exibir no html
const mensagem = document.getElementById('mensagem');
mensagem.textContent = `Olá  ${aluno.nome}! Confira suas informações.  Nome: ${aluno.nome}
| Idade: ${aluno.idade} | Curso:${aluno.curso}`;

//exibir no console

console.log("Notação com chaves:")
console.log(`Nome: ${aluno.nome}`)
console.log(`Idade: ${aluno.idade}`)
console.log(`Curso: ${aluno.curso}`)

console.log(`Notações diferentes`)
console.log("Nome: ",aluno.nome)
console.log("Idade:",aluno["idade"])
console.log('Curso:' +aluno.curso)


aluno.idade = 22;
console.log(`Idade Alterada: ${aluno.idade}`)

console.log("2. Adicionando e removendo propriedades — Básico")
const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10
};
console.log(produto)

const categoria = "Informatica"
produto.categoria = categoria
produto.estoque = 8;
delete produto.estoque

console.log(produto)

const desconto = produto.preco-produto.preco*0.2
produto.desconto = desconto;
console.log(produto)

console.log("3. Verificando propriedades — Básico")
const usuario = {
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 30
};

const propriedades = ["email", "telefone", "idade"];

for (const prop of propriedades) {
  if (Object.hasOwn(usuario, prop)) {
    console.log(`A propriedade "${prop}" existe.`);
  } else {
    console.log(`A propriedade "${prop}" NÃO existe.`);
  }
}

console.log("4. Listando propriedades e valores — Básico")
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  cor: "preto"
};

//propriedades
for(const propriedade of Object.keys(carro))
  console.log(propriedade)

//só o valor
console.log("x")
for(const v of Object.values(carro))
    console.log(v)

//chave+valor
console.log("x")
for(const  [chave, valor] of Object.entries(carro))
   console.log(`${chave}: ${valor}`);

console.log("5. Calculando dados de um objeto — Intermediário")
/*Crie uma propriedade total representando o valor total do estoque.
O cálculo deve ser preco × quantidade.

Resultado esperado:
total: 1000*/

{

const produto2 = {
  nome: "Teclado",
  preco: 250,
  quantidade: 4
};


produto2.valorTotalEstoque = calculaEstoque(produto2.quantidade, produto2.preco)

function calculaEstoque(estoque,preco){
  return estoque*preco;
}

for(const  [chave, valor] of Object.entries(produto2))
   console.log(`${chave}: ${valor}`);
}


console.log("x")
console.log("6. Trabalhando com objetos aninhados — Intermediário")
/**
 Exiba a cidade, o estado e o CEP do funcionário.
Depois, altere a cidade para "Rio de Janeiro".

Conceitos: objetos aninhados e acesso encadeado.
 */
const funcionario = {
  nome: "Ana",
  cargo: "Desenvolvedora",
  endereco: {
    cidade: "Nova Friburgo",
    estado: "RJ",
    cep: "28600-000"
  }
};

console.log(funcionario.endereco.cidade)
console.log(funcionario.endereco.estado)
console.log(funcionario.endereco.cep)

funcionario.endereco.cidade = "Rio de Janeiro"
console.log("x")
console.log(funcionario?.endereco.cidade)
console.log(funcionario.endereco.estado)
console.log(funcionario.endereco.cep)
console.log("x")

console.log("7. Criando métodos em objetos — Intermediário")
/*Adicione ao objeto um método depositar(valor) que aumente o saldo.
Adicione também um método consultarSaldo() que exiba o saldo atual.
crie também um método sacar(valor) que impeça saques maiores que o saldo.*/
const conta = {
  titular: "João",
  saldo: 1500,
  deposita,
  getSaldo,
  sacaValor
}


function deposita(v) {
  this.saldo += v;
}
function getSaldo(){
  console.log(`Saldo: ${this.saldo}`)
}

function sacaValor(v){
  if(v<=this.saldo){
    this.saldo-=v
  }else{
    console.log("Operação Inválida!")
  }
}

conta.getSaldo();
console.log("Depósito:")

conta.deposita(500);
conta.getSaldo()
;
console.log("Saque")
conta.sacaValor(500);
conta.getSaldo();

console.log("8. Trabalhando com arrays de objetos — Intermediário")
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniel", nota: 7.0 },
];

console.log("Nome dos alunos:")
for(let i =0; i<alunos.length;i++){
  console.log(alunos[i].nome)
}

console.log("Alunos que tiraram 7 ou mais:")
for(let i =0; i<alunos.length;i++){
  if(alunos[i].nota>=7)
  console.log(alunos[i].nome)
}

function organizaPorNota() {
  for (let i = 0; i < alunos.length - 1; i++) {
    for (let j = 0; j < alunos.length - 1 - i; j++) {
      if (alunos[j].nota > alunos[j + 1].nota) {
        let temp = alunos[j + 1];
        alunos[j + 1] = alunos[j];
        alunos[j] = temp;
      }
    }
  }
}
organizaPorNota();                       // só executa a ordenação
console.log("Aluno com a maior nota:");
console.log(alunos[alunos.length - 1]);  // mostra o último, o de maior nota

function calculaMedia(){
  let contador =0;
  for(let i=0;i<alunos.length; i++){
    contador = contador+alunos[i].nota
  }
  return contador / alunos.length
}
console.log("A média da turma:")
console.log(calculaMedia())

console.log("x")
console.log("9. Copiando e combinando objetos — Avançado")
/*rie um novo objeto pessoa contendo todas as propriedades dos dois objetos.
Não altere os objetos originais.

Conceitos: Object.assign(), spread operator (...).*/
/*Desafio: crie uma terceira propriedade chamada resumo com uma 
frase gerada a partir dos dados.*/
const dadosPessoais = {
  nome: "Marina",
  idade: 28
};

const dadosProfissionais = {
  cargo: "Analista",
  salario: 4500
};

const pessoa = Object.assign(dadosPessoais,dadosProfissionais);

for(const [chave, valor] of Object.entries(pessoa))
   console.log(`${chave}: ${valor}`);

console.log("x")
console.log("Laboratório final — sistema de produtos — Avançado")

const produtos = [
  { id: 1, nome: "Notebook", categoria: "Informática", preco: 3500, estoque: 4 },
  { id: 2, nome: "Mouse", categoria: "Informática", preco: 120, estoque: 15 },
  { id: 3, nome: "Cadeira", categoria: "Móveis", preco: 900, estoque: 6 },
  { id: 4, nome: "Teclado", categoria: "Informática", preco: 250, estoque: 10 }
];

const nomes = produtos.map(p => p.nome);


const produtosComTotal = produtos.map(p => ({
  ...p,
  totalEstoque: p.preco * p.estoque
}));


let totalEstoqueGeral = 0;
produtos.forEach(p => {
  totalEstoqueGeral += p.preco * p.estoque;
});


let produtoMaisCaro = produtos[0];
produtos.forEach(p => {
  if (p.preco > produtoMaisCaro.preco) {
    produtoMaisCaro = p;
  }
});

const informatica = produtos.filter(p => p.categoria === "Informática");

function buscarPorId(id) {
  return produtos.find(p => p.id === id);
}

const resumo = {
  quantidadeTotal: produtos.length,
  valorTotal: totalEstoqueGeral
};

console.log("1. Nomes:", nomes);
console.log("2. Valor em estoque por produto:", produtosComTotal);
console.log("3. Valor total do estoque:", totalEstoqueGeral);
console.log("4. Produto mais caro:", produtoMaisCaro);
console.log("5. Produtos de Informática:", informatica);
console.log("6. Produto ID 3:", buscarPorId(3));
console.log("7. Resumo:", resumo);
