import {Box, Button, Container, Flex,  } from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "./ui/color-mode";
import {IoMoon} from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateRecipe from "./CreateRecipe";

const Navbar = ({setRecipes}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return <Container maxW={"900px"}>
        <Box
            px={4}
            my={4}
            borderRadius={5}
            bg={useColorModeValue("gray.200", "gray.700")}
        >
            <Flex h="16"
                alignItems={"center"}
                justifyContent={"space-between"}
            >

                {/* Left side */}
                <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={3}                    
                >
                <img src="/man.png" alt="man" width={50} height={50}/>
                </Flex>

                {/* Right side */}
                <Flex
                alignItems={"center"}
                gap={3}           
                >    
                </Flex>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                </Button>
                <CreateRecipe setRecipes={setRecipes}/>
            </Flex>
        </Box>

    </Container>
};

export default Navbar;