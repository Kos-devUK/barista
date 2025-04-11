import {Box, Button, Container, Flex, Text,  } from "@chakra-ui/react";
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

            <Flex h='16' alignItems={"center"} justifyContent={'space-between'}>

                {/* Left side */}
                <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
                <HomeButton />
                <Box><Text fontSize={'x-large'}> Barista's Journal</Text></Box>
                </Flex>

                {/* Right side */}
                <Flex
                alignItems={"center"}
                gap={3}>
                <Button onClick={toggleColorMode} width="50px" height="50px">
                {colorMode === "light" ? <IoMoon /> : <LuSun/>}
                </Button>
                <CreateRecipe setRecipes={setRecipes}/>
                </Flex>
                
            </Flex>
        </Box>
    </Container>
    );
};

export default Navbar;