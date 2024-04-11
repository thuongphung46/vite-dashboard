import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./index.css";
import "devextreme/dist/css/dx.light.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </Provider>
);
