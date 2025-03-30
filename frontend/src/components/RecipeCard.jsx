import { Box, Text } from "@chakra-ui/react";

const RecipeCard = ({recipe}) => {
  return (
        <Box>
            <Text>{recipe.name}</Text>
            <Text>☕ {recipe.coffeegr}g</Text>
            <Text>💧 {recipe.watergr}g</Text>
            <Text>📝 {recipe.notes}</Text>
        </Box>

  );
};

export default RecipeCard;
