import { Flex, IconButton, Input } from '@chakra-ui/react'
import { IoSend } from 'react-icons/io5'
import React, { forwardRef } from 'react'

const ChatInput = forwardRef((props, ref) => {
    const { handleInputChange } = props;
    return (
        <Flex pl='4' pr={2} py={2} borderTopColor='gray.100' borderTopWidth={1}>
            <Input variant={'unstyled'} placeholder="Type your message" onKeyDown={handleInputChange}
                ref={ref} />
            <IconButton
                colorScheme='blue'
                aria-label='Send Message'
                variant={'ghost'}
                icon={<IoSend />}
                onClick={handleInputChange}
            />
        </Flex>
    )
})

export default ChatInput