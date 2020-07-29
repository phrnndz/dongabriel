<template>
	            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item mx-0 px-0 " @click.prevent>
                            <img class="navbar-logo" src="@/assets/logo.png" alt="Logo">
                        </a>
  
                        <a role="button" class="navbar-burger burger"  @click="showNav = !showNav" :class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="navbar-menu" :class="{ 'is-active': showNav }">
                        <div class="navbar-end">
                            
                                <router-link @click.native="cerrarNavbar"  to="/" class="navbar-item has-text-white " >                                    
                                    HOME
                                </router-link>
                            
                            
                                <router-link @click.native="cerrarNavbar" to="/galeria" class="navbar-item has-text-white" >                                    
                                    GALERÍA
                                </router-link>

                            
                                <router-link @click.native="cerrarNavbar"  to="/servicios" class="navbar-item has-text-white" >                                    
                                    SERVICIOS
                                </router-link>
                            
							
                                <router-link @click.native="cerrarNavbar"  to="/cabanias" class="navbar-item has-text-white" >                                    
                                    CABAÑAS
                                </router-link>
                            
                            
                                <router-link @click.native="cerrarNavbar"  to="/contacto" class="navbar-item has-text-white" >                                    
                                    CONTACTO
                                </router-link>
                            
                        </div>
                    </div>
                </div>
            </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data: function(){
        return{
            showNav: false
        }
    
    },
    methods: {
        cerrarNavbar: function(){
            this.showNav= false
            // console.log(this.showNav);
        }
    }
    
}
</script>


<style lang="scss">

.navbar-item img {
    max-height: 3rem;
    filter: drop-shadow(2px 2px 2px #f4f4f4);
}

a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
    background-color: transparent;
}


</style>



