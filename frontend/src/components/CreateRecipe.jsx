import { Button, Dialog, Field, Input, useDisclosure} from "@chakra-ui/react";
import { useState } from "react";
import { Toaster, toaster} from "@/components/ui/toaster";
import { BASE_URL } from "@/App";

const CreateRecipe = ({setRecipes}) => {

  const [ isLoading, setIsLoading ] = useState(false);
  
  const[ inputs, setInputs ] = useState({
    name: "",
    coffeegr: "",
    watergr: "",
    notes: "",
  }); // We are creating inputs for our database


  const handleCreateRecipe = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsLoading(true);
    try {

      const res = await fetch(BASE_URL + "/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if(!res.ok) {
        throw new Error(data.error);
      } // We stringify to communicate with the backend

      toaster.success({
        title: "Recipe created",
        description: "Recipe created succefully",
      })
    setRecipes((prevRecipes) => [...prevRecipes, data]);

    setInputs({name: "", coffeegr: "", watergr: "", notes: ""}); // To clear the inputs
    }catch (error) {
      toaster.error({
        title: "An error occured",
      });
    }
    finally{
      setIsLoading(false);
    }
  };

return (
<>
  <Toaster />
  <Dialog.Root initialFocusEl={() => ref.current}>

    <Dialog.Trigger asChild>
      <Button
        backgroundImage="url('/brewing.png')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundColor={'whiteAlpha.900'}
        width="50px" height="50px">
      </Button>
    </Dialog.Trigger>

        <Dialog.Positioner>
          <Dialog.Content>

          <form onSubmit={handleCreateRecipe}>
            <Dialog.Header>
              <Dialog.Title>Add your new recipe</Dialog.Title>
            </Dialog.Header>
            
            <Dialog.Body pb="4">

                <Field.Root>
                  <Field.Label>Coffee name</Field.Label>
                  <Input placeholder="☕ coffee name" value={inputs.name}
                  onChange={(e) => setInputs({...inputs, name: e.target.value })}/>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Coffee gr.</Field.Label>
                  <Input placeholder="🫘  coffee gr." value={inputs.coffeegr}
                  onChange={(e) => setInputs({...inputs, coffeegr: e.target.value })}/>
                </Field.Root>
                
                <Field.Root>
                  <Field.Label>Water gr.</Field.Label>
                  <Input placeholder="💧 water gr." value={inputs.watergr}
                  onChange={(e) => setInputs({...inputs, watergr: e.target.value })}/>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Notes</Field.Label>
                  <Input placeholder="📝 notes" value={inputs.notes}
                  onChange={(e) => setInputs({...inputs, notes: e.target.value })}/>
                </Field.Root>

            </Dialog.Body>
            
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button type="submit" isLoading={isLoading} // If the page isLoading the spinner spins
                >Save</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>

            </form>
          </Dialog.Content>
        </Dialog.Positioner>

  </Dialog.Root>
</>
);
};

export default CreateRecipe;