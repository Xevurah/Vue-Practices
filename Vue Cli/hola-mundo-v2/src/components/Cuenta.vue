<template>
  <h2>Tipo de cuenta: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta: {{ estado ? "Activa" : "Desactivada" }}</h2>
  <div v-for="(servicio, index) in servicios" :key="index">
    {{ index + 1 }} - {{ servicio }}
  </div>
  <AccionSaldo texto="Aumentar Saldo" @accion="aumentar" />
  <AccionSaldo
    texto="Disminuir Saldo"
    @accion="disminuir"
    :desactivar="desactivar"
  />
  <AccionSaldo texto="Doblar Saldo" @accion="doble" :desactivar="desactivar" />
  <AccionSaldo texto="Partir Saldo" @accion="mitad" :desactivar="desactivar" />
</template>

<script>
import AccionSaldo from "./AccionSaldo";
export default {
  data() {
    return {
      saldo: 1000,
      cuenta: "visa",
      estado: true,
      servicios: ["Giro", "Abono", "Transferencia"],
      desactivar: false,
    };
  },
  name: "Cuenta",
  components: {
    AccionSaldo,
  },
  methods: {
    aumentar() {
      this.saldo = this.saldo + 100;
      this.desactivar = false;
    },
    disminuir() {
      this.saldo = this.saldo - 100;
      if (this.saldo <= 0) {
        alert("Saldo Agotado");
        this.saldo = 0;
        this.desactivar = true;
        return;
      }
    },
    doble() {
      this.saldo = this.saldo * 2;
      if (this.saldo <= 0) {
        alert("Saldo Agotado");
        this.saldo = 0;
        this.desactivar = true;
        return;
      }
    },
    mitad() {
      this.saldo = this.saldo / 2;
      if (this.saldo <= 0) {
        alert("Saldo Agotado");
        this.saldo = 0;
        this.desactivar = true;
        return;
      }
    },
  },
};
</script>

<style></style>
