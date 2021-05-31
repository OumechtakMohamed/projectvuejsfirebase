<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item" v-if="user==null">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
        <li class="nav-item" v-if="user==null">
        <router-link class="nav-link" to="/signin">Signin</router-link>
        </li>
        <li class="nav-item" v-if="user==null">
        <router-link class="nav-link" to="/signup">Signup</router-link>
        </li>
        <li class="nav-item"  v-if="user">
        <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item"  v-if="user">
        <router-link class="nav-link" to="/myproducts" v-if="user">My products</router-link>
        </li>
        <li class="nav-item"  v-if="user">
        <a class="nav-link" v-on:click="logout" style="cursor:pointer">Logout</a>
        </li>
      
    </ul>
    
  </div>
</nav>
    </div>
</template>

<script>
import firebase from '../Firebase'
import '@firebase/auth'
import router from '../router'

export default{
  name:'Navbar',
  data(){
    return {
      user : null
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(userAuth => {
      if(userAuth){
        this.user = userAuth
      }
      else {
        this.user = null
      }
    })

  },
  methods:{
    logout(){
      firebase.auth().signOut().then(() => {

        localStorage.removeItem("uidUser")
      router.push({
        name : 'Signin'
      })
      }
      
      )
    }
  }
}
</script>

<style>
   nav{
       background: red;
   }
</style>