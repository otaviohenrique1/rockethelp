import React from 'react'
import { VStack, Text, Heading } from "native-base";

export default function SignIn() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} /* mt={6} */>
      <Heading color="gray.100" fontSize="6xl" mt={20} mb={6}>SignIn</Heading>
    </VStack>
  )
}

