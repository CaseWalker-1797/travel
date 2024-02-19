import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./src/redux/store/Store";

const persistor = persistStore(store);

const AppWithStore = () => (
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
