const app = Vue.createApp({
    data(){
        return{
            titulo: 'Mi banco con Vue.js',
            cantidad: 0,
            enlace: 'https://youtube.com',
            estado: true,
            servicios: ['transferencias','pagos','giros','cheques']
        }
    }
})