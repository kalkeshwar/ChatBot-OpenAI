import React ,{useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ChatDivison from '../components/ChatDivison'
import DividerLine from '../components/DividerLine'
import { Flex } from '@chakra-ui/react'

const Chat = () => {

  let [messages,setMessages]=useState([{
    role:"assistant",
    content:"Hey! You can Ask anything here ,I will try my level best to give the Solutions."
  },
  {
    role:"user",
    content:"what is programming language"
  }
])

const [currentMessage,setCurrentMessage]=useState("")

  return (
    <Flex w="100%" h="100vh" flexDirection="column">
        <Header />
        <DividerLine/>
        <ChatDivison messages={messages} setMessages={setMessages} currentMessage={currentMessage}/>
        <DividerLine/>
        <Footer messages={messages} setMessages={setMessages} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage}/>
    </Flex>
  )
}

export default Chat