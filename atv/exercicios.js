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

const empresa = {
	nome: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC'
	}
}

const {
	nome,
	endereco: { cidade, estado }
} = empresa

console.log(nome) // Rocketseat
console.log(cidade) // Rio do Sul
console.log(estado) // SC

function mostraInfo({ nome, idade }) {
	return `${nome} tem ${idade} anos.`
}

mostraInfo({ nome: 'Diego', idade: 23 })

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x) // 1
console.log(y) // [2, 3, 4, 5, 6]

// 5.1 B

function soma(...nums) {
	return nums.reduce((a, b) => a + b)
}

console.log(soma(1, 2, 3, 4, 5, 6)) // 21
console.log(soma(1, 2)) // 3

// 5.2

const usuario = {
	nome: 'Diego',
	idade: 23,
	endereco: {
		cidade: 'Rio do Sul',
		uf: 'SC',
		pais: 'Brasil'
	}
}

const usuario2 = { ...usuario, nome: 'Gabriel' }
const usuario3 = {
	...usuario,
	endereco: { ...usuario.endereco, cidade: 'Lontras' }
}

const meunome = 'Rafael'
const minhaidade = 19

console.log(`o usuario ${meunome} possui ${minhaidade} anos`)
