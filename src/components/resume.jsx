// Import Statements
import { Image, Container, Button, Heading, Box } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const Resume = () => {
  return (
    <Container maxW="container.lg">
      <Heading as="h1" mt="8" mb="14" color="teal.400" textAlign="center">
        RESUME
      </Heading>
      <Box pb="40">
        <Box borderWidth="1px">
          <Image src="./resume.svg" w="100%" />
        </Box>
        <Button as={ReactLink} mt="14" to="/">
          &larr; Home
        </Button>
      </Box>
    </Container>
  );
};

export default Resume;
