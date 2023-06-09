import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider} from "react-i18next"
import i18next from "i18next";

import global_es from "./translation/es/global.json"
import global_en from "./translation/en/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en,
    }
  }
});
// las lineas que te dejo comentadas son la otra forma desde donde puedes repartir digamos la información desde el app.js como lo tienes ahora, o quitando el provider y el browser router de ahi y ponerlo desde aquí para ensuciar menos el app, cuando pones Router es porque has decidido tu cambiar el nombre a browserRouter y pones esta linea : import { BrowserRouter as Router } from "react-router-dom" para decir que en vez de poner browser pones Router o pepito, en el app te la he dejado puesta con Router para que tambien la tengas

// import { BrowserRouter } from "react-router-dom";
// import { RMContextProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <RMContextProvider>
    // <BrowserRouter>
      <I18nextProvider i18n={i18next}>
      <App />
      </I18nextProvider>
    // </BrowserRouter>
  // </RMContextProvider>
);
