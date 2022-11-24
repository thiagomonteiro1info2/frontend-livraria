<template>
  <div class="main">
    <div class="tudo">
      <div class="login">
        <h2 id="login">Seja bem vindo Admin</h2>
      </div>
      <hr class="separador" />
      <div class="form">
        <label for="input-email">email</label>
        <input id="input-email" placeholder="ex@email.com" type="text" />
        <label for="input-senha">senha</label>
        <input id="input-senha" placeholder="123456789" type="password" />
        <button>Acessar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  margin-left: 1%;
  width: 50%;
  height: 40px;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
  color: rgb(48, 116, 48);
  font-weight: bold;
  cursor: pointer;
}
label {
  font-size: 25px;
  color: white;
}
.tudo {
  display: flex;
  flex-direction: row;
}
#login {
  font-size: 45px;
}
.form {
  height: 500px;
  width: 400px;
  display: flex;
  background-color: rgb(48, 116, 48);
  border-radius: 30px;
  white-space: nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0 40px 0 40px;
  flex-direction: column;
}
button {
  margin: 10% auto;
}
.form input {
  justify-content: center;
  margin-bottom: 12px;
  border-bottom: 2px solid white;
  border-top: 0;
  border-right: 0;
  color: white;
  border-left: 0;
  background: transparent;
  height: 33px;
  align-items: center;
  width: 100%;
}
.login {
  color: rgb(48, 116, 48);
  display: flex;
  margin-right: 150px;
  align-items: center;
  justify-content: center;
}
.separador {
  height: 500px;
  border-left: 2px solid;
  width: 0;
  margin: 0 30px 0 30px;
  color: rgb(48, 116, 48);
}
</style>
