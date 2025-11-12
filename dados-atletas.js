class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  categoria() {
    if (this.idade >= 9 && this.idade <= 11) return "Infantil"
    if (this.idade >= 12 && this.idade <= 13) return "Juvenil"
    if (this.idade >= 14 && this.idade <= 15) return "Intermediário"
    if (this.idade >= 16 && this.idade <= 30) return "Adulto"
    return "Sem categoria"
  }

  imc() {
    return this.peso / (this.altura ** 2)
  }

  mediaValida() {
    let notas = [...this.notas].sort((a, b) => a - b).slice(1, 4)
    let soma = notas.reduce((a, b) => a + b)
    return soma / notas.length
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`)
    console.log(`Idade: ${this.idade}`)
    console.log(`Peso: ${this.peso}`)
    console.log(`Altura: ${this.altura}`)
    console.log(`Notas: ${this.notas.join(',')}`)
    console.log(`Categoria: ${this.categoria()}`)
    console.log(`IMC: ${this.imc()}`)
    console.log(`Média válida: ${this.mediaValida()}`)
  }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])
atleta.exibirDados()
