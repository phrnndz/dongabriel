<template>
  <div id="app">
      <section class="hero is-fullheight is-info" v-bind:class="{ 'video': mostrarVideo ,'has-backgroud-image': mostrarVideo }">
            <template v-if="mostrarVideo">
              <div class="hero-video">
                  <video poster="@/assets/images/poster-video.jpg" id="bgvid" playsinline autoplay muted loop>
                      <source src="@/assets/video/finca.mp4" type="video/mp4">
                  </video>
              </div>
            </template>

            <div class="hero-head ">
              <Navbar></Navbar>              
            </div>

            <div class="hero-body">  
               <transition name="page" mode="out-in">
    <router-view></router-view>
  </transition>
            </div>

    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components:{
    Navbar
  },
  data: function () {
    return {
       mostrarVideo
    }
  },
  beforeCreate: function() {
     if (this.$route.name === "Home") {
        this.mostrarVideo = true
        } else  {
        this.mostrarVideo = false
    } 
  },
  watch: {
   $route: function() {
    // Check if given route is true, if it is then hide Nav. 
    if (this.$route.name === "Home") {
        this.mostrarVideo = true
        } else  {
        this.mostrarVideo = false
    }
    // console.log(this.$route.name);
    // this.nombreRuta = this.$route.name;
    // console.log(nombreRuta);
  }
},

}
</script>

<style lang="scss" src="./scss/main.scss">
</style>
<style lang="scss" scoped>

  @media only screen and (max-width: 770px) {
    .has-backgroud-image{
      background: url('~@/assets/images/poster-video.jpg')center center; background-size:cover; 
    }
  }




</style>
