import React from 'react' 
import {StyleSheet, View, Text} from 'react-native'
import { Avatar } from 'react-native-elements'

export default function InfoUser(props){
    const {userInfo:{photoURL, displayName, email}} = props
    return(
        <View style={styles.viewUserInfo}>
            <Avatar
                title='ICR'
                rounded
                size='large'
                containerStyle={styles.userInfoAvatar}
                source={
                    photoURL ? { uri:photoURL } : require('../../../assets/img/avatar-default.jpg')
                }
            />
            <View>
                <Text style={styles.displayName}>
                    {displayName ? displayName : 'Invitado'}
                </Text>
                <Text>{email ? email : 'Entrada a través de otro sitio'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis:'row',
        backgroundColor:'#f3f3f3',
        paddingTop: 30,
        paddingBottom: 30
    },
    userInfoAvatar:{
        marginTop: 20,
        backgroundColor:'#00666e'
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom:5
    }
})