import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { USERS } from '../../utils/constants';

const ChatMessage = (props) => {
    const { idx, from, message, timestamp, avatar } = props;
    const isMe = from === USERS.ME;
    const flexAlignment = isMe ? "flex-end" : "flex-start";
    const bottomLeftRadius = isMe ? 0 : 32;
    const bottomRightRadius = isMe ? 32 : 0;
    return (
        <HStack key={`${idx}_hstack`} w="full" justifyContent={flexAlignment} alignSelf={flexAlignment}>

            <VStack key={`${idx}_vstack`} mt={6} alignItems={isMe ? "flex-end" : "flex-start"}>
                <Box
                    key={`${idx}_box`}
                    bg={isMe ? "blue.50" : "gray.100"}
                    px={6}
                    py={4}
                    maxW={80}
                    borderTopLeftRadius={32}
                    borderTopRightRadius={32}
                    borderBottomLeftRadius={bottomLeftRadius}
                    borderBottomRightRadius={bottomRightRadius}
                >
                    {message}
                </Box>
                <Text
                    key={`${idx}_txt`}
                    fontSize="xs" color="gray">
                    {timestamp}
                </Text>
            </VStack>
            <Avatar
                key={`${idx}_avatr`}
                name={avatar?.name} src={avatar?.src} />
        </HStack>
    )
}

export default ChatMessage