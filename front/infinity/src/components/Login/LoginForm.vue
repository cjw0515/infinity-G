<template>
  <div class="login">
    <h3>Sign In</h3>
    <form>
      <input type="text" v-model="email" placeholder="Email">
      <br>
      <input type="password" v-model="password" placeholder="Password">
      <br>
    </form>
    <button @click="login">Connection</button>
  </div>
</template>

<script>
import { firebase } from "@/config/";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
h3 {
  color: aliceblue;
}
</style>