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
          alt="Sixtus Innocent"
          width="32"
          borderRadius="50%"
          border="1px"
          borderColor="black"
          mb="4"
          alignSelf="center"
        />
        <Flex justify="space-between">
          <Link
            href="https://linkedin.com/in/sixtus-innocent-6b3a17a2"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaLinkedin} fontSize="3xl" />
          </Link>
          <Link
            href="https://twitter.com/sixtusDev"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaTwitter} fontSize="3xl" />
          </Link>
          <Link
            href="https://www.instagram.com/sixtus.dev/"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaInstagram} fontSize="3xl" />
          </Link>
          <Link
            href="https://github.com/sixtusDev"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaGithub} fontSize="3xl" />
          </Link>
          <Link
            href="mailto:sixtusinno@gmail.com"
            outline="none"
            border="none"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Icon as={FaEnvelope} fontSize="3xl" />
          </Link>
        </Flex>
      </Flex>

      <Box w="40%" bg="cyan.400" lineHeight="7" padding="4">
        <Heading as="h1" fontSize="2xl" pb="4">
          Hi, I'm Sixtus Innocent.
        </Heading>
        <Text>
          I am a Software Engineer and a Computer Science graduate with over
          four years of experience.
        </Text>
        <Text>
          I started my programming journey back then in 2016. I specialize in
          developing qualitative, scalable and maintanable web based
          applications.
        </Text>
        <Text>
          Currently, I freelance but looking for opportunity to be a part of a
          team.
        </Text>
        <Text>
          I am highly skilled in JavaScript, Nodejs, React, MongoDB, HTML, CSS,
          Python, Redux, and many web stacks and technologies.
        </Text>
        <Text>Finally I love to code. 👨‍💻👨‍💻👨‍💻</Text>
        <br />
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
