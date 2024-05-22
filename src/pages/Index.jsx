import { Container, VStack, Text, Box, Heading, Flex, Icon, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Auto-reply to WhatsApp or WA Business",
  "Individually customizable",
  "Many automation tools included",
  "React to all messages when you're busy",
  "Send replies to specific messages",
  "Welcome message for new chats",
  "Live answer replacements (time, name...)",
  "Multiple replies in one rule",
  "Works with contacts, groups, and unknown numbers",
  "Ignore and specify contacts and groups",
  "Automatic scheduler with delay",
  "AI with ChatGPT/GPT-3/GPT-4 or Dialogflow.com",
  "Backup rules for easy recovery",
  "Personal agent for your business",
  "Auto Assign Label: Automatically label numbers through the chatbot.",
  "Auto follow-up prospect",
  "Bulking message with image and video",
  "Auto send message with image and video",
  "Converse: Activate number with the automatic warm-up feature.",
  "Support Malay language and 50 other languages"
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Personal Auto-Responder Website
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Automate your messaging with ease and efficiency.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Features and Advantages
          </Heading>
          <List spacing={3}>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {feature}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;