<template>
  <button @click="accionBoton({ estado: estado, numero: 10 })">
    {{ textoBoton }}
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    estado: Boolean,
  },
  computed: {
    textoBoton() {
      return this.estado ? "Aumentar" : "Diminuir";
    },
  },
  methods: {
    ...mapActions(["accionBoton"]),
  },
};
</script>

<style></style>
