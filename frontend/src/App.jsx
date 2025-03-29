import { Stack, Container,Text} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';

function App() {

    return (
      <Stack minH={"100vh"}>
        <Navbar />
        <Container maxW={"1200px"} my={4} alignItems={"center"}>
          <Text 
            fontSize={{base:"3xl", md:"50"}}
            fontWeight={'bold'}
            letterSpacing={'2px'}
            textAlign={"center"}
            mb={8}>

            <Text as={'span'} bgColor={'red.300'} bgClip={'text'}>Hey U Hipsta Barista</Text>
          </Text>
          <UserGrid />
        </Container>
      </Stack>
  );
};

export default App;