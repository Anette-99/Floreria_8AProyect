import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import {Input, Button} from 'react-native-elements'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default function AddFlowerShopForm(props) {
        const {toastRef, setIsLoading} = props
        const [nameFlor, setNameFlor] = useState(null)
        const [direccion, setDireccion] = useState(null) 
        const [description, setDescription] = useState(null) 
        const [errorFlor, setErrorFlor] = useState(null) 
        const [errorDireccion, setErrorDireccion] = useState(null) 
        const [errorDescripcion, setErrorDescripcion] = useState(null) 
    
        const onSubmit = ()=>{
            
            if(!nameFlor && !direccion && !description){
                setErrorFlor('Nombre del Floreria es requerida')
                setErrorDireccion('La direccion es requerida')
                setErrorDescripcion('Descripcion es requerido')
            }else if(!direccion && !description){
                setErrorFlor(null)
                setErrorDireccion('La direccion es requerida')
                setErrorDescripcion('Descripcion es requerido')
            }else if(!nameFlor && !description){
                setErrorFlor('Nombre del Floreria es requerida')
                setErrorDireccion(null)
                setErrorDescripcion('Descripcion es requerido')
            }else if(!direccion && !nameFlor){
                setErrorFlor('Nombre del Floreria es requerida')
                setErrorDireccion('La direccion es requerida')
                setErrorDescripcion(null)
            }else if(!nameFlor){
                setErrorFlor('Nombre del Floreria es requerida')
                setErrorDireccion(null)
                setErrorDescripcion(null)
            }else if(!direccion){
                setErrorFlor(null)
                setErrorDireccion('La direccion es requerida')
                setErrorDescripcion(null)
            }else if(!description){
                setErrorFlor(null)
                setErrorDireccion(null)
                setErrorDescripcion('Descripcion es requerido')
            }else{
                setErrorFlor(null)
                setErrorDireccion(null)
                setErrorDescripcion(null)
                console.log('Nombre de la floreria',nameFlor)
                console.log('Direccion de la floreria',direccion)
                console.log('Descripcion de la floreria',description)
            }
        }
    return (
            <View style={styles.FormView}>
            <Input
                placeholder='Nombre de la Floreria'
                placeholderTextColor="#218876"
                containerStyle={styles.input}
                onChange={(e)=>setNameFlor(e.nativeEvent.text)}
                errorMessage={errorFlor}
            />
            <Input
                placeholder='Dirección'
                placeholderTextColor="#218876"
                containerStyle={styles.input}
                onChange={(e)=>setDireccion(e.nativeEvent.text)}
                errorMessage={errorDireccion}
                rightIcon={{
                    type:'material-community',
                    name:'google-maps',
                    color: '#218876'
                }}
            />
                <Input
                placeholder='Descripción'
                placeholderTextColor="#218876"
                multiline={true}
                containerStyle={styles.input}
                onChange={(e)=>setDescription(e.nativeEvent.text)}
                errorMessage={errorDescripcion}
            />
            <Button
                title= 'Agregar Floreria'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10
    },
    FormView:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#fff'
    },
    btnContainer:{
        marginTop:20,
        width:'100%'
    },
    btn:{
        backgroundColor: '#218876'
    }
})
