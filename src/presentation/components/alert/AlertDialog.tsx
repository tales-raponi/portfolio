import React, { useState } from "react";
import {
  Center,
  Button,
  AlertDialog as NBAlertDialog,
  Text,
} from "native-base";

const AlertDialog: React.FC<PropTypes> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return (
    <Center>
      <Button
        shadow={2}
        colorScheme="warmGray"
        onPress={() => setIsOpen(!isOpen)}
      >
        Alert Header
      </Button>
      <NBAlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <NBAlertDialog.Content>
          <NBAlertDialog.CloseButton />
          <NBAlertDialog.Header>Delete Customer</NBAlertDialog.Header>
          <NBAlertDialog.Body>
            <Text
              textAlign={"justify"}
              width={"90%"}
              marginTop={"10px"}
              marginBottom={"10px"}
            >
              This display is show when the "Delete Customer" button is pressed.
              Now, we can stylized as we want.
            </Text>
          </NBAlertDialog.Body>
          <NBAlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="warmGray" onPress={onClose}>
                Proceed
              </Button>
            </Button.Group>
          </NBAlertDialog.Footer>
        </NBAlertDialog.Content>
      </NBAlertDialog>
    </Center>
  );
};

interface PropTypes {}

export default AlertDialog;
