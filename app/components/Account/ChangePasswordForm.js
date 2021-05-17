import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Input, Button, Icon} from 'react-native-elements'
import {isEmpty, size} from 'lodash'


export default function ChangePasswordForm(props) {
    const {setShowModal, toastRef} = props
    const [newPassword, setNewPassword] = useState(null)
    const [currentPassword, setCurrentPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [errorNewPassword, setErrorNewPassword] = useState(null)
    const [errorCurrentPassword, setErrorCurrentPassword] = useState(null)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const onSubmit= ()=>{
        setErrorNewPassword(null)
        setErrorCurrentPassword(null)
        setErrorConfirmPassword(null)
        let isValid = true


        if(isEmpty(currentPassword)) {
            setErrorCurrentPassword('Debes ingresar tu contraseña actual')
            isValid = false
        } 
        if(size(newPassword) < 6) {
            setErrorNewPassword('Debes ingresar una nueva contraseña con un mínimo de 6 caracteres')
            isValid = false
        }
        if(size(confirmPassword) < 6) {
            setErrorConfirmPassword('Debes ingresar una nueva confirmación de tu contraseña con un mínimo de 6 caracteres')
            isValid = false
        } 
        if(newPassword !== confirmPassword) {
            setErrorNewPassword('La nueva contraseña y la confirmación no son iguales')
            setErrorConfirmPassword('La nueva contraseña y la confirmación no son iguales')
            isValid = false
        } 
        if(newPassword === currentPassword) {
            setErrorCurrentPassword('Debes de ingresar una contraseña diferente a la actual')
            setErrorNewPassword('Debes de ingresar una contraseña diferente a la actual')
            setErrorConfirmPassword('Debes de ingresar una contraseña diferente a la actual')
            isValid = false
        }
        return isValid   
}

    return (
        <View style={styles.form}>
            <Input
                placeholder='Ingresa tu contraseña actual'
                containerStyle={styles.input}
                defaultValue={currentPassword}
                onChange={(e)=>setCurrentPassword(e.nativeEvent.text)}
                errorMessage={errorCurrentPassword}
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
            <Input
                placeholder='Ingresa tu nueva contraseña'
                containerStyle={styles.input}
                defaultValue={newPassword}
                onChange={(e) => setNewPassword(e.nativeEvent.text)}
                errorMessage={errorNewPassword}
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
            <Input
                placeholder='Confirma tu nueva contraseña'
                containerStyle={styles.input}
                defaultValue={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.nativeEvent.text)}
                errorMessage={errorCurrentPassword}
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
                title= 'Cambiar contraseña'
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
