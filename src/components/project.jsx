// Import Statements
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const Project = () => {
  return (
    <Container maxW="container.sm">
      <Box mt="8" mb="14">
        <Heading as="h1" mb="6" color="teal.400" textAlign="center">
          PROJECTS
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et atque
          alias nulla necessitatibus, dolores culpa modi consectetur odio
          inventore rerum?
        </Text>
      </Box>
      <Box pb="40">
        <Box borderColor="blackAlpha.500" borderWidth="1px" mb="14">
          <Image src="./project1.png" w="100%" />
          <Box p="4">
            <Text as="h2" color="cyan.400" textAlign="center" mt="4" mb="6">
              BUS SEAT RESERVATION APPLICATION
            </Text>
            <Text as="p" textAlign="justify" mb="6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              atque blanditiis praesentium soluta rem repellendus distinctio
              voluptas alias animi, pariatur accusantium natus impedit dicta
              incidunt saepe labore quaerat a dolores repellat hic! Veritatis
              molestias debitis quos ab velit quae, quibusdam deserunt
              accusantium eveniet vero, expedita, doloribus pariatur itaque
              nostrum sapiente!
            </Text>
            <Flex justify="space-between">
              <Link
                href="https://bus-seat-reservation.herokuapp.com"
                textDecor="underline"
                _hover={{ color: "cyan.400" }}
                isExternal
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/sixtusDev/BUS-SEAT-RESERVATION-APPLICATION"
                textDecor="underline"
                _hover={{ color: "cyan.400" }}
                isExternal
              >
                Github Repo
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box borderColor="blackAlpha.500" borderWidth="1px">
          <Image src="./project2.png" w="100%" />
          <Box p="4">
            <Text as="h2" color="cyan.400" textAlign="center" mt="4" mb="6">
              ONLINE TEST AND EXAM TAKING APPLICATION
            </Text>
            <Text as="p" textAlign="justify" mb="6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              atque blanditiis praesentium soluta rem repellendus distinctio
              voluptas alias animi, pariatur accusantium natus impedit dicta
              incidunt saepe labore quaerat a dolores repellat hic! Veritatis
              molestias debitis quos ab velit quae, quibusdam deserunt
              accusantium eveniet vero, expedita, doloribus pariatur itaque
              nostrum sapiente!
            </Text>
            <Flex justify="space-between">
              <Link
                href="http://online-test-taking-app.herokuapp.com/"
                textDecor="underline"
                _hover={{ color: "cyan.400" }}
                isExternal
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/sixtusDev/online-test-taking-application"
                textDecor="underline"
                _hover={{ color: "cyan.400" }}
                isExternal
              >
                Github Repo
              </Link>
            </Flex>
          </Box>
        </Box>
        <Button as={ReactLink} mt="14" to="/">
          &larr; Home
        </Button>
      </Box>
    </Container>
  );
};

export default Project;
