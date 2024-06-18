import { useState } from "react";
import { Container, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import nlp from "compromise";

const Index = () => {
  const [query, setQuery] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = () => {
    const doc = nlp(query);
    const topics = doc.topics().out('array');
    setAnalysis({ topics });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">User Query Analysis</Text>
        <Input 
          placeholder="Enter your query..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <Button onClick={handleAnalyze}>Analyze Query</Button>
        {analysis && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="lg">Identified Topics:</Text>
            <VStack spacing={2} align="start">
              {analysis.topics.map((topic, index) => (
                <Text key={index}>{topic}</Text>
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;