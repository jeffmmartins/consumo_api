async function getUsers() {
    // passando Header dentro do fetch, passando como objeto 
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
        "app-id": "25478965214533654122"
    }
});

  const users = await resposta.json();
  console.log(users.data); // array com os usuarios 
}

getUsers()

async function getUser() {}

async function createUser() {
    const userDate ={
        firstName: "Jefferson",
        lastName: "Mendes",
        email: "teste@gmail.com"
    }

    //fazendo uma requisição do tipo post 
    try{
        await fetch("https://dummyapi.io/data/v1/user/create", {
            method: "POST",
            headers: {
                "app-id": "25478965214533654122",
                "Content-type": "aplication/json" // esse foi criado no insomnia quando foi feito o teste, entao preciso oassar aqui 
            },
            //no body nao posso passar um objeto do js , tenho que converter 
            body: JSON.stringify(userDate)
        })
    } catch (erro) {
        console.log("deu erro ao criar o usuario")
    }
}
