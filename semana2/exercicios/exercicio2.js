async function getUser() {
  const response = await fetch("https://reqres.in/api/users/2");
  const data = await response.json();
  const user = data.data;
  return {
    nomeCompleto: `${user.first_name} ${user.last_name}`,
    email: user.email,
    avatar: user.avatar
  };
}

module.exports = getUser;
