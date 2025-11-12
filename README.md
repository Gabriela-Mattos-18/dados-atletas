# dados-atletas
Projeto Devstart
# Projeto Dados dos Atletas

Aplicação em JavaScript que recebe informações de um atleta, calcula parâmetros como categoria, IMC e média válida das notas, e apresenta os resultados no console.

## Descrição
O projeto simula uma competição de ginástica artística. Cada atleta possui informações básicas e notas atribuídas por cinco jurados.  
A aplicação calcula automaticamente a categoria do atleta, o IMC e a média das notas, desconsiderando a maior e a menor.

## Funcionalidades
- Recebe os dados de um atleta  
- Calcula a categoria conforme a idade  
- Calcula o IMC  
- Calcula a média válida das notas  
- Exibe todos os dados formatados no console  

## Estrutura da Classe
A classe `Atleta` contém:
- **Atributos:** nome, idade, peso, altura, notas  
- **Métodos:**
  - `categoria()`
  - `imc()`
  - `mediaValida()`
  - `exibirDados()`

## Exemplo de Entrada
```javascript
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])
atleta.exibirDados()
