import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";

const HomeButton = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button 
          bg="transparent"
          backgroundImage="url('/man.png')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="50px" height="50px">
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Context>
              {(store) => (
                <Dialog.Body pt="6" spaceY="3">
                  <Text fontSize={'x-large'}>
                    Welcome to the Barista's Journal
                  </Text>
                  <Text fontSize={'medium'}>A web application.<br/>
                        You will be able to manage your coffee recipes,<br/>
                        track your brewing methods, ingredients <br/>
                        and user preferences with intuitive UI.
                  </Text>
                  <Text fontSize={'small'}>
                    Just click the brew button on the right<br/>
                    Add your Coffee Name, Coffee grams, <br/>
                    Water grams and your Notes.
                  </Text>
                </Dialog.Body>
              )}
            </Dialog.Context>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>

  );
};

export default HomeButton;