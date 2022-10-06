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
} from "native-base";
import { Section } from "../../components";

import { Perfil } from "../../../assets";

interface HomeProps {
  navigation: any;
}

export const HomeScreen = (props: HomeProps) => {
  const [showPerfil, setShowPerfil] = useState(false);

  return (
    <View
      backgroundColor={"white"}
      width={"100%"}
      height={"100%"}
      alignContent={"center"}
      flex={1}
    >
      {showPerfil ? (
        <View backgroundColor={"blueGray.200"} width={"95%"} height={"95%"}>
          <PresenceTransition
            visible={showPerfil}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 750,
              },
            }}
          >
            <VStack
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HStack justifyContent={"center"}>
                <Avatar
                  size={"2xl"}
                  source={Perfil}
                  marginTop={"10px"}
                ></Avatar>
              </HStack>
              <Heading fontSize={"20px"}>Tales Raponi</Heading>
              <Text
                textAlign={"center"}
                width={"70%"}
                fontWeight="600"
                fontStyle="italic"
              >
                Front-End Developer
              </Text>
              <Text>(ReactJS | React Native | Typescript | Native Base)</Text>
              <Text width={"90%"} marginTop={"10px"}>
                My name is Tales Raponi Silva, I'm graduating in Control and
                Automation Engineering from the Federal University of Itajubá -
                UNIFEI. Passionate about programming in high-level languages
                ​​and, through them, develop using my creativity.
              </Text>
              <Button
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  backgroundColor: "white",
                  borderColor: "white",
                  shadowColor: "black",
                  shadowOpacity: 0.8,
                }}
                shadow={1}
                onPress={() => setShowPerfil(false)}
                marginTop={"10px"}
              >
                <Text color={"cyan.600"}>Back</Text>
              </Button>
            </VStack>
          </PresenceTransition>
        </View>
      ) : null}
      {!showPerfil ? (
        <View
          padding={"10px"}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              borderRadius: 100,
              width: "50%",
              borderWidth: 1,
              backgroundColor: "white",
              borderColor: "white",
              shadowColor: "black",
              shadowOpacity: 0.8,
            }}
            onPress={() => setShowPerfil(true)}
            shadow={5}
          >
            <Text color={"cyan.600"}>Press to start</Text>
          </Button>
        </View>
      ) : null}
    </View>
  );
};
