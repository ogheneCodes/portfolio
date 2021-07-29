// Import Statements
import React from "react";
import { Box, Heading, Text, Image, Flex, Link, Icon } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const hoverStyle = {
    color: "white",
    backgroundColor: "black",
  };
  return (
    <Box
      d="flex"
      color="white"
      w="100%"
      h="100vh"
      bgGradient="linear(to-tr, cyan.400, cyan.500, cyan.900)"
      alignItems="center"
      justifyContent="center"
    >
      <Flex flexDir="column" mr="10" w="15%">
        <Image
          src="./six.jpg"
          width="32"
          borderRadius="50%"
          border="1px"
          borderColor="black"
          mb="4"
          alignSelf="center"
        />
        <Flex justify="space-between">
          <Link
            href="https://nkedin.com/in/sixtus-innocent-6b3a17a2"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaLinkedin} fontSize="3xl" />
          </Link>
          <Link
            href="https://nkedin.com/in/sixtus-innocent-6b3a17a2"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaTwitter} fontSize="3xl" />
          </Link>
          <Link
            href="https://nkedin.com/in/sixtus-innocent-6b3a17a2"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaInstagram} fontSize="3xl" />
          </Link>
          <Link
            href="https://nkedin.com/in/sixtus-innocent-6b3a17a2"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaGithub} fontSize="3xl" />
          </Link>
        </Flex>
      </Flex>

      <Box w="40%" bg="cyan.400" lineHeight="7" padding="4">
        <Heading as="h1" fontSize="2xl" pb="4">
          Hi, I'm Sixtus Innocent
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          mollitia est deleniti amet culpa ducimus ad vero velit, nobis,
          reiciendis cumque modi facilis incidunt? Culpa similique animi
          doloribus quam ad?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          tempore nemo aperiam eaque magnam quod veniam accusantium quidem sed
          maxime!
        </Text>
        <Flex color="black" alignItems="center" justifyContent="center">
          <Link
            as={ReactLink}
            to="/projects"
            mr="3"
            pl="2"
            pr="2"
            _hover={hoverStyle}
          >
            Project
          </Link>
          <Link
            as={ReactLink}
            to="/resume"
            mr="3"
            pl="2"
            pr="2"
            _hover={hoverStyle}
          >
            Resume
          </Link>
          <Link as={ReactLink} to="/blog" pl="2" pr="2" _hover={hoverStyle}>
            Blog
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
