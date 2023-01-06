import React from 'react'
import { Text, View } from 'react-native'
import HeaderChat from '../components/HeaderChat';
import ContainerMessages from '../components/ContainerMessages';
import InputMessage from '../components/InputMessage';

const ChatScreen = () => {
  return (
    <View style={{flexDirection: 'column', flex:1}}>
        <HeaderChat/>
        <ContainerMessages/>
        <InputMessage/>
    </View>
  )
}

export default ChatScreen