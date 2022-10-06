import React, { type PropsWithChildren } from "react";
import { View, ScrollView, Heading, Text } from "native-base";

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <View
      backgroundColor={"dark.500"}
      width={"100%"}
      height={"100%"}
      alignContent={"center"}
      justifyContent={"center"}
      flex={1}
    >
      <ScrollView marginTop={"10px"}>
        <View
          backgroundColor={"blueGray.200"}
          width={"90%"}
          height={"90%"}
          alignSelf={"center"}
          borderRadius={"10px"}
        >
          <Heading alignSelf={"center"}>Components</Heading>
          <Text textAlign={"justify"}>
            This is a counter component, which has a value incremented or
            decremented by clicking on the icons.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Section;
