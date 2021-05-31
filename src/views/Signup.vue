<template>
    <div class="container"><br><br>
        <form @submit.prevent="registerUser">
   <div class="form-group">
    <label >Name</label>
    <input type="text" class="form-control" placeholder="Enter name" v-model="user.name">

  </div>         
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="user.password">
  </div>
 <br>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>

<script>
import firebase from '../Firebase'
import '@firebase/auth'
import '@firebase/firestore'
import router from '../router'
export default{
    name : 'Signup',
    data(){
      return {
        user : {
          name : '',
          email : '',
          password : '',
          uid : ''
        },
        ref: firebase.firestore().collection('users')
      }
    },
    methods:{
      registerUser(){
        firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((dataUser) => {
          this.ref.add({
            name:this.user.name,
            email:this.user.email,
            uid:dataUser.user.uid
          })
          router.push({
            name : 'Home'
          })
        }) 
      }
    }
}
</script>