<template>

            <div class="container has-text-centered">
                <div class="column is-8 is-offset-2">
                    <kinesis-container>
                      <kinesis-element :strength="20" >
                      <div class="mx-3 px-3">
                        <h1 class="is-size-1-desktop title has-text-white my-2 is-size-4-mobile">
                          DISFRUTA LA MÁXIMA EXPERIENCIA <span class="is-family-handwriting is-size-4-mobile">Cafetalera </span>
                      </h1>
                      <hr>
                      <h3 class="subtitle has-text-white my-2 is-size-7-mobile">
                          Desde las más altas montañas oaxaqueñas, Pluma Hidalgo acuna un mágico lugar que contiene los secretos del extenso mundo del café y abre sus puertas para compartirlos contigo.
                      </h3> 
                      <router-link  to="/servicios" class="button " ><span class="is-family-handwriting is-size-6">Ver Más </span></router-link>                         
                      </div>
                      </kinesis-element>
                    </kinesis-container>
                </div>
            </div>
       


</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
export default {
  name: 'Home',
  components:{
    // Navbar,
    KinesisContainer,
	  KinesisElement

  },
  

}
</script>
<style lang="scss" scoped>

  @media only screen and (max-width: 600px) {
    .hero.is-info{
      background: url('~@/assets/images/poster-video.jpg')center center; background-size:cover; 
    }
  }




</style>