import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Button} from 'react-native-elements'
import firebase from 'firebase'

export default function ChangeDisplayNameForm(props){
    const {displayName, setShowModal, toastRef, setReloadUserInfo} = props
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const onSubmit= ()=>{
        setError(null)
        if(!newDisplayName){
            setError('El nombre no puede ser vacio')
        } else if(displayName === newDisplayName){
            setError('El nombre no puede ser igual al actual')
        } else{
            setIsLoading(true)
            const update = {
                displayName: newDisplayName
            }
            firebase
                .auth()
                .currentUser.updateProfile(update)
                .then(()=>{
                    console.log('Excelente desde firebase')
                    setIsLoading(false)
                    setReloadUserInfo(true)
                    setShowModal(false)
                })
                .catch(()=>{
                    console.log('Error al actualizar el nombre')
                    setIsLoading(false)
                })
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
                loading={isLoading}
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
