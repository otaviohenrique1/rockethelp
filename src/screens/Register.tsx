import React from 'react'
import { VStack } from "native-base";
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />
      <Input
        placeholder="Numero do patrimônio"
        mt={4}
      />
      <Input
        placeholder="Descrição do prblema"
        flex={1} mt={5} multiline
        textAlignVertical="top"
      />
      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
}

