<template>
    <div class="container">
        <br><br>
        <form @submit.prevent="loginUser">
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label >Password</label>
    <input type="password" class="form-control" placeholder="Password" v-model="user.password">
  </div>
 <br>
 <div class="alert alert-danger" v-if="messageError">{{messageError}}</div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
    </div>
</template>

<script>
// This import loads the firebase namespace.
import firebase from '../Firebase'
import '@firebase/auth'
import router from '../router'
export default{
    name : 'Signin',
    data(){
      return {
        user:{
          email : '',
          password : ''
        },
        messageError : ''
      }      
    },
    methods:{
      loginUser(){
           firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then((dataUser) => {
             localStorage.setItem("uidUser", dataUser.user.uid)
             router.push({
                name : 'Home'
              })
           }).catch(() => {
             this.messageError = "Invalid email or password"
           })
      }
    }
}
</script>