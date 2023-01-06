import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const InputMessage = () => {

  const [message, setMessage] = useState('')

  return (
    <View style={styles.container}>
        <TextInput style={styles.inputMessage} onChangeText={setMessage} value={message}/>
        {message===''
            ?<TouchableOpacity style={styles.button}>
                <Icon name='camera-outline' size={23} color={'white'}/>
            </TouchableOpacity>
            :<TouchableOpacity style={styles.button}>
                <Icon name='send-outline' size={23} color={'white'}/>
            </TouchableOpacity>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0F0F0',
        flex:1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputMessage:{
        backgroundColor: 'white',
        width: '85%',
        height: 30,
        borderRadius: 10,
        padding: 5
    },
    button:{
        backgroundColor: '#128C7E',
        borderRadius: 23,
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default InputMessage