import { Avatar, AvatarBadge, Flex, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { USERS } from '../../utils/constants';
import { createMessageArray } from '../../utils/helper';
import ChatInput from './ChatInput'
import MessageList from './MessageList';

const ChatWidget = () => {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);
    const messageRef = useRef(null);

    const handleInput = (event) => {
        if (event.type === "click" || (event.type === "keydown" && event.keyCode === 13)) {
            if (event.target.value === '') return;
            setMessages((prevState) => {
                return createMessageArray(prevState, USERS.ME, event.target.value);
            });
            setMessages((prevState) => {
                return createMessageArray(prevState, USERS.BOT, prevState[prevState.length - 1]?.message);
            });
        }
    }

    useEffect(() => {
        inputRef.current.focus();
        if (localStorage.getItem('chatMessages')) {
            setMessages(JSON.parse(localStorage.getItem('chatMessages')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        inputRef.current.value = '';
        messageRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, [messages])
    return (
        <Flex w='full' h="100vh" flexDirection={'column'} justifyContent='space-between'> 
            <Flex direction={'column'} flex={1} overflowY='auto'>
                <HStack mt={6} alignItems={'center'}>
                    <Avatar>
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                    <Text
                        fontSize="x-large"
                        color="purple.500"
                        >
                        {USERS.BOT}
                    </Text>
                </HStack>
                <MessageList ref={messageRef} messagesList={messages} />
            </Flex>
            <ChatInput ref={inputRef} handleInputChange={handleInput} />
        </Flex>

    )
}

export default ChatWidget





