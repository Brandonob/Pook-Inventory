import React from 'react';
import { Box, Skeleton, VStack } from '@chakra-ui/react';

export const ProductCardLoadingState = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={4}
      p={8}
      className="bg-[rgb(90,103,250)]/80 backdrop-blur-sm"
      borderRadius="3xl"
    >
      {[...Array(6)].map((_, index) => (
        <VStack
          key={index}
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          p={4}
          className="bg-white dark:bg-gray-800"
          w="80"
          h="365px"
          _hover={{ boxShadow: 'xl', borderColor: 'rgb(90, 103, 250)' }}
        >
          <Skeleton height="200px" width="full" />
          <Skeleton height="20px" width="60%" mt={3} />
          <Skeleton height="20px" width="40%" />
          <Skeleton height="20px" width="full" />
        </VStack>
      ))}
    </Box>
  );
};