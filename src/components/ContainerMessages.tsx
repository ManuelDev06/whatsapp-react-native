import { Text } from '@rneui/base';
import React from 'react'
import { StyleSheet, View } from 'react-native';

const ContainerMessages = () => {
  return (
    <View style={styles.container}>
        <Text>Hola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:20,
        backgroundColor: '#EEEAE2'
    }
});

export default ContainerMessages