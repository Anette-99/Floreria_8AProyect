import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading(props){
    const { isVisible, text } = props
    return(
        <Overlay
            isVisible = {isVisible}
            animationType = 'slide'
            windowBackgroundColor = 'rgba(0, 0, 0, 0.5'
            overlayBackgroundColor = 'transparent'
            overlayStyle = {styles.overlay}
            
        >
          <View>
              <ActivityIndicator size='large' color='#00534f'/>
              {text && <Text style={styles.text}>{text}</Text>}
              </View>  
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:190,
        backgroundColor: '#fcfcfc',
        borderColor: '#00534f',
        borderWidth: 3,
        borderRadius: 8
    },
    text:{
        color:'#3d2800',
        textTransform: 'uppercase',
        marginTop: 9,
        textAlign: 'center'
    }
})