import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import {Input, Button, Image, Icon, Avatar} from 'react-native-elements'
import Modal from '../Modal'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'

export default function AddFlowerShopForm(props) {
        const {toastRef, setIsLoading} = props
        const [nameFlor, setNameFlor] = useState(null)
        const [direccion, setDireccion] = useState(null) 
        const [description, setDescription] = useState(null) 
        const [errorFlor, setErrorFlor] = useState(null) 
        const [errorDireccion, setErrorDireccion] = useState(null) 
        const [errorDescripcion, setErrorDescripcion] = useState(null)
        const [isVisibleMap, setIsVisibleMap] = useState(false) 
    
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
                setIsVisibleMap={setIsVisibleMap}
            />
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
                    color: '#4a2e00',
                    onPress:()=> setIsVisibleMap(true)
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
            <UploadImage/>
            <Button
                title= 'Agregar Floreria'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />
            <Map
                isVisibleMap={isVisibleMap}
                setIsVisibleMap={setIsVisibleMap}
            />
        </View>

    )
}

function Map(props){
    const {isVisibleMap, setIsVisibleMap} = props
    const [location, setLocation] = useState(null)

    useEffect(() => {
        (async()=>{
            const resultPermissions = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
            console.log(resultPermissions)
            const  statusPermissions = resultPermissions.permissions.locationForeground.status
            if(statusPermissions==='granted'){
                const locate = await Location.getCurrentPositionAsync({})
                console.log(locate)
                setLocation({
                    latitude: locate.coords.latitude,
                    longitude: locate.coords.longitud
                })
            }
        })()
    }, [])    

    return(
        <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
            <Text>Mapa.....</Text>
        </Modal>
    )
}

function UploadImage() {
    return(
        <ScrollView
            horizontal
            style={styles.viewImage}
        >
            <Icon
                type='material-community'
                name='camera'
                color='#4a2e00'
                containerStyle={styles.containerIcon}
            />

        </ScrollView>
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
        backgroundColor: '#4a2e00'
    },
    viewImage:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },
    containerIcon:{
        alignItems:'center',
        justifyContent:'center',
        marginRight: 10,
        height: 70,
        width:79,
        backgroundColor:'#e3e3e3'
    }
})
