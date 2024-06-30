const urlBase = "https://viacep.com.br/ws/01001000/json/"

fetch(urlBase)
  .then((response) => {
    response.json().then((dados) => console.log(dados) )
    
  })
  .catch((error) => {
    console.log(error);
  });

  
