import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, Dimensions} from 'react-native'
import {Input, Button, Image, Icon, Avatar} from 'react-native-elements'
import Modal from '../Modal'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'
import {map, size, filter} from 'lodash'
import MapView from 'react-native-maps'


//-------------Dimensiones para la imagen principal----
    const widthScreen = Dimensions.get("window").width
//-------Nombre y propiedades de nuestro form----------------
export default function AddFlowerShopForm(props) {
        const {toastRef, setIsLoading} = props
        const [nameFlor, setNameFlor] = useState(null)
        const [direccion, setDireccion] = useState(null) 
        const [description, setDescription] = useState(null) 
        const [errorFlor, setErrorFlor] = useState(null) 
        const [errorDireccion, setErrorDireccion] = useState(null) 
        const [errorDescripcion, setErrorDescripcion] = useState(null)
        const [isVisibleMap, setIsVisibleMap] = useState(false)
        const [locationFlowerShop, setLocationFlowerShop] = useState(null)
        const [imagesSelected, setImagesSelected] = useState([])

    
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
                <ImageFlowerShop
                    imageFlowerShop={imagesSelected[0]}
                />
                <Input
                    setIsVisibleMap={setIsVisibleMap}
                />
                <Input
                    placeholder='Nombre de la Floreria'
                    placeholderTextColor="#218876"
                    containerStyle={styles.input}
                    onChange={(e)=>setNameFlor(e.nativeEvent.text)}
                    errorMessage={errorFlor}
                    rightIcon={{
                        type: 'material-community',
                        name: 'flower',
                        color: '#4a2e00',
                        onPress:()=> setIsVisibleMap(true)
                    }}
                />
                <Input
                    placeholder='Dirección de la Floreria'
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
                    onChange={(e)=> setLocationFlowerShop(e.nativeEvent.text)}
                />
                <Input
                    placeholder='Descripción'
                    placeholderTextColor="#218876"
                    multiline={true}
                    containerStyle={styles.input}
                    onChange={(e)=>setDescription(e.nativeEvent.text)}
                    errorMessage={errorDescripcion}
                    rightIcon={{
                        type: 'material-community',
                        name:'border-color',
                        color: '#4a2e00',
                        onPress:()=> setIsVisibleMap(true)
                    }}
                />
                <UploadImage
                    toastRef={toastRef}
                    imagesSelected={imagesSelected}
                    setImagesSelected={setImagesSelected}
                />
                <Button
                    title= 'Agregar Floreria'
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btn}
                    onPress={onSubmit}
                />
                <MapFloreria
                    isVisibleMap={isVisibleMap}
                    setIsVisibleMap={setIsVisibleMap}
                    locationFlowerShop={locationFlowerShop}
                    setLocationFlowerShop={setLocationFlowerShop}
                    toastRef={toastRef}
                />
        </View>

    )
}
//************Estableciendo la imagen principal************************************* */

function ImageFlowerShop({ imageFlowerShop}) {
    return (
        <View style={styles.viewPhono}>
            <Image
                style={{ width: widthScreen, height: 200}}
                source={
                    imageFlowerShop
                        ? {uri: imageFlowerShop} : require("../../../assets/img/no-image.png")
                }
            />
        </View>
    )
}
//-------Esta seccion es de la MAPA pero no funciono / si encuentras una manera mejor adelante pero 
//------ todo aquel componente o lineas de codigo que tengan que ver con map estan mal declaradas

function MapFloreria({ isVisibleMap, setIsVisibleMap, setLocationFlowerShop, toastRef }) {
    const [newRegion, setNewRegion] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await getCurrentLocation()
            if (response.status) {
                setNewRegion(response.location)
            }
        })()
    }, []) 
    
    const confirmLocation = () => {
        setLocationFlowerShop(newRegion)
        toastRef.current.show("Localización guardada correctamente", 3000)
        setIsVisibleMap(false)
        console.log(newRegion)
    }

    return (
        <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>

            <View>
                {
                    newRegion && (
                        <MapView
                            style={styles.mapStyle}
                            initialRegion={newRegion}
                            showsUserLocation={true}
                            onRegionChange={(region) => setNewRegion(region)}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: newRegion.latitude,
                                    longitude: newRegion.longitude
                                }}
                                draggable
                            />
                        </MapView>
                    )
                }
                <View style={styles.viewMapBtn}>
                    <Button
                        title="Guardar Ubicación"
                        containerStyle={styles.viewMapBtnContainerSave}
                        buttonStyle={styles.viewMapBtnSave}
                        onPress={confirmLocation}
                    />
                     <Button
                        title="Cancelar Ubicación"
                        containerStyle={styles.viewMapBtnContainerCancel}
                        buttonStyle={styles.viewMapBtnCancel}
                        onPress={() => setIsVisibleMap(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}

export const getCurrentLocation = async() => {
    const response = { status: false, location: null }
    const resultPermissions = await Permissions.askAsync(Permissions.LOCATION);
    console.log(resultPermissions)
    if (resultPermissions.status === "denied") {
        Alert.alert("Debes dar permisos para la localizacion")
        return response
    }
    const position = await Location.getCurrentPositionAsync({});
    const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }
    response.status = true
    response.location = location
    return response
}
//********************************AQUI TERMINA EL CODIGO DE MAP********************************************************************************** */


//Esta seccion es para subir las imagenes


function UploadImage(props) {
    const {toastRef, imagesSelected, setImagesSelected} = props
        const imageSelect = async() => {
            const response = await loadImageFromGallery([4, 3])
            if (!response.status) {
                toastRef.current.show("No seleccionastes nada", 3000)
                return
            }
            setImagesSelected([...imagesSelected, response.image])
            console.log(response)
        }

    const removeImage = (image) => {
        Alert.alert(
            "Eliminar Imagen",
            "Estas seguro que quieres eliminar la imagen",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                {
                    text: "Si",
                    onPress: () => {
                        setImagesSelected(
                            filter(imagesSelected, (imageUrl) => imageUrl !== image)
                        )
                    }
                }
            ],
            {
                cancelable: false
            }
        )
    }

    return(
        <ScrollView
            horizontal
            style={styles.viewImage}
        >
            {
                size(imagesSelected) < 4 && (
                    <Icon
                        type='material-community'
                        name='camera'
                        color='#4a2e00'
                        containerStyle={styles.containerIcon}
                        onPress={imageSelect}
                    />
                )
            }
            {
                map(imagesSelected, (imageFlowerShop, index) => (
                    <Avatar
                        key={index}
                        style={styles.miniatureStyle}
                        source={{ uri: imageFlowerShop}}
                        onPress={() => removeImage(imageFlowerShop)}
                    />
                ))
            }
        </ScrollView>
    )
}

export const loadImageFromGallery = async(array) => {
    const response = { status: false, image: null}
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    console.log(resultPermissions.permissions.mediaLibrary)
    const resultPermissionsCamera = resultPermissions.permissions.mediaLibrary.status

    if (resultPermissions.status === "denied") {
        Alert.alert("Debes de darle permiso para acceder a las imagenes del telefono")
        return response   
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: array
    })
    if (result.cancelled) {
        return response
    }
    response.status = true
    response.image = result.uri
    console.log(result.uri)
    return response

}

//-------esta es seccion de los estilos---------

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
    },
    miniatureStyle:{
        width: 70,
        height: 70,
        marginRight: 10,
    },
    viewPhono: {
        alignItems: 'center',
        height: 200,
        marginBottom: 20
    },
    mapStyle:{
        width: "100%",
        height: 550
    },
    viewMapBtn:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    viewMapBtnContainerCancel:{
        paddingLeft: 5
    },
    viewMapBtnContainerSave:{
        paddingRight: 5
    },
    viewMapBtnCancel:{
        backgroundColor: "#4a2e00"
    },
    viewMapBtnSave: {
        backgroundColor: "#218876"
    }
})
