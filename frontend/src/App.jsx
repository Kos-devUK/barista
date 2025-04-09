import { Stack, Container,Text} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import RecipeGrid from './components/RecipeGrid';
import { useState } from 'react';

// for local hosting -> export const BASE_URL = "http://127.0.0.1:5000/api";
export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
  const [recipes, setRecipes] = useState ([]);
    return (
      <Stack minH={"100vh"}>
        
        <Navbar setRecipes={setRecipes}/>
        
        <Container maxW={"1200px"} my={4} alignItems={"center"}>
          <Text 
            fontSize={{base:"3xl", md:"50"}}
            fontWeight={'bold'}
            letterSpacing={'2px'}
            textAlign={"center"}
            mb={8}>
            <Text as={'span'} bgColor={'red.300'} bgClip={'text'}>☕Hey U Hipsta Barista☕</Text>
          </Text>
          
          <RecipeGrid recipes={recipes} setRecipes={setRecipes}/>
        </Container>
      </Stack>
  );
};

export default App;