import { Browser } from "@capacitor/browser";
import { SplashScreen } from "@capacitor/splash-screen";
import { StatusBar, Style } from "@capacitor/status-bar";

window.customElements.define(
  "capacitor-welcome",
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      // Our Tests
      
      setTimeout(async () => {
        // If in `capacitor.config.json` we would have `"style": "DARK"` or 
        // `"style": "DEFAULT"`, and then we call `setStyle`, we don't have any 
        // effect!
        await StatusBar.setStyle({ style: Style.Light });
        console.log('New status-bar style applied!');
        
      }, 5000);

      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
    <main>
      <h1>Capacitor App</h1>
      <p>
        This project is used to create a minimal, reproducible example. Just add
        the affected Capacitor platforms and plugins.
      </p>
      <label for="myInput">Website:</label>
      <input
        type="text"
        id="myInput"
        name="myInput"
        value="https://capacitorjs.com/"
      />
      <button id="open-browser">Open Browser</button>
    </main>
    `;
    }

    connectedCallback() {
      const self = this;

      self.shadowRoot
        .querySelector("#open-browser")
        .addEventListener("click", async function (event) {
          const input = self.shadowRoot.getElementById("myInput").value;
          if (!input) {
            return;
          }
          await Browser.open({ url: input });
        });
    }
  },
);
