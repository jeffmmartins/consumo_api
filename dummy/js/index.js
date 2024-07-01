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

async function createUser() {}
