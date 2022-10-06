import React from "react";
import { Text, View } from "native-base";
import { Section } from "../../components";

interface HomeProps {
  navigation: any;
}

export const HomeScreen = (props: HomeProps) => {
  return (
    <View padding={"10px"}>
      <Section title={"This is a centralize title"} />
    </View>
  );
};
