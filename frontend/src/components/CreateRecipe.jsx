"use client";
import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react";
import { useRef } from "react";

const CreateRecipe = () => {
  const ref = useRef(null);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button   
            variant="unstyled"
            bg="transparent"
            backgroundImage="url('/public/brewing.png')"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            width="50px"
            height="50px">

        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content initialFocusEl={ref}>
            <Dialog.Header>
              <Dialog.Title>Add your new recipe</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <Field.Root>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="Name" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Coffee gr.</Field.Label>
                  <Input ref={ref} placeholder="Coffee gr." />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Water gr.</Field.Label>
                  <Input ref={ref} placeholder="Water gr." />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Notes</Field.Label>
                  <Input ref={ref} placeholder="Notes" />
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CreateRecipe;
