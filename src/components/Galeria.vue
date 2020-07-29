<template>



    <div class="container">
		<section class="mb-6">
			
			<h1 class="is-size-7 is-breadcrumb ">GALERÍA</h1>
		<div class="columns">
			<div class="column is-10">
				<h1 class="title is-size-1  is-size-4-mobile has-text-weight-bold ">UBICADA EN LO ALTO DE LA SIERRA <br> MADRE DEL SUR </h1>
			</div>
		</div>
		<p class="has-text-justified has-text-weight-light ">
					Da un paseo por la Finca y date la oportunidad de amanecer en una cómoda cabaña con vista a las montañas y recuérdale a tus sentidos, el eco ancestral de nuestras tradiciones.
				</p>
		</section>
		<kinesis-container>

		<div class="tile is-ancestor">
			<div class="tile is-5 is-vertical is-parent">
				<div class="tile is-child   py-0 px-0">

						<kinesis-element :strength="10">
							<img   class="column-image "  src="@/assets/images/imagen.jpg"/>
						</kinesis-element>
					
				</div>
				<div class="tile is-child  py-0 px-0">
					<kinesis-element :strength="20" >
							<img   class="column-image"  src="@/assets/images/imagen-2.jpg"/>
						</kinesis-element>
				</div>
			</div>
			<div class="tile is-parent">
				<div class="tile is-child  py-0 px-0">
					<kinesis-element :strength="5">
							<img   class="column-image"  src="@/assets/images/imagen-3.jpg"/>
						</kinesis-element>
				</div>
			</div>
		</div>
		<div class="tile is-ancestor">
			<div class="tile is-6 is-parent">
				<div class="tile is-child  py-0 px-0">
					<kinesis-element :strength="15">
							<img   class="column-image"  src="@/assets/images/imagen-4.jpg"/>
						</kinesis-element>
				</div>
			</div>
			<div class="tile is-6 is-parent">
				<div class="tile is-child  py-0 px-0">
					<kinesis-element :strength="10">
							<img   class="column-image"  src="@/assets/images/imagen-5.jpg"/>
					</kinesis-element>
				</div>
			</div>
		</div>
		

		<div class="columns">
			<div class="column">
				<kinesis-element :strength="15" >
					<img   class="column-image"  src="@/assets/images/imagen-6.jpg"/>
				</kinesis-element>
			</div>
		</div>
		<div class="columns">
			<div class="column ">
				<kinesis-element :strength="20" >
					<img   class="column-image"  src="@/assets/images/imagen-7.jpg"/>
				</kinesis-element>
			</div>
			<div class="column ">
				<kinesis-element :strength="35" >
					<img   class="column-image"  src="@/assets/images/imagen-10.jpg"/>
				</kinesis-element>
			</div>


					
		</div>
		<!-- <div class="columns">
			<div class="column is full">
				<kinesis-element :strength="10" >
				<figure class="">
					<video width="100%" controls loop muted poster="@/assets/images/forrest.jpg" frameborder="0" allowfullscreen>
              			<source src="@/assets/video/galeria.mp4" type='video/mp4'>
           			</video>
				</figure>
				</kinesis-element>
			</div>

		</div> -->
		</kinesis-container>
	</div>


	

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Navbar from './Navbar';
export default {
	name: 'Galeria',
	components:{
	Navbar,
	KinesisContainer,
	KinesisElement

  },
  
  data: function () {
    return {
       mostrarVideoFondo: false
    }
  },
}
</script>


<style >

.column-image{
	/* width: 10vw; */
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	/* max-height: 30vh; */
}




  </style>