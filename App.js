import React from "react";
import { View, StyleSheet } from "react-native";
import LocalTuristico from "./src/componentes/LocalTuristico";

const App = () => {
  return (
    <View style={styles.container}>
      <LocalTuristico
        name="Vila Belmiro - Santos SP"
        address="Rua Princesa Isabel, S/N, Vila Belmiro, Santos - SP, 11075-501"
        description="A Vila Belmiro é o lendário estádio do Santos Futebol Clube, localizado na cidade litorânea de Santos, no estado de São Paulo, Brasil. Este icônico estádio é muito mais do que apenas um local para jogos de futebol; é um símbolo da história e da paixão do futebol brasileiro."
        imageSource="https://www.vilabelmiro.net/wp-content/uploads/2018/08/vila-belmiro-e1534192925162.jpg"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
