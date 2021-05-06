import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'

export default function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())

    const onSubmit = () => {
        console.log(formData)
        console.log(validateEmail(formData.email))
    }

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electronico'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'email')}
                rightIcon={<Icon 
                    type='material-community' 
                    name='at' 
                    iconStyle={styles.iconRight}
                />}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e)=>onChange(e, 'password')}
                rightIcon={<Icon 
                    type='material-community' 
                    name={showPassword ? 'eye-off-outline' : 'eye-outline' }
                    iconStyle={styles.iconRight}
                    onPress={()=> setShowPassword(!showPassword)}
            />}
            />
            <Input
                placeholder='Repetir Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={(e)=>onChange(e, 'repeatPassword')}
                rightIcon={<Icon 
                    type='material-community' 
                    name={showRepeatPassword ? 'eye-off-outline' : 'eye-outline' } 
                    iconStyle={styles.iconRight}
                    onPress={()=> setShowRepeatPassword(!showRepeatPassword)}
            />}
            />
            <Button
                title='Únete'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
    
}


const styles = StyleSheet.create({
    formContainer:{
        marginTop: 25,
        alignItems: 'center'
    },
    inputForm:{
        width: '100%',
        marginTop: 20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '80%'
    },
    btnRegister:{
        backgroundColor: '#008a81'
    },
    iconRight:{
        color: '#c1c1c1'
    }
})