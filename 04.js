Vue.component('saludo',{
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>djdjofn</h3>
    </div>
    `,
    data(){
        return {
            saludo:'Hola desde Vue'
        }
    }
});

Vue.component('contador',{
    template: `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return {
            numero: 0
        }
    }
});

const app = new Vue({
    el: "#app",
});