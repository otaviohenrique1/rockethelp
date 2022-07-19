import React from 'react'
import { Heading, HStack, IconButton, StyledProps, useTheme } from "native-base";
import { CaretLeft, SignOut } from "phosphor-react-native";
import Logo from "../assets/logo_secondary.svg";

type Props = StyledProps & { 
  title: string;
}

export function Header({ title, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <HStack
      w="full" justifyContent="space-between" alignItems="center"
      bg="gray.600" pt={12} pb={6}
    >
      <IconButton icon={<CaretLeft size={24} color={colors.gray[200]} />} />
      <Heading
        color="gray.100" textAlign="center" fontSize="lg" flex={1} ml={-6}
      >{title}</Heading>
    </HStack>
  )
}

