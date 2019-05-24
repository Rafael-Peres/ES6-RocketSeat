"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { rejects } from 'assert'
// class Usuario {
// 	constructor(email, senha) {
// 		this.email = email
// 		this.senha = senha
// 	}
// 	isAdmin() {
// 		return this.admin === true
// 	}
// }
// class Admin extends Usuario {
// 	constructor(email, senha) {
// 		super(email, senha)
// 		this.admin = true
// 	}
// }
// const User1 = new Usuario('email@teste.com', 'senha123')
// const Adm1 = new Admin('email@teste.com', 'senha123')
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
// const usuarios = [
// 	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
// 	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
// 	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' }
// ]
// const idades = usuarios.map(usuario => usuario.idade)
// console.log(idades)
// const rocketseat18 = usuarios.filter(
// 	usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
// )
// console.log(rocketseat18)
// const google = usuarios.find(usuario => usuario.empresa === 'Google')
// console.log(google)
// const operacao = usuarios
// 	.map(usuario => ({ usuario, idade: usuario.idade * 2 }))
// 	.filter(usuario => usuario.idade <= 50)
// console.log(operacao)
// const ar = [1, 2, 3, 4, 5]
// ar.map(item => item + 10)
// console.log(ar)
// const usuario = { nome: 'Diego', idade: 23 }
// const mostraIdade = usuario => usuario.idade
// mostraIdade(usuario)
// const nome = 'Diego'
// const idade = 23
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({
// 	nome,
// 	idade
// })
// mostraUsuario(nome, idade)
// mostraUsuario(nome)
// const promise = () => new Promise(() => (resolve, reject) => resolve())
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// 5.1 B

function soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (a, b) {
    return a + b;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
// 5.2

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'Lontras'
  })
});

var meunome = 'Rafael';
var minhaidade = 19;
console.log("o usuario ".concat(meunome, " possui ").concat(minhaidade, " anos"));
