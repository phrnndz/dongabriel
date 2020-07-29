<template>

		<div class="container">
			<section class="mb-6">
			
				<h1 class="is-size-7 is-breadcrumb ">CONTACTO</h1>
			<div class="columns">
				<div class="column is-10">
					<h1 class="title is-size-1  is-size-4-mobile has-text-weight-bold ">PÓNGASE EN CONTACTO CON NOSOTROS </h1>
				</div>
			</div>
		
			</section>
			<div class="columns">
				<div class="column">
					 <figure class="image gallery-item"> 
						<!-- <kinesis-element :strength="60" type="translate"> -->
							<img  loading="lazy" src="@/assets/images/mapa.jpg" alt="">
						<!-- </kinesis-element>  -->
					</figure>

				</div>
				<div class="column">
					<p class="has-text-centered has-text-white">
						Estamos ubicados en el km 22 de la carretera Pluma Hidalgo-Santa María Huatulco, Col. San José Palogrande, Pluma Hidalgo, Oaxaca.
					</p>
			
					<div class="is-flex contact-phone mt-5">
						<figure class='svg-icon mr-4 image is-32x32 is-inline-block '>
							<img class="" src="@/assets/images/llamada.svg">
						</figure>
						<p class="">958 108 07 63</p>
					</div>
					<div class="is-flex contact-phone mt-5">
						<figure class='svg-icon  mr-4 image is-32x32 is-inline-block '>
							<img class="" src="@/assets/images/llamada.svg">
							
						</figure>
						<p class="">958 589 83 38</p>
					</div>
					<a target="_blank" href="https://www.facebook.com/FincaDonGabriel/?ref=br_rs">
					<div class="is-flex contact-phone mt-5">
						
						<figure class='svg-icon  mr-4 image is-32x32 is-inline-block '>
							<img class="" src="@/assets/images/facebook.svg">
							
						</figure>
						<p class="has-text-white">Finca Don Gabriel</p>
						
					</div>
					</a>
					<div class="social-display">
						
					</div>
				</div>
			</div>




		</div>

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Navbar from './Navbar';
export default {
	name: 'Contacto',
	components:{
		Navbar,
		KinesisContainer,
		KinesisElement
	},
	data : function () {
		return{
		}
	}
}
</script>

<style >
/* .box-image{
	width: 100%  !important; 
	height: 100%  !important;
	overflow: initial  !important;
    border-radius: 1px  !important;
} */
.contact-phone{
	justify-content: center;
}
</style>