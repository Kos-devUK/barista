import { Box, Button, Card, Flex, Heading } from "@chakra-ui/react";
import EditRecipe from "./EditRecipe";

const RecipeCard = ({recipe}) => {
  return (
    <Card.Root width="320px"
    backgroundImage="url('/beans.png')"
    backgroundSize="cover"
    backgroundPosition="center"
    color="whiteAlpha.950"
    p={4}  
    >
      <Card.Body gap="2">

        <Heading justifyContent={"center"}>{recipe?.name}</Heading>

        <Flex justifyContent={"space-between"} >
        <Box>
            <Card.Description>☕ {recipe?.coffeegr}gr</Card.Description>
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
        <EditRecipe/>
        <Button>Delete</Button>
      </Card.Footer>
       
    </Card.Root>
  );
};

export default RecipeCard;
