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
    try{
        const resposta = await fetch(urlBase)
        const  dados = await resposta.json()
        console.log(dados) 
    }catch(erro){
        console.log(erro)
    }finally{
        console.log("terminou a requisição")
    }
    
  }

  obterDados()
