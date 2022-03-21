import { Box } from '@chakra-ui/react';
import React, { forwardRef } from 'react'
import ChatMessage from './ChatMessage'

const MessageList = forwardRef((props, ref) => {
    const { messagesList } = props;
    console.log(messagesList);
    return (
        <Box ref={ref}>
            {messagesList?.map(({ idx, from, message, timestamp, avatar }) => {
                return <ChatMessage idx={idx} from={from} message={message} timestamp={timestamp} avatar={avatar} />
            })}
        </Box>
    )
})

export default MessageList