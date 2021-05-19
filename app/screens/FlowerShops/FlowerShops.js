import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Icon} from 'react-native-elements'
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/app'
import { useNavigation } from '@react-navigation/native'


export default function FlowerShops(){
    const [user, setUser] = useState(null)
    const navigation = useNavigation()
    console.log(navigation)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((userInfo)=>{
            setUser(userInfo)
        })
    }, [])

    return(
        <View style={styles.viewCur}>
            <Text> Florerias..</Text>
            {user && (
            <Icon
                type='material-community'
                name='plus'
                color='#218876'
                reverse={true}
                containerStyle={styles.btnContainer}
                onPress={()=>navigation.navigate('add-flowershop')}
            />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    viewCur:{
        flex: 1,
        backgroundColor:'#fff'
    },
    btnContainer:{
        position: 'absolute',
        bottom: 10,
        right: 10,
        shadowColor: 'black',
        shadowOffset:{width: 2, height: 2},
        shadowOpacity: 0.5
    }
})