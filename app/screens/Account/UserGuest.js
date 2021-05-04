import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest(){
    const navigation = useNavigation()
    console.log(navigation)

    return(
        <ScrollView style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../../../assets/img/sección.gif')}
            />
            <Text style={styles.title}> Ingresa a tu perfil</Text>
            <Text style={styles.description}>
                Visualiza las mejores florerias y comenta tu experiencia
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    title='Ver tu perfil'
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={()=>navigation.navigate('Login')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    stretch:{
        width:'100%',
        height:150,
        resizeMode:'contain',
        marginBottom: 40,

    },
    title: {
        fontWeight:'bold',
        fontSize:19,
        marginBottom:10,
        textAlign:'center'
    },
    description:{
        marginBottom:20,
        textAlign:'center'
    },
    viewBtn:{
        flex:1,
        alignItems:'center'
    },
    btnStyle:{
        backgroundColor:'#3d2800'
    },
    btnContainer:{
        width:'70%'
    }
})