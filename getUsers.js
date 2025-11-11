// arquivo: getUsers.js

import fetch from "node-fetch";

async function getUsers() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  console.log("Usuários:", data.data);
}

getUsers();
