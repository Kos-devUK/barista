import {Box, Button, Container, Flex,  } from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "./ui/color-mode";
import {IoMoon} from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateRecipe from "./CreateRecipe";
import HomeButton from "@/HomeButton";

const Navbar = ({setRecipes}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
    <Container maxW={"900px"}>
        <Box
            px={4}
            my={4}
            borderRadius={5}
            bg={useColorModeValue("gray.200", "gray.700")}>
            <Flex h='16' alignItems={"center"} justifyContent= 'space-between'>
            <HomeButton />
                <Flex
                alignItems={"center"}
                gap={3}>    
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                </Button>
                <CreateRecipe setRecipes={setRecipes}/>
                </Flex>
            </Flex>
        </Box>
    </Container>
    );
};

export default Navbar;