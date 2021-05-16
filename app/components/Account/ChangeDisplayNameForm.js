import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Button} from 'react-native-elements'

export default function ChangeDisplayNameForm(props){
    const {displayName, setShowModal, toastRef} = props
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)


    const onSubmit= ()=>{
        setError(null)
        if(!newDisplayName){
            setError('El nombre no puede ser vacio')
        } else if(displayName ===newDisplayName){
            setError('El nombre no puede ser igual al actual')
        } else{
            console.log('IT´S OK')
        }
    }

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
                onChange={(e)=>setNewDisplayName(e.nativeEvent.text)}
                errorMessage={error}
            />
            <Button
                title= 'Cambiar nombre'
                containerStyle={styles.tbnContainer}
                buttonStyle={styles.tbn}
                onPress={onSubmit}
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
