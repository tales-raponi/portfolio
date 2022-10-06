import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./routes/app.navigator";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </NativeBaseProvider>
  );
};

export default App;
