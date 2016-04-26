export default function getResult(no) {
  var number=2500-no;
  if(number<401) {
    return {
      text: "Você anda meio enrolado, gastando um pouquinho além da conta e não está conseguindo guardar muita grana. Que tal adotar uns hábitos mais sustentáveis? Você pode fazer um [b]Ourocap Torcida Brasil PM[/b]! Com parcelas a partir de R$ 60 mensais, ele cabe no seu bolso e ainda dá muitas chances de ganhar uma bolada!",
      personagem: require('./personagens/matheus.png'),
      plano: "Ourocap Torcida Brasil PM",
      link: "http://www.brasilcap.com.br/brasilcap/produtos/ourocap/ourocap-torcida-brasil/pagamento-mensal/pagamento-mensal.htm"
    }
  }
  else if(number<901) {
    return {
      text: "Você ainda está aprendendo a se organizar e o salário às vezes não estica. Mas você sempre consegue achar aquela graninha para apostar e confiar na própria sorte! Uma boa para você é o [b]Ourocap Torcida Brasil PU[/b], que te coloca em sorteios de até R$ 10 milhões!",
      personagem: require('./personagens/laura.png'),
      plano: "Ourocap Torcida Brasil PU",
      link: "http://www.brasilcap.com.br/brasilcap/produtos/ourocap/ourocap-torcida-brasil/pagamento-unico-1/pagamento-unico-36.htm"
    }
  }
  else if(number<1201) {
    return {
      text: "Você anda meio preocupada e o seu dinheiro não tem durado muito. Mas você também precisa começar a pensar no futuro e tem muitos sonhos para realizar, não é? E para quem quer começar desde já a guardar um dindin para aquele projeto especial, o [b]Ourocap Torcida Brasil PM[/b] é a melhor pedida!",
      personagem: require('./personagens/alice.png'),
      plano: "Ourocap Torcida Brasil PM",
      link: "http://www.brasilcap.com.br/brasilcap/produtos/ourocap/ourocap-torcida-brasil/pagamento-mensal/pagamento-mensal.htm"
    }
  }
  else if(number<1701) {
    return {
      text: "Você sabe bem o que fazer com o seu dinheiro e já está organizadinho financeiramente. Com tanta tranquilidade, você pode dar uma colher de chá ainda maior para sua sorte! Para concorrer a ótimos prêmios e ainda guardar aquela grana legal, o [b]Ourocap Multi Sorte[/b] é a melhor pedida!",
      personagem: require('./personagens/paulo.png'),
      plano: "Ourocap Multi Sorte",
      link: "http://www.brasilcap.com.br/brasilcap/produtos/ourocap/ourocap-multisorte.htm"
    }
  }
  else {
    return {
      text: "Você é organizada com o seu orçamento e faz de tudo para economizar. Você acredita no trabalho e não gosta de deixar nada para o acaso. Apesar de não ganhar muito, você é ótima em apertar os cintos e esticar o dinheiro que entra todo mês. Você já pensou guardar sua graninha e ainda concorrer a um dinheirão? O [b]Ourocap Flex[/b] é a sua cara.",
      personagem: require('./personagens/bia.png'),
      plano: "Ourocap Flex",
      link: "http://www.brasilcap.com.br/brasilcap/produtos/ourocap/ourocap-flex.htm"
    }
  }
}
