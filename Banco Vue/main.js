const app = Vue.createApp({
    // objeto que bindea
    data(){
        return{
            titulo: 'Mi banco con Vue.js',
            cantidad: 1000,
            enlace: 'https://youtube.com',
            estado: true,
            servicios: ['transferencias','pagos','giros','cheques'],
            desactivar:false
        }
    },
    // metodos
    methods:{
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor){
            if(this.cantidad===0){
                alert('saldo en cero!')
                this.desactivar = true
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
    // propiedades computadas
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})