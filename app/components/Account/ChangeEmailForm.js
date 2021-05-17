import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Button, Icon} from 'react-native-elements'
import { validateEmail } from '../../utils/validation'
import {isEmpty} from 'lodash'
import firebase from 'firebase'

export default function ChangeEmailForm(props){
    const {email, setShowModal, toastRef, setReloadUserInfo} = props
    const [newEmail, setNewEmail] = useState(email)
    const [password, setPassword] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const onSubmit= ()=>{
        setErrorEmail(null)
        setErrorPassword(null)
        let isValid = true
        if(!validateEmail(newEmail)){
            setErrorEmail('Debes ingresar un Email valido')
            isValid = false
        } else if(newEmail === email){
            setErrorEmail('Debes ingresar un Email diferente al actual')
            isValid = false
        } if(isEmpty(password)){
            setErrorPassword('Debes ingresar tu contraseña')
            isValid = false
        }    
}

    return (
        <View style={styles.form}>
            <Input
                placeholder='Ingresa el nuevo correo'
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'email',
                    color:'#218876'
                }}
                defaultValue={email || ''}
                keyboardType='email-address'
                onChange={(e)=>setNewEmail(e.nativeEvent.text)}
                errorMessage={errorEmail}
            />
            <Input
                placeholder='Ingresa tu contraseña'
                containerStyle={styles.input}
                defaultValue={password || ''}
                onChange={(e)=>setPassword(e.nativeEvent.text)}
                errorMessage={errorPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={ showPassword ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={{color:'#218876'}}
                        onPress={()=> setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title= 'Cambiar Email'
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
