import { Box, Button, Card, Flex, Heading } from "@chakra-ui/react";
import EditRecipe from "./EditRecipe";
import { BASE_URL } from "@/App";
import { Toaster, toaster } from "@/components/ui/toaster";

const RecipeCard = ({recipe, setRecipes}) => {
  const handleDeleteRecipe = async () =>{
    try {
      const res = await fetch(BASE_URL + "/recipes/" + recipe.id, {
        method: "DELETE", 
      });
      const data = await res.json();
      if(!res.ok){
        throw new Error(data.error)
      };
      setRecipes((prevRecipes) => prevRecipes.filter((u) => u.id !== recipe.id));
      toaster.warning({
        title: "Recipe deleted",
        description: "You have deleted your recipe",
      });
    } catch (error){
      toaster.error({
        title: "An error occured",
      });
    };
  };
  
  return (
    <Card.Root width="320px"
    backgroundSize="cover"
    backgroundPosition="center"
    color="whiteAlpha.950"
    p={4}  
    >
      <Toaster/>
      <Card.Body gap="2">

        <Heading justifyContent={"center"}>{recipe?.name}</Heading>

        <Flex justifyContent={"space-between"} >
        <Box>
            <Card.Description>🫘 {recipe?.coffeegr}gr</Card.Description>
          </Box>
          <Box>
            <Card.Description>💧 {recipe?.watergr}gr</Card.Description>
          </Box>
          </Flex>

          <Box>
            <Card.Description>📝 {recipe?.notes}</Card.Description>
          </Box>          
      </Card.Body>
      
      <Card.Footer justifyContent="flex-end">
        <EditRecipe recipe={recipe} setRecipes={setRecipes}/>
        <Button onClick={handleDeleteRecipe}>Delete</Button>
      </Card.Footer>
       
    </Card.Root>
  );
};

export default RecipeCard;
