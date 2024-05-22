import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Flex, Link, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="teal.500" color="white" py={4}>
          <Flex maxW="container.xl" mx="auto" px={4} align="center" justify="space-between">
            <Heading as="h1" size="lg">
              Auto-Responder
            </Heading>
            <Flex as="nav">
              <Link href="/" px={2} py={1} rounded="md" _hover={{ bg: "teal.600" }}>
                Home
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Box as="main" flex="1">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </Box>
        <Box as="footer" bg="teal.500" color="white" py={4} textAlign="center">
          © {new Date().getFullYear()} Auto-Responder. All rights reserved.
        </Box>
      </Flex>
    </Router>
  );
};

export default App;