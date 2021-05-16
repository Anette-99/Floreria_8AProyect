import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Input, Button} from 'react-native-elements'

export default function ChangeDisplayNameForm(props){
    const {displayName, setShowModal, toastRef} = props
    return (
        <View style={styles.form}>
            <Input
                placeholder='Nombre y Apellidos'
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'account-circle-outline',
                    color:'#218876'
                }}
                defaultValue={displayName || ''}
            />
            <Button
                title= 'Cambiar nombre'
                containerStyle={styles.tbnContainer}
                buttonStyle={styles.tbn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    input:{
        marginBottom: 10
    },
    tbnContainer:{
        marginTop: 10,
        width: '95%'
    },
    tbn:{
        backgroundColor: '#218876'
    }
})
