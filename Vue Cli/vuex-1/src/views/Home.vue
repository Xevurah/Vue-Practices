<template>
  <div class="home">
    <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />

    <hr />
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import BtnDisminuir from "../components/BtnDisminuir.vue";
import BotonAccion from "../components/BotonAccion.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    BtnDisminuir,
    BotonAccion,
  },
  data() {
    return {
      titulo: "Mi contador Vuex",
    };
  },
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador > 99 ? { color: "green" } : { color: "red" }];
    },
  },
  methods: {
    ...mapMutations(["incrementar"]),
    ...mapActions(["accionIncrementar"]),
  },
};
</script>
