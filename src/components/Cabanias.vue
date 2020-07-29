<template>

    <div class="container">
		<section class="mb-6">
			<h1 class="is-size-7 is-breadcrumb ">CABAÑAS ECOLÓGICAS </h1>
			<div class="columns">
				<div class="column is-10">
					<p class="is-size-1 is-size-4-mobile has-text-weight-bold is-uppercase ">Cuidando del medio que nos rodea para no dañar el ecosistema.</p>
				</div>
			</div>
		</section>

		<section class="mb-6">
			<div class="columns ">
				<div class="column is-full ">
						<section class="showcase">
							<carousel :autoplay="true"  :perPage="1" :mouse-drag="false" :paginationEnabled="false">
								<slide>
									<figure class="image is-16by9">
										<img   src="@/assets/images/imagen-8.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-26.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-20.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-27.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-24.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-22.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-23.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-21.jpg">
									</figure>
								</slide>
								<slide>
									<figure class="image is-16by9">
										<img  src="@/assets/images/imagen-25.jpg">
									</figure>
								</slide>
							</carousel>
							<div  class="showcase-info is-hidden-mobile">
							<div class="box has-background-white has-text-centered">
								<h2 class="title has-text-grey-dark">LO QUE TE OFRECEMOS</h2>
								<p class="py-2">Todos los precios mostrados son en pesos mexicanos. Contamos con los siguientes servicios: luz electrica, agua caliente, internet inalámbrico, estacionamiento, alberca, área de juegos y áreas verdes a las que puedes accesar libremente. Servicio 24 horas para check in y check out a las 12 hrs del día siguiente. </p>
								<p>La finca se encuentra a 1km del centro de la población de Pulma Hidalgo y a 22km de Santa María Huatulco.</p>
								<div>
									<div class="is-inline-block  mr-5 mt-5"><figure class='svg-icon image is-32x32'><img src="@/assets/images/bano.svg"></figure></div>
									<div class="is-inline-block  mr-5 mt-5"><figure class='svg-icon image is-32x32'><img src="@/assets/images/coche.svg"></figure></div>
									<div class="is-inline-block  mr-5 mt-5"><figure class='svg-icon image is-32x32'><img src="@/assets/images/cama.svg"></figure></div>
									<div class="is-inline-block  mr-5 mt-5"><figure class='svg-icon image is-32x32'><img src="@/assets/images/wifi.svg"></figure></div>
								</div>
							</div>
						</div>
						</section>
						
				</div>
				
			</div>
			<div class=" has-text-centered is-hidden-tablet ">
				
				<h2 class="title has-text-white">LO QUE TE OFRECEMOS</h2>
				<p class="py-2">Todos los precios mostrados son en pesos mexicanos. Contamos con los siguientes servicios: luz electrica, agua caliente, internet inalámbrico, estacionamiento, alberca, área de juegos y áreas verdes a las que puedes accesar libremente. Servicio 24 horas para check in y check out a las 12 hrs del día siguiente. </p>
				<p>La finca se encuentra a 1km del centro de la población de Pulma Hidalgo y a 22km de Santa María Huatulco.</p>
				<div class="is-inline-block is-hidden-mobile">
					<div><figure class='svg-icon image is-32x32'><img src="@/assets/images/bano.svg"></figure></div>
					<div><figure class='svg-icon image is-32x32'><img src="@/assets/images/coche.svg"></figure></div>
					<div><figure class='svg-icon image is-32x32'><img src="@/assets/images/cama.svg"></figure></div>
					<div><figure class='svg-icon image is-32x32'><img src="@/assets/images/wifi.svg"></figure></div>
				</div>
				
			</div>

		</section>
		<section class="pt-6">

			<div class="columns">
				<div class='column   '>
				<div class='card equal-height has-background'>
					<div class='py-5 px-3 card-content is-block has-text-centered'>
						<div>
							<figure class='svg-icon image is-64x64'><img src="@/assets/images/price-2.svg"></figure>
						</div>
						<h3 class="is-size-4  has-text-grey-dark is-size-4-mobile has-text-weight-bold">Matrimonial</h3>
						<p class="is-size-7  has-text-grey-dark has-text-weight-light py-5">Cuenta con vista a las montañas, baño propio y agua caliente.</p>
						<span class="is-size-3  is-size-4-mobile has-text-grey-dark has-text-weight-bold ">$ 650.00</span>
					</div>
				</div>
				</div>
				<div class='column   '>
				<div class='card equal-height has-background'>
					<div class='py-5 px-3 card-content is-block has-text-centered'>
						<div>
							<figure class='svg-icon image is-64x64'><img src="@/assets/images/price-1.svg"></figure>
						</div>
						<h3 class="is-size-4 has-text-grey-dark is-size-4-mobile has-text-weight-bold">Cobacha</h3>
						<p class="is-size-7 has-text-grey-dark has-text-weight-light py-5">Cuenta con vista a las montañas, baño propio y agua caliente.</p>
						<span class="is-size-3  is-size-4-mobile has-text-grey-dark has-text-weight-bold ">$ 650.00</span>
					</div>
				</div>
				</div>
				<div class='column   '>
				<div class='card equal-height has-background'>
					<div class='py-5 px-3 card-content is-block has-text-centered'>
						<div>
							<figure class='svg-icon image is-64x64'><img src="@/assets/images/price-3.svg"></figure>
						</div>
						<h3 class="is-size-4  has-text-grey-dark  is-size-4-mobile has-text-weight-bold">King Size</h3>
						<p class="is-size-7 has-text-grey-dark has-text-weight-light py-5">Cuenta con vista a las montañas, baño propio y agua caliente.</p>
						<span class="is-size-3  is-size-4-mobile has-text-grey-dark has-text-weight-bold ">$ 850.00</span>
					</div>
				</div>
				</div>
				<div class='column   '>
				<div class='card equal-height has-background'>
					<div class='py-5 px-3 card-content is-block has-text-centered'>
						<div>
							<figure class='svg-icon image is-64x64'><img src="@/assets/images/price-4.svg"></figure>
						</div>
						<h3 class="is-size-4  has-text-grey-dark  is-size-4-mobile has-text-weight-bold">Tres Camas</h3>
						<p class="is-size-7 has-text-grey-dark has-text-weight-light py-5">Cuenta con vista a las montañas, baño propio y agua caliente.</p>
						<span class="is-size-3   is-size-4-mobile has-text-grey-dark has-text-weight-bold ">$ 1,100.00</span>
					</div>
				</div>
				</div>

			</div>
		</section>

   



    </div>

</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Navbar from './Navbar';

export default {
	name: 'Cabanias',
	components:{
	Navbar,
	Carousel,
	Slide,
	KinesisContainer,
  	KinesisElement




  },
}
</script>

<style lang="scss">
 .svg-icon {
  width: 28px;
  height: 28px;
  margin: 0 auto
}
.svg-icon{
	transition: all .5s ease-in-out;
	&:hover{
		transform: scale(1.2);
	}
}
.has-background{
	background-image: url('~@/assets/images/bg-1.jpg');
}
.showcase{
	// height: 25rem;
	position: relative;
}
.showcase-info{
	position: absolute;
	bottom: -40px;
	width: 100%;
	// height: 100px;
	margin: 0 auto;
  	padding: 0 100px;
}
.box{
	border-radius: 1px;
}
</style>