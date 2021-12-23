// Import Statements
import React from "react";
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
          Below are some of my personal projects that I built. These projects
          are not just conventional projects but they are projects that that can be replicated to 
          solve real world problems. 😊.
        </Text>
      </Box>
      <Box pb="40">
        <Box borderColor="blackAlpha.500" borderWidth="1px" mb="14">
          <Image src="./project1.png" w="100%" />
          <Box p="4">
            <Text as="h2" color="cyan.400" textAlign="center" mt="4" mb="6">
              BUS SEAT RESERVATION APPLICATION
            </Text>
            <Text as="p">
              I built a fully functional bus seat reservation application. The
              applications functionalities include:
            </Text>
            <br />
            <Text>&bull; Users can sign in and sign out (authentication).</Text>
            <Text>
              &bull; Users can search for available trip schedules based on
              their departure location, arrival location, and departure date.
            </Text>
            <Text>
              &bull; Users can book a ticket by selecting number of passengers
              (child or adult), and then choose their desired seat numbers and
              then book and pay for their ticket.
            </Text>
            <Text mb="6">
              &bull; Users receives email containing their receipt of payment,
              and their travel details.
            </Text>
            <Flex justify="space-between">
              <Link
                href="https://bus-seat-reservation-app.netlify.app/"
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
            <Text as="p">
              Testing students using only the multiple choice question type in
              Computer Based Testing is not the efficient method because it
              breeds more room for guess work. I now came up with a solution by
              building a CBT app that offers a two range of question types which
              are Free Text Area (fill in the blanks) and muiltiple choice
              question type.
            </Text>
            <br />
            <Text mb="6">
              This app enables the examiner to set questions that can include
              both multiple choice and free text area question type.
            </Text>
            <Flex justify="space-between">
              <Link
                href="https://test-taking-app.netlify.app/"
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
