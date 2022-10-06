import React, { useState } from "react";
import { View, Text, HStack, Icon } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Pressable } from "react-native";
const Counter: React.FC<PropTypes> = ({}) => {
  const [count, setIsCount] = useState(0);

  return (
    <View
      borderWidth={1}
      borderRadius={"10px"}
      alignItems={"center"}
      width={"180px"}
      height={"50px"}
      alignSelf={"center"}
      backgroundColor={"dark.100"}
    >
      <HStack space={5}>
        <Pressable onPress={() => setIsCount(count - 1)} disabled={count == 0}>
          <Icon
            as={<MaterialIcons name="remove" />}
            size="25"
            color={"white"}
            marginTop={"10px"}
          />
        </Pressable>
        <Text
          color={"white"}
          backgroundColor={"white"}
          fontSize={"25"}
          borderLeftWidth={1}
          borderRightWidth={1}
          borderColor={"white"}
          width={"40px"}
          height={"49px"}
          textAlign={"center"}
          padding={"1px"}
        >
          {count}
        </Text>
        <Pressable onPress={() => setIsCount(count + 1)} disabled={count == 99}>
          <Icon
            as={<MaterialIcons name="add" />}
            size="25"
            color={"white"}
            marginTop={"10px"}
          />
        </Pressable>
      </HStack>
    </View>
  );
};

interface PropTypes {}

export default Counter;
