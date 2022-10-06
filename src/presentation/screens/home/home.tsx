import React, { useState } from "react";
import {
  Button,
  View,
  Avatar,
  HStack,
  VStack,
  Text,
  PresenceTransition,
  Heading,
  ScrollView,
} from "native-base";
import { Section } from "../../components";

import { Perfil } from "../../../assets";

interface HomeProps {
  navigation: any;
}

export const HomeScreen = (props: HomeProps) => {
  const [showPerfil, setShowPerfil] = useState(false);

  return (
    <View backgroundColor={"#333333"} flex={1}>
      {showPerfil ? (
        <View
          backgroundColor={"#95B8D1"}
          width={"90%"}
          height={"500px"}
          alignSelf={"center"}
          borderRadius={"10px"}
          marginTop={"10px"}
        >
          <PresenceTransition
            visible={showPerfil}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 3000,
              },
            }}
          >
            <VStack
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar size={"2xl"} source={Perfil} marginTop={"10px"}></Avatar>
              <Heading fontSize={"20px"}>Tales Raponi</Heading>
              <Text
                textAlign={"center"}
                width={"70%"}
                fontWeight="600"
                fontStyle="italic"
              >
                Front-End Developer
              </Text>
              <Text>(ReactJS | React Native | Native Base)</Text>
              <Text width={"90%"} marginTop={"10px"} textAlign={"justify"}>
                My name is{" "}
                <Text bold italic>
                  Tales Raponi Silva
                </Text>
                , I'm graduating in Control and Automation Engineering from the
                Federal University of Itajubá - UNIFEI. Passionate about
                programming in high-level languages ​and, through them, develop
                using my creativity.{"\n\n"}
                In this project, I you show a little of my personal experience
                in programming, between styled components, interactive
                interfaces and other applications. So, let's start!
              </Text>
            </VStack>
          </PresenceTransition>
          <HStack space={5} justifyContent={"center"}>
            <Button
              style={{
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#E8DDB5",
                borderColor: "white",
              }}
              onPress={() => setShowPerfil(false)}
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
      ) : null}
      {!showPerfil ? (
        <View
          padding={"10px"}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              borderRadius: 1000,
              borderWidth: 1,
              backgroundColor: "#E8DDB5",
              borderColor: "white",
              shadowColor: "black",
              shadowOpacity: 0.8,
            }}
            onPress={() => setShowPerfil(true)}
            shadow={5}
          >
            <Text color={"cyan.500"}>Click me</Text>
          </Button>
        </View>
      ) : null}
    </View>
  );
};
