import React, { useState } from "react";
import {
  Text,
  View,
  Heading,
  HStack,
  Button,
  FormControl,
  Input,
  ScrollView,
} from "native-base";
import { Counter, AlertDialog } from "../../components";

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
        <ScrollView>
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
          <Text fontSize={"18px"} color={"#E8DDB5"}>
            Login Form
          </Text>
          <Text
            textAlign={"justify"}
            width={"90%"}
            marginTop={"10px"}
            marginBottom={"10px"}
          >
            This is a Login Form, which has two inputs, one for the username and
            one for the password:
          </Text>
          <FormControl padding={2} isRequired>
            <FormControl.Label>
              <Text color={"black"}>Username</Text>
            </FormControl.Label>
            <Input
              placeholder="Enter email"
              textContentType="emailAddress"
              backgroundColor={"white"}
              borderColor={"black"}
            />
            <FormControl.Label>
              <Text color={"black"}>Password</Text>
            </FormControl.Label>
            <Input
              placeholder="Enter password"
              type={"password"}
              textContentType="password"
              backgroundColor={"white"}
              borderColor={"black"}
            />
          </FormControl>
          <Text fontSize={"18px"} color={"#E8DDB5"}>
            AlertDialog
          </Text>
          <Text
            textAlign={"justify"}
            width={"90%"}
            marginTop={"10px"}
            marginBottom={"10px"}
          >
            This is a Alert Dialog component, is used when a user needs to be
            interrupted with a mandatory confirmation or call-to-action:
          </Text>
          <AlertDialog />
        </ScrollView>
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
