import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; //📖📖[CONECTING REDUX WITH REACT]📖📖we need to import this "Provider" after we install the "npm i react-redux" === now we must include our <App/> from bellow inside the <Provider/>, check bellow 🔻 📖📖[CONECTING REDUX WITH REACT]📖📖
import "./index.css";
import App from "./App";

// import "./store"; //🀄🀄[CREATING THE REDUCER]🀄🀄 in this way we will run the code wich is in the "store" REDUX file
// import "./store-v1";
import "./store-v2";

import store from "./store-v1"; //📂📂[STRUCTURING THE FILES]📂📂 here we connect with the "store" variable

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 📖📖[CONECTING REDUX WITH REACT]📖📖 */}
      <App />
    </Provider>
  </React.StrictMode>
);
