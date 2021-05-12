import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Button} from 'react-native-elements'
import Toast from 'react-native-toast-message'
import firebase from 'firebase';
import InfoUser from '../../components/Account/InfoUser'

export default function UserLogged(){
    const [userInfo, setUserInfo] = useState(null)
    const toastRef = useRef()
    useEffect(() =>{
        (async()=>{
            const user = await firebase.auth().currentUser
            setUserInfo(user)
        })()
    },[])
    return(
        <View style={styles.viewUserInfo}>
            {userInfo&&<InfoUser userInfo={userInfo}/>}
            <Text>AccountOptions...</Text>
            <Button
                title='Cerrar Sesión' 
                buttonStyle={styles.btnCloseSession}
                titleStyle={styles.btnCloseSessionText}
                onPress={()=>firebase.auth().signOut()}
            />
            <Toast ref={toastRef}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        minHeight: '100%',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    btnCloseSession:{
        marginTop: 25,
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#218876',
        borderTopWidth: 1,
        borderTopColor: '#e3e3e3',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
        paddingTop: 10,
        paddingBottom:10
    },
    btnCloseSessionText:{
        color: '#fff'
    }


})