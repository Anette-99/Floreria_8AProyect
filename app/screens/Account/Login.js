import React, {useRef} from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Divider } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import LoginForm from '../../components/Account/LoginForm'
import Toast from 'react-native-toast-message'

export default function Login(){
    const toastRef = useRef()
    return(
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/sección.gif')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount/>
            </View>
            <Toast ref={toastRef}/>
            <Divider style = {styles.divider}/>
        </KeyboardAwareScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style = {styles.textRegister}>
            ¿Aun no tienes tu cuenta? {' '}
            <Text
                style = {styles.linkRegister}
                onPress={()=>navigation.navigate('register')}
            >
                Registrate aquí
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewContainer:{
        marginRight:40,
        marginLeft: 40
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    linkRegister:{
        color: '#008a81',
        fontWeight: 'bold'
    },
    divider:{
        backgroundColor: '#008a81',
        margin: 40
    }
})