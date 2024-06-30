const urlBase = "https://viacep.com.br/ws/01001000/json/"

/*
fetch(urlBase)
  .then((response) => {
    response.json().then((dados) => console.log(dados) )
    
  })
  .catch((error) => {
    console.log(error);
  });
    */
  // async / await 

  async function obterDados() {
    const resposta = await fetch(urlBase)
    const  dados = await resposta.json()
    console.log(dados)
  }

  obterDados()
