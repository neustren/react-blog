

export default [
  {
    pergunta: "Você já trocou as luzes da sua casa por lâmpadas mais econômicas?",
    respostas: [
      ["Não.",100],
      ["Troquei até 4 lâmpadas.",50],
      ["Troquei mais de 4 lâmpadas.",0]
    ],
    icone: require('./icones/0.png')
  },
  {
    pergunta: "Você fuma?",
    respostas: [
      ["Não fumo.",250],
      ["Fumo até 20 cigarros por dia.",150],
      ["Fumo mais de 20 cigarros por dia.",0]
    ],
    icone: require('./icones/1.png')
  },
  {
    pergunta: "Você gasta muito nos programas de final de semana (cinema, restaurantes, teatro, entre outros)?",
    respostas: [
      ["Não. Prefiro programas mais baratos de até R$ 50.",50],
      ["Gasto em média entre R$ 50 e 200 por final de semana.",150],
      ["Gasto mais de R$ 200 por final de semana.",250]
    ],
    icone: require('./icones/2.png')
  },
  {
    pergunta: "Qual o valor que você costuma gastar com meio de transporte?",
    respostas: [
      ["Gasto pouco, até R$ 300 por mês.",200],
      ["Gasto entre R$ 300 a R$ 500 por mês.",400],
      ["Gasto mais de R$ 500 por mês.",600]
    ],
    icone: require('./icones/3.png')
  },
  {
    pergunta: "Quando você vai ao supermercado, você costuma gastar quanto?",
    respostas: [
      ["Gasto pouco, até R$ 400 por mês.",300],
      ["Gasto entre R$ 400 a R$ 800 por mês.",600],
      ["Gasto mais de R$ 800 por mês.",900]
    ],
    icone: require('./icones/4.png')
  },
  {
    pergunta: "Você costuma comprar por impulso e tem gastos que extrapolam o orçamento mensal?",
    respostas: [
      ["Não. Meus gastos são bem planejados.",0],
      ["Sim, gasto até R$ 300 a mais do planejado.",250],
      ["Sim, gasto mais de R$ 300.",400]
    ],
    icone: require('./icones/5.png')
  }
]
