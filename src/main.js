import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPluginsWithoutComponents, VaModal, VaButton } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";

createApp(App)
  .use(VuesticPluginsWithoutComponents)
  .component("va-button", VaButton)
  .component("va-modal", VaModal)
  .mount("#app");
