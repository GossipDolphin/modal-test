<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Shelby" />
  <va-modal size="large" v-model="showModal" title="Overview">test</va-modal>
  <va-button @click="showModal = !showModal">Open Modal</va-button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  top: 40%;
  z-index: 1;
  margin: 0 auto;
  position: absolute;
}
</style>
