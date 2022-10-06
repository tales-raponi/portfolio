import React, { useState } from "react";
import { Text, View, Heading, HStack, Button } from "native-base";
import { Counter } from "../../components";

export const ComponentScreen = (props) => {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <View backgroundColor={"#333333"} width={"100%"} height={"100%"} flex={1}>
      <View
        backgroundColor={"#95B8D1"}
        width={"90%"}
        height={"520px"}
        alignSelf={"center"}
        borderRadius={"10px"}
        marginTop={"20px"}
        padding={"5px"}
      >
        <Heading alignSelf={"center"} bold italic>
          Components
        </Heading>
        <Text fontSize={"18px"} color={"#E8DDB5"}>
          Counter
        </Text>
        <Text
          textAlign={"justify"}
          width={"90%"}
          marginTop={"10px"}
          marginBottom={"10px"}
        >
          This is a counter component, which has a value incremented or
          decremented by clicking on the icons:
        </Text>
        <Counter />
      </View>
      <HStack space={5} justifyContent={"center"} padding={"10px"}>
        <Button
          style={{
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#E8DDB5",
            borderColor: "white",
          }}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text color={"#333333"}>Back</Text>
        </Button>
        <Button
          style={{
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#E8DDB5",
            borderColor: "white",
          }}
          onPress={() => props.navigation.navigate("Components")}
        >
          <Text color={"#333333"}>Next</Text>
        </Button>
      </HStack>
    </View>
  );
};
