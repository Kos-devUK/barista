import { Button, Dialog, Field, Input} from "@chakra-ui/react";
import { useState } from "react";
// import { Toaster} from "@/components/ui/toaster";
import { BASE_URL } from "@/App";

function EditRecipe({setRecipes, recipe}){

  const [ isLoading, setIsLoading ] = useState(false);
  
  const[ inputs, setInputs] = useState({
    name: recipe.name,
    coffeegr: recipe.coffeegr,
    watergr: recipe.watergr,
    notes: recipe.notes,
  }); // We are editing inputs for our database

  // const toast = Toaster();

  const handleEditRecipe = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsLoading(true);
    try {

      const res = await fetch(BASE_URL + "/recipes/" + recipe.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if(!res.ok) {
        throw new Error(data.error);
      } // We stringify to communicate with the backend

    setRecipes((prevRecipes) => prevRecipes.map((u) => (u.id === recipe.id ? data : u)));

    }catch (error) {}
    finally{
      setIsLoading(false);
    }
  };

return (
<>

  <Dialog.Root initialFocusEl={() => ref.current}>

    <Dialog.Trigger asChild>
      <Button>Edit</Button>
    </Dialog.Trigger>

        <Dialog.Positioner>
          <Dialog.Content>

          <form onSubmit={handleEditRecipe}>
            <Dialog.Header>
              <Dialog.Title>Edit your recipe</Dialog.Title>
            </Dialog.Header>
            
            <Dialog.Body pb="4">

                <Field.Root>
                  <Field.Label>Coffee name</Field.Label>
                  <Input placeholder="coffee name" value={inputs.name}
                  onChange={(e) => setInputs((prev) => ({ ...prev, name: e.target.value }))}/>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Coffee gr.</Field.Label>
                  <Input placeholder="☕  coffee gr." value={inputs.coffeegr}
                  onChange={(e) => setInputs((prev) => ({ ...prev, coffeegr: e.target.value }))}/>
                </Field.Root>
                
                <Field.Root>
                  <Field.Label>Water gr.</Field.Label>
                  <Input placeholder="💧 water gr." value={inputs.watergr}
                  onChange={(e) => setInputs((prev) => ({ ...prev, watergr: e.target.value }))}/>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Notes</Field.Label>
                  <Input placeholder="📝 notes" value={inputs.notes}
                  onChange={(e) => setInputs((prev) => ({ ...prev, notes: e.target.value }))}/>
                </Field.Root>

            </Dialog.Body>
            
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button type="submit" isLoading={isLoading} // If the page isLoading the spinner spins
                >Update</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>

            </form>
          </Dialog.Content>
        </Dialog.Positioner>

  </Dialog.Root>
</>
);
};

export default EditRecipe;
