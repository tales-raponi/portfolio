import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Heading,
  HStack,
  Button,
  FormControl,
  Input,
  ScrollView,
  useToast,
} from "native-base";
import { Counter, AlertDialog } from "../../components";

export const ComponentScreen = (props) => {
  const list = [
    {
      email: "raponi13@gmail.com",
    },
    {
      email: "exemplo10@gmail.com",
    },
    {
      email: "exemplo11@gmail.com",
    },
    {
      email: "exemplo12@gmail.com",
    },
  ];
  const [submit, setIsSubmit] = useState(list);
  const [email, setIsEmail] = useState("");
  const [password, setIsPassword] = useState("");
  const [queryEmail, setIsQueryEmail] = useState("");
  const [consult, setConsult] = useState(false);
  const toast = useToast();

  console.log("Array: ", submit);

  const addItem = (title) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
      });
      return;
    } else {
      toast.show({
        title: "Email registred with success!",
      });
    }

    setIsSubmit((prevList) => {
      return [
        ...prevList,
        {
          email: email,
        },
      ];
    });
  };

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
              value={email}
              backgroundColor={"white"}
              borderColor={"black"}
              onChangeText={(e) => setIsEmail(e)}
            />
            <FormControl.Label>
              <Text color={"black"}>Password</Text>
            </FormControl.Label>
            <Input
              placeholder="Enter password"
              type={"password"}
              textContentType="password"
              value={password}
              onChangeText={(e) => setIsPassword(e)}
              backgroundColor={"white"}
              borderColor={"black"}
            />
          </FormControl>
          <Button
            width={"100px"}
            alignSelf="center"
            onPress={() => {
              const id = "test";
              addItem(email);
              setIsPassword("");
              setIsEmail("");
            }}
          >
            Submit
          </Button>
          <Heading size={"md"} textAlign={"center"} padding={"10px"}>
            Registered E-mails:
          </Heading>
          <View
            padding={"10px"}
            borderWidth={"1px"}
            borderRadius={"10px"}
            backgroundColor={"white"}
          >
            {submit.map((item) => {
              return (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.email}
                >
                  <Text width="100%" flexShrink={1} textAlign="left" mx="2">
                    {item.email}
                  </Text>
                </HStack>
              );
            })}
          </View>
          <Heading size={"md"} textAlign={"center"} padding={"10px"}>
            Consult E-mails:
          </Heading>
          {consult == false && (
            <>
              <Input
                width={"70%"}
                alignSelf={"center"}
                backgroundColor={"white"}
                onChangeText={(e) => setIsQueryEmail(e)}
                value={queryEmail}
                keyboardType={"email-address"}
                marginBottom={"10px"}
              />
              <Button
                width={"100px"}
                alignSelf="center"
                onPress={() => setConsult(true)}
              >
                Consult
              </Button>
            </>
          )}
          {consult &&
            submit.map((e) => {
              if (e.email === queryEmail) {
                return (
                  <>
                    <View
                      padding={"10px"}
                      borderWidth={"1px"}
                      borderRadius={"10px"}
                      backgroundColor={"white"}
                      width={"60%"}
                      alignSelf="center"
                      key={e.email}
                      marginBottom={"10px"}
                    >
                      <Text>{queryEmail}</Text>
                    </View>
                    <Button
                      width={"100px"}
                      alignSelf="center"
                      onPress={() => setConsult(false)}
                      key={e.email}
                    >
                      Back
                    </Button>
                  </>
                );
              }
            })}
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
