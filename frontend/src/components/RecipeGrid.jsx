import { Grid } from "@chakra-ui/react";
import { RECIPES } from "./libraryTest/library";
import RecipeCard from "./RecipeCard";



const RecipeGrid = () => {

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Grid>
  );
};

export default RecipeGrid;
