<template>

    <div class="container">
		<section class="mb-6">
			<h1 class="is-size-7 is-breadcrumb ">SERVICIOS</h1>
		<div class="columns">
			<div class="column is-10">
				<h1 class="title is-size-1 is-size-4-mobile has-text-weight-bold is-uppercase ">Relájate y descansa en las cómodas áreas de la Finca </h1>
			</div>
		</div>
		</section>
    <kinesis-container event="scroll">
    <!-- Restaurante -->
    <section class="service-item">
      <div class="columns">
			<div class="column">
        <div class=" mt-5">
          
          	<span class="has-text-white">RESTAURANTE</span>
          
          
            <hr class="has-background-grey-light">
          
            <h2 class="title">Disfruta de la más tradicional <kinesis-element :strength="10" type="translate"><span class="is-family-handwriting is-size-2">gastronomía oaxaqueña</span></kinesis-element> </h2>
            <p class="py-2 ">La más tradicional gastronomía oaxaqueña, platillos preparados en horno de leña, tortillas hechas a mano, pan recién horneado y una selección de frutas de la región te esperan para deleitarte</p>

        </div>
        
			</div>
      <div class="column">
          	<figure class="image gallery-item">
              <kinesis-element :strength="100" type="translate">
              <img loading="lazy"  src="@/assets/images/imagen-18.jpg"/>
              </kinesis-element>
            </figure>
      </div>
		</div>
    </section>

    <!-- Museo del café -->
    <section class="service-item">
      <div class="columns">
      <div class="column" id="museoCafe">
        <figure class="image gallery-item">
          <kinesis-element :strength="30" type="translate">
              <img loading="lazy"  src="@/assets/images/imagen-13.jpg"/>
              </kinesis-element>
        </figure>
      </div>
			<div class="column">
        <div class="mt-5">
          	<span>MUSEO DEL CAFÉ</span>
            <hr class="has-background-grey-light">
            <h2 class="title">Historia y orígenes del <kinesis-element :strength="10" type="translate"><span class="is-family-handwriting is-size-2">café</span></kinesis-element></h2>
            <p class="py-2 ">Conoce su historia y orígenes, así como los instrumentos y procesos para cosechar el café de la más alta calidad, el café de altura de Pluma Hidalgo</p>

        </div>
        
			</div>
      
		</div>
    </section>
    <!-- Alberca -->
    <section class="service-item">
      <div class="columns">
			<div class="column">
        <div class=" mt-5">
          	<span>ALBERCA</span>
            <hr class="has-background-grey-light">
            <h2 class="title">Sumérgete en nuestra <kinesis-element :strength="10" type="translate"><span class="is-family-handwriting is-size-2">alberca </span></kinesis-element> con vista a las montañas</h2>
            <p class="py-2 ">Disfruta de una tarde en familia en nuestras áreas de juegos, rincones verdes y alberca.</p>

        </div>
        
			</div>
      <div class="column">
          	<figure class="image gallery-item">
              <kinesis-element :strength="80" type="translate">
                <img loading="lazy"  src="@/assets/images/imagen-5.jpg"/>
              </kinesis-element>
            </figure>
      </div>
		</div>
    </section>
    <!-- Tirolesa -->
    <section class="service-item">
      <div class="columns">
      <div class="column" id="tirolesa">
        <figure class="image gallery-item">
          <kinesis-element :strength="30" type="translate">
            <img loading="lazy"  src="@/assets/images/imagen-19.jpg"/>
          </kinesis-element>
        </figure>
      </div>
			<div class="column">
        <div class="mt-5">
          	<span>TIROLESA</span>
            <hr class="has-background-grey-light">
            <h2 class="title">Aventúrate en el vértigo de una <kinesis-element :strength="10" type="translate"> <span class="is-family-handwriting is-size-2"> tirolesa </span></kinesis-element> en medio del bosque.</h2>
            <p class="py-2 ">Si lo que buscan son emociones extremas te invitamos a descubrir la tirolesa, una emocionante forma de disfrutar de los bellos paisajes.</p>

        </div>
        
			</div>
      
		</div>
    </section>
    <!-- Spa -->
    <section class="service-item">
      <div class="columns">
			<div class="column">
        <div class=" mt-5">
          	<span>SPA</span>
            <hr class="has-background-grey-light">
            <h2 class="title"><kinesis-element :strength="10" type="translate"><span class="is-family-handwriting is-size-2">Relajación,</span></kinesis-element> equilibrio, salud y bienestar. </h2>
            <p class="py-2 ">Déjate consentir en tu estancia con nosotros y disfruta de los servicios que ofrece nuestro spa: Masajes, temazcal, hidroterapia, exfoliaciones. Pregunta por estos servicios con nuestro encargado.</p>

        </div>
        
			</div>
      <div class="column">
          	<figure class="image gallery-item">
              <kinesis-element :strength="47" type="translate">
                <img loading="lazy"  src="@/assets/images/imagen-16.jpg"/>
              </kinesis-element>
            </figure>
      </div>
		</div>
    </section>
    
    <!-- Eventos -->
    <section class="service-item">
      <div class="columns">
      <div class="column" id="eventos">
        <figure class="image gallery-item">
          <kinesis-element :strength="110" type="translate">
                <img loading="lazy"  src="@/assets/images/imagen-17.jpg"/>
              </kinesis-element>
        </figure>
      </div>
			<div class="column">
        <div class="mt-5">
          	<span>EVENTOS</span>
            <hr class="has-background-grey-light">
            <h2 class="title">Retiros, convenciones, viajes de estudios, bodas, etc.</h2>
            <p class="py-2 ">Pregunta por las opciones para realizar retiros, convenciones, actividades de tu empresa o recorridos para grupos grandes</p>

        </div>
        
			</div>
      
		</div>
    </section>
    <!-- Areas especiales -->
    <section class="service-item">
      <div class="columns">
			<div class="column">
        <div class=" mt-5">
          	<span>ÁREAS ESPECIALES</span>
            <hr class="has-background-grey-light">
            <h2 class="title">Fogata, juegos infantiles y <kinesis-element :strength="10" type="translate"><span class="is-family-handwriting is-size-2"> áreas verdes.</span></kinesis-element></h2>
            <p class="py-2 ">Contamos con áreas para camping, fogata, juegos infantiles, áreas verdes y cafetales para organizar recorridos.</p>

        </div>
        
			</div>
      <div class="column">
          	<figure class="image gallery-item">
              <kinesis-element :strength="60" type="translate">
                <img loading="lazy"  src="@/assets/images/imagen-2.jpg"/>
              </kinesis-element>
            </figure>
      </div>
		</div>
    </section>
    </kinesis-container>
    



    </div>

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Navbar from './Navbar';
export default {
	name: 'Servicios',
		components:{
    Navbar,
    KinesisContainer,
  	KinesisElement


  },
}
</script>


<style lang="scss" scoped>
// If the browser window is 600px or smaller,
@media only screen and (max-width: 600px) {
  #museoCafe,#tirolesa,#eventos{ display: none;}
  .image {margin-top: 3em;}
}

.is-family-handwriting{
  font-family: 'Homemade Apple', cursive;
}
// .service-item{
//   margin-bottom: 10rem;
//   margin-top: 10rem;
// }
/* Medium Devices, Desktops */
@media only screen and (min-width : 1024px) {
  .service-item{
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
}
hr{height:  0.3em;}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}

</style>