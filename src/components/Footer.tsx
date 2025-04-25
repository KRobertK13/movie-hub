import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiTypescript, SiChakraui } from "react-icons/si";

const Footer = () => {
  return (
    <Box py={6} borderTopWidth="1px">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        px={0}
        gap={5}
      >
        {/* Left section: Copyright */}
        <Text fontSize="sm">
          © {new Date().getFullYear()} Made by Róbert Kristóf Kovács. All rights
          reserved.
        </Text>

        {/* Middle section: Technologies used */}
        <Stack direction="row" align="center" gap={5}>
          <HStack gap={1}>
            <SiTypescript />
            <Text fontSize="sm">TypeScript</Text>
          </HStack>
          <HStack gap={1}>
            <FaReact />
            <Text fontSize="sm">React</Text>
          </HStack>
          <HStack gap={1}>
            <SiChakraui />
            <Text fontSize="sm">ChakraUI</Text>
          </HStack>
        </Stack>

        <Link href="https://www.themoviedb.org/" fontSize="sm">
          Data from The Movie Database
        </Link>

        <HStack>
          <Text fontSize="sm">Contact me </Text>
          <Link href="https://www.linkedin.com/in/krk13/">
            <IconButton as="span" aria-label="LinkedIn" variant="ghost">
              {<FaLinkedin />}
            </IconButton>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
