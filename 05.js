Vue.component('padre',{
    template:
    `
    <div class="p-5 bg-dark text-white">
        <button @click="numeroPadre++">+</button>
        <h2>Componente Padre: {{numeroPadre}}</h2>
        {{nombrePadre}}
        <hijo :numero=numeroPadre @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data(){
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
});

Vue.component('hijo',{
    template:
    `
    <div class="py-5 bg-success">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombre: 'Ignacio'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    }
});

const app = new Vue ({
    el: '#app'
});