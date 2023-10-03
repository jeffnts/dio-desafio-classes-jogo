class Jogador {
 constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
 }

 executaAtaque(){
    if(this.tipo === 'mago') return 'magia'
    if(this.tipo === 'guerreiro') return 'espada'
    if(this.tipo === 'monge') return 'artes marciais'
    if(this.tipo === 'ninja') return 'shuriken'
 }

 getTipo(){
    return this.tipo
 }
}

const mago = new Jogador('Mago', 10, 'mago')
const guerreiro = new Jogador('Guerreiro', 10, 'guerreiro')
const monge = new Jogador('Monge', 10, 'monge')
const ninja = new Jogador('Ninja', 10, 'ninja')

console.log(`o ${mago.getTipo()} atacou usando ${mago.executaAtaque()}`)
console.log(`o ${guerreiro.getTipo()} atacou usando ${guerreiro.executaAtaque()}`)
console.log(`o ${monge.getTipo()} atacou usando ${monge.executaAtaque()}`)
console.log(`o ${ninja.getTipo()} atacou usando ${ninja.executaAtaque()}`)